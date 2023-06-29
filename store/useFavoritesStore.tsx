import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { UseFavoritesStore } from "../types/store/UseFavoritesStoreType";

const useFavoritesStore = create(
  immer<UseFavoritesStore>((set) => ({
    ids: [],
    addFavorite: (id) => {
      set((state) => {
        state.ids.push(id);
      });
    },
    removeFavorite: (id) => {
      set((state) => {
        state.ids = state.ids.filter((mealId: string) => mealId !== id);
      });
    },
  }))
);

export default useFavoritesStore;
