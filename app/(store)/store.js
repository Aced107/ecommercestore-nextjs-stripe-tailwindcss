import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  openModal: false,
  setOpenModal: () => {
    set((state) => ({
      ...state,
      openModal: !state.openModal,
    }));
  },
  addItemToCart: (params) => {
    const { newItem } = params;
    const { cart } = get();
    const existingIndex = cart.findIndex(
      (item) => item.price_id === newItem.price_id
    );

    if (existingIndex !== -1) {
      // Item already exists in cart, update quantity and cost
      const updatedCart = cart.map((item, index) => {
        if (index === existingIndex) {
          return {
            ...item,
            quantity: item.quantity + newItem.quantity,
            cost: item.cost + newItem.cost * newItem.quantity, // Correcting the cost calculation
          };
        }
        return item;
      });

      set({ cart: updatedCart });
    } else {
      // Item does not exist in cart, add it
      set((state) => ({
        ...state,
        cart: [...state.cart, newItem],
      }));
    }
  },

  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    const { cart } = get();
    const updatedCart = [...cart];
    const itemToRemove = updatedCart[itemIndex];

    if (itemToRemove.quantity > 1) {
      updatedCart[itemIndex] = {
        ...itemToRemove,
        quantity: itemToRemove.quantity - 1,
        cost: itemToRemove.cost - itemToRemove.cost / itemToRemove.quantity, // Correcting the cost calculation
      };
    } else {
      updatedCart.splice(itemIndex, 1);
    }

    set({ cart: updatedCart });
  },

  emptyCart: () => {
    set((state) => ({
      ...state,
      cart: [],
    }));
  },
  getTotalQuantity: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCart;
