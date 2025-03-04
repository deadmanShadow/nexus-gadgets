"use client";
import { productsDummyData } from "@/assets/assets";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";
  const router = useRouter();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const fetchProductData = async () => {
    setProducts(productsDummyData);
  };

  const fetchUserData = async () => {
    try {
      if (user.publicMetadata.role === "seller") {
        setIsSeller(true);
      }
      const token = await getToken();
      const { data } = await axios.get("/api/user/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setUserData(data.user);
        setCartItems(data.user.cartItems);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      /// i remove the error
    }
  };

  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Item added to cart");
    // setCartItems((prevCart) => ({
    //   ...prevCart,
    //   [itemId]: (prevCart[itemId] || 0) + 1,
    // }));
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems((prevCart) => {
      if (quantity === 0) {
        const newCart = { ...prevCart };
        delete newCart[itemId];
        return newCart;
      }
      return { ...prevCart, [itemId]: quantity };
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  };

  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, qty]) => {
      const item = products.find((product) => product.id === Number(itemId));
      return total + (item ? item.price * qty : 0);
    }, 0);
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  useEffect(() => {
    fetchUserData();
  }, [user]);

  const value = {
    user,
    getToken,
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    fetchUserData,
    products,
    fetchProductData,
    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
