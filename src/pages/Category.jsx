import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import useCatStore from '../store/catStore';
import ProductCard from '../components/product/ProductCard';

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categories, fetchCategories } = useCatStore();

  // Load categories once
  useEffect(() => {
    if (categories.length === 0) fetchCategories();
  }, [categories.length, fetchCategories]);

  // Load products for selected category
  useEffect(() => {
    const loadProducts = async () => {
      const category = categories.find(c => c.slug === slug);
      if (!category) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://sistemtoko.com/public/demo/product?cat=${category.id}`);
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (categories.length > 0) loadProducts();
  }, [categories, slug]);

  const categoryName = categories.find(c => c.slug === slug)?.name || slug.replace('-', ' ');

  return (
    <section className="category-page">
      <div className="page-header">
        <Link to="/" className="breadcrumb">Home <ChevronRight /></Link>
        <span className="breadcrumb current">{categoryName}</span>
        <h1 className="page-title">Kategori: {categoryName}</h1>
      </div>

      {loading && <div className="loader">Memuat produk...</div>}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="product-grid">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.product_id} product={product} />
            ))
          ) : (
            <div className="empty-state">Tidak ada produk pada kategori ini.</div>
          )}
        </div>
      )}
    </section>
  );
};

export default CategoryPage;