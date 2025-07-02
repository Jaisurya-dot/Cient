import { create } from "zustand";
import axios from "axios";

export const useContactStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (form) => {
    if (!form.name || !form.email || !form.product || !form.message ||!form.phone) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await axios.post("/api/contacts", form);
      set((state) => ({ products: [...state.products, res.data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Failed to create product",
      };
    }
  },

  fetchContacts: async () => {
    try {
      const res = await axios.get("/api/contacts");
      set({ products: res.data.data });
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  },

  deleteProduct: async (pid) => {
    try {
      const res = await axios.delete(`/api/contacts/${pid}`);
      if (!res.data.success) {
        return { success: false, message: res.data.message };
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));
      return { success: true, message: res.data.message };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Failed to delete product",
      };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await axios.put(`/api/products/${pid}`, updatedProduct);
      if (!res.data.success) {
        return { success: false, message: res.data.message };
      }

      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? res.data.data : product
        ),
      }));
      return { success: true, message: res.data.message };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Failed to update product",
      };
    }
  },
}));
