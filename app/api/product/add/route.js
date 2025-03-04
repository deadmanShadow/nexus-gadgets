import connectDB from "@/config/db";
import authSeller from "@/lib/authSeller"; // Ensure correct path
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    // 🔹 Authenticate Seller
    const userId = getAuth(request);
    const isSeller = await authSeller(userId);
    if (!isSeller) {
      return NextResponse.json(
        {
          success: false,
          message: "You are not authorized to add products",
        },
        { status: 403 }
      );
    }

    // 🔹 Parse Form Data
    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");
    const price = formData.get("price");
    const offerPrice = formData.get("offerPrice");
    const files = formData.getAll("images");

    // 🔹 Validate Data
    if (!name || !description || !category || !price || !offerPrice) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (!files || files.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No files uploaded",
        },
        { status: 400 }
      );
    }

    console.log("📂 Files Received:", files);

    // 🔹 Connect to Database
    await connectDB();

    // 🔹 Upload Files to Cloudinary
    const uploadImage = (file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(Buffer.from(file)).pipe(stream);
      });
    };

    const imageUrls = await Promise.all(files.map(uploadImage));

    // 🔹 Save Product to Database
    const newProduct = await Product.create({
      userId,
      name,
      description,
      category,
      price: Number(price),
      offerPrice: Number(offerPrice),
      image: imageUrls,
      date: Date.now(),
    });

    return NextResponse.json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Server error",
      },
      { status: 500 }
    );
  }
}
