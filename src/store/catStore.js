import { create } from "zustand";
import {slugify} from "../utils/slugify";

const useCatStore = create((set) => ({
  categories: [],
  isLoading: false,
  error: null,

  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://sistemtoko.com/public/demo/cat");
      if (!response.ok) {
        throw new Error("Gagal mengambil kategori");
      }

      const data = await response.json();
      const categories = data.aaData
        .filter((item) => item.product_category_show === 1)
        .map((item) => ({
          id: item.product_category_id,
          name: item.product_category_name,
          slug: slugify(item.product_category_name),
        }));

      set({ categories, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useCatStore;
