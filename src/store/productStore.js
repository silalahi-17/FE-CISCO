// productStore.js
import { create } from 'zustand'
import { ENDPOINTS } from '../config/api';

const  useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })

    try {
      const res = await fetch(ENDPOINTS.products)
      const json = await res.json()

      const parentProducts = (json.aaData || []).filter(p=> p.type === 'parent')
      set({ products: parentProducts, loading: false })
    } catch (err) {
      set({ error: err.message || 'Gagal mengambil produk', loading: false })
    }
  },
  
  getProductById: (id) => {
    const allProducts = get().products
    const found = allProducts.find(p => p.id === parseInt(id))
    return found

  },
}));

export default useProductStore;