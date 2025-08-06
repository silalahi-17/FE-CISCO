import React from 'react'
import { useParams } from 'react-router-dom'
import useProductStore from '../store/productStore'

const ProductDetail = () => {
  const { id } = useParams()
  const product = useProductStore(state => state.getProductById(id))

  if (!product) {
    return <div className="text-center mt-5">Produk tidak ditemukan</div>;
  }

  const firstPhoto = product.photos?.[0] || product.photo

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={firstPhoto} alt={product.name} width="300" />
      <p className="text-danger">Harga: Rp {product.price}</p>
      <p>Stok: {product.stock}</p>
      <p>Deskripsi: {product.description || '-'}</p>

      {product.childs?.length > 0 && (
        <>
          <h4>Varian Produk</h4>
          <ul>
            {product.childs.map((child) => (
              <li key={child.id}>
                {child.varian?.[0]?.value || 'Varian'} - Harga: Rp {child.price} | Stok: {child.stock}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ProductDetail;
