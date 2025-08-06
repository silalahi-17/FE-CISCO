import { AlertCircle, Loader2 } from "lucide-react";
import useProductStore from "../store/productStore";
import { useEffect } from "react";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/product/productList";

const Home =() => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mx-auto" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-indigo-200 rounded-full animate-pulse mx-auto"></div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Loading Products</h3>
            <p className="text-gray-600">Please wait while we fetch the latest items...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
            <p className="text-gray-600 leading-relaxed">{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100">
      {/* Hero Section with enhanced styling */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>
        <HeroSection />
      </div>

      {/* Featured Products Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Featured Products
            </h2>
          </div>

          {/* Products Grid with enhanced container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="fixed top-40 right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="fixed bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
    </div>
  );
}

export default Home;