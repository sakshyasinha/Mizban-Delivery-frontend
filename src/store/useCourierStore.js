import { create } from "zustand";
import { courierService } from "../services/courierService";

export const useCourierStore = create((set, get) => ({
  couriers: [],
  isLoading: false,
  error: null,

  fetchCouriers: async () => {
    set({ isLoading: true });
    try {
      const response = await courierService.getAll();
      set({ couriers: response.data, isLoading: false });
    } catch (err) {
      set({ error: "Failed to fetch couriers", isLoading: false });
    }
  },

  addCourier: async (newCourier) => {
    await courierService.create(newCourier);
    get().fetchCouriers(); // Refresh list after adding
  },

  updateCourier: async (id, updatedData) => {
    await courierService.update(id, updatedData);
    get().fetchCouriers(); // Refresh list after updating
  },

  deleteCourier: async (id) => {
    if (window.confirm("Are you sure?")) {
      await courierService.delete(id);
      // Optional: Optimistic update (remove from state immediately)
      set({ couriers: get().couriers.filter((c) => c.id !== id) });
    }
  },
}));
