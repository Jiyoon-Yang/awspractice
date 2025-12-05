import { create } from "zustand";

export const useLoadedStore = create((set) => {
  return {
    isLoaded: false,
    setIsLoaded: () => {
      set(() => ({ isLoaded: true }));
    },
  };
});
