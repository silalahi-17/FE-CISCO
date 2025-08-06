import { useState } from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../../store/productStore";
import PaginationComponent from "../Pagination";

const ProductList = () => {
  const { products, loading, error } = useProductStore();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  if (loading) return <p className="text-center py-10 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ProductList;
