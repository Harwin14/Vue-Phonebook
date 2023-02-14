import { defineStore } from "pinia";
import { request } from "./api";

export const useContactStore = defineStore({
  id: "contact",
  state: () => ({
    rawItems: [],
    params: {
      page: 1,
      totalPages: 1,
    },
  }),
  getters: {
    items: (state) => state.rawItems,
  },
  actions: {
    async loadItem() {
      try {
        const { data } = await request.get("users", { params: this.params });

        this.rawItems = [
          ...(this.params.page === 1 ? [] : this.rawItems),
          ...data.data.contacts.map((item) => ({
            id: item.id,
            name: item.name,
            phone: item.phone,
            sent: true,
          })),
        ];
        this.params = {
          page: data.data.page,
          totalPages: data.data.totalPages,
        };
      } catch (error) {
        console.log("Error load data ", error);
      }
    },
    async pagination() {
      try {
        if (this.params.page < this.params.totalPages) {
          let params = {
            ...this.params.totalPages,
            page: this.params.page + 1,
          };
          const { data } = await request.get("users", { params });
          this.params = {
            page: data.data.page,
            totalPages: data.data.totalPages,
          };
          this.rawItems = [
            ...this.rawItems,
            ...data.data.contacts.map((item) => {
              item.sent = true;
              return item;
            }),
          ];
        }
      } catch (error) {
        console.log("Pagination error", error);
      }
    },

    async searchItem({name,phone}) {
      let params = {
        ...this.params,
        name,
        phone,
        page: 1,
      };
      try {
        const { data } = await request.get("users", { params });
        params = {
          ...params,
          totalPages: data.data.totalPages,
        };
        this.rawItems = data.data.contacts.map((item) => {
          item.sent = true;
          return item;
        });
      } catch (error) {
        console.log("Error search data", error);
      }
    },

    async addItem({ name, phone }) {
      try {
        const id = Date.now();
        this.rawItems.unshift({ id, name, phone });
        const { data } = await request.post("users", { name, phone });
        this.rawItems = this.rawItems.map((item) => {
          if (item.id === id) {
            return {
              id: data.data.id,
              name: data.data.name,
              phone: data.data.phone,
              sent: true,
            };
          }
          return item;
        });
      } catch (error) {
        console.log("Error Add data", error);
        this.rawItems = this.rawItems.map((item) => {
          if (item.id === id) {
            return {
              id: item.id,
              name: data.data.name,
              phone: data.data.phone,
              sent: false,
            };
          }
          return item;
        });
      }
    },

    async removeItem(id) {
      try {
        await request.delete(`users/${id}`);
        this.rawItems = this.rawItems.filter((item) => item.id !== id);
      } catch (error) {
        console.log("Error delete data", error);
      }
    },
    async updateItem({ id, name, phone }) {
      const { data } = await request.put(`users/${id}`, { name, phone });
      try {
        this.rawItems = this.rawItems.map((item) => {
          if (item.id === id) {
            return {
              ...data.data,
              sent: true,
            };
          }
          return item;
        });
      } catch (error) {
        console.log("Error update data", error);
      }
    },
    async resendItem({ id, name, phone }) {
      try {
        const { data } = await request.post("users", { name, phone });
        if (data.success) {
          this.rawItems = this.rawItems.map((item) => {
            if (item.id === id) {
              return {
                id: data.data.id,
                name: data.data.name,
                phone: data.data.phone,
                sent: true,
              };
            }
            return item;
          });
        }
      } catch (error) {
        console.log("Error Add data", error);
      }
    },
  },
});
