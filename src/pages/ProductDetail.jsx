import React from 'react'
import { Package } from 'lucide-react'
import { useParams } from 'react-router-dom'
import useProductStore from '../store/productStore';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useProductStore((state) => state.getProductById(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md mx-4">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Produk tidak ditemukan</h3>
        </div>
      </div>
    )
  }

  const firstPhoto = product.photos?.[0] || product.photo

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-2xl transform scale-110"></div>
                <img 
                  src={firstPhoto} 
                  alt={product.name} 
                  className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Product Name */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  {product.name}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <p className="text-sm text-gray-600 mb-1">Harga</p>
                <p className="text-3xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'} shadow-lg`}></div>
                <p className={`font-semibold ${product.stock > 0 ? 'text-green-700' : 'text-red-700'}`}>
                  Stok: {product.stock > 0 ? `${product.stock} unit tersedia` : 'Habis'}
                </p>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description || 'Deskripsi produk tidak tersedia'}
                </p>
              </div>

              {/* Variants */}
              {product.childs?.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Varian Produk</h4>
                  <div className="space-y-3">
                    {product.childs.map((child) => (
                      <div 
                        key={child.id} 
                        className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-semibold text-gray-900">
                              {child.varian?.[0]?.value || 'Varian'}
                            </h5>
                            <p className="text-blue-600 font-bold">
                              {formatPrice(child.price)}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                              child.stock > 0 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-red-100 text-red-700'
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                child.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                              }`}></div>
                              Stok: {child.stock}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail