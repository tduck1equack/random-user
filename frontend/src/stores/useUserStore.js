import { create } from "zustand";
import randApi from "../api/randApi";

export const useUserStore = create((set) => ({
  users: [],
  page: 1,
  getUsers: async (number) => {
    try {
      const response = await randApi.get(`?results=${number}`);
      console.log(response);
      set({ users: await response.data.results });
    } catch (err) {
      console.log(err);
    }
  },
}));
