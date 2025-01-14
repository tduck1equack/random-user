import { create } from "zustand";
import randApi from "../api/randApi";
import { SORT_ORDER } from "../constants/sortOrders";

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
  prevPage: () =>
    set((state) => {
      if (state.page !== 1) return { page: state.page - 1 };
      else return null;
    }),
  nextPage: () =>
    set((state) => {
      if (state.page !== state.users.length / 10)
        return { page: state.page + 1 };
      else return null;
    }),
  fullNameSort: (order) =>
    set((state) => {
      switch (order) {
        case SORT_ORDER.ASCENDING:
          return {
            // sorting names using localCompare() which can apply for non-English names
            users: state.users.sort((a, b) =>
              a.name.first.localeCompare(b.name.first)
            ),
          };
        case SORT_ORDER.DESCENDING:
          return {
            // sorting names using localCompare() which can apply for non-English names
            users: state.users.sort((a, b) =>
              b.name.first.localeCompare(a.name.first)
            ),
          };
        default:
          return null;
      }
    }),
  usernameSort: (order) =>
    set((state) => {
      switch (order) {
        case SORT_ORDER.ASCENDING:
          return {
            // sorting names using localCompare() which can apply for non-English names
            users: state.users.sort((a, b) =>
              a.login.username.localeCompare(b.login.username)
            ),
          };
        case SORT_ORDER.DESCENDING:
          return {
            // sorting names using localCompare() which can apply for non-English names
            users: state.users.sort((a, b) =>
              b.login.username.localeCompare(a.login.username)
            ),
          };
        default:
          return null;
      }
    }),
}));
