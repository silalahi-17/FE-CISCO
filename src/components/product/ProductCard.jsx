import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden">
      <img
        src={product.photo}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">
          Rp {new Intl.NumberFormat("id-ID").format(product.price)}
        </p>
        <Link      
          to={`/product/${product.id}`}
          className="inline-block mt-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
