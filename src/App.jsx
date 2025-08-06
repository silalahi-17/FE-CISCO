import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ArrowUp, Sparkles } from "lucide-react";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/Category";
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);


  return (

    
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
     
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin border-t-indigo-600"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-purple-200 rounded-full animate-ping opacity-20"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="flex space-x-1 justify-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-pink-600 rounded-full animate-bounce delay-200"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium">Loading...</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10">
        <div className="min-h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories/:slug" element={<CategoryPage />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-40">
        <Footer />
      </div>

     
    </div>
  );
}

export default App;