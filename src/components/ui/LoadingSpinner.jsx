const LoadingSpinner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-4 border-primary/30"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
