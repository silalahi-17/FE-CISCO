import { Gift, Heart, ShoppingBag, TrendingUp, Zap } from "lucide-react";
import './section.css';

const HeroSection = () => {
  return (
    <div className="modern-hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <Zap size={16} />
                <span>New Collection 2024</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-line">Elevate Your</span>
                <span className="title-line gradient-text">Style Journey</span>
                <span className="title-line">Today</span>
              </h1>
              
              <p className="hero-description">
                Discover premium fashion that speaks to your unique personality. 
                From casual elegance to bold statements, find your perfect look.
              </p>
              
              <div className="hero-actions">
                <button className="hero-btn primary">
                  <ShoppingBag size={20} />
                  Shop Collection
                </button>
                <button className="hero-btn secondary">
                  <Heart size={20} />
                  View Wishlist
                </button>
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <strong>10K+</strong>
                  <span>Happy Customers</span>
                </div>
                <div className="stat-item">
                  <strong>500+</strong>
                  <span>Premium Products</span>
                </div>
                <div className="stat-item">
                  <strong>4.9★</strong>
                  <span>Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;