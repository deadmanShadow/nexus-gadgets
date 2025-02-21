const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 border-4 border-t-transparent border-orange-500 rounded-full animate-spin"></div>
        <div className="h-10 w-10 bg-orange-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
