export const ActionType = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  EMPTY_CART: 'EMPTY_CART',
  CLOSE_TOAST: 'CLOSE_TOAST',
}


const removeItem = ({state, id}) => {
  const foundItem = state.items.find(i => i.id === id);
    if (!foundItem) {
      return state;
    }
    const newItems = state.items.filter(i => i.id !== id);
    const newSum = state.sum - (foundItem.price * foundItem.count);
    return {
      ...state,
      items: newItems,
      sum: newSum,
    };
}


export default function reducer(state, {type, payload}) {
  switch (type) {
    case ActionType.TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case ActionType.ADD_ITEM: {
      let newItems;
      let newSum;

      const foundItem = state.items.find(i => i.id === payload.id);
      if (foundItem) {
        const updatedItem = {...foundItem, count: foundItem.count + 1};
        newItems = state.items.map(i => i.id === payload.id ? updatedItem : i);
        newSum = state.sum + payload.price;
      } else {
        newItems = [...state.items, {...payload, count: 1}];
        newSum = state.sum + payload.price;
      }

      return {
        ...state,
        items: newItems,
        sum: newSum,
        toastItemName: payload.name,
      };
    }

    case ActionType.REMOVE_ITEM: {
      return removeItem({state, id: payload});
    }

    case ActionType.INCREMENT_ITEM: {
      const foundItem = state.items.find(i => i.id === payload);
      if (foundItem) {
        const count = foundItem.count + 1;
        const updatedItem = {...foundItem, count};
        const newItems = state.items.map(i => i.id === payload ? updatedItem : i);
        const newSum = state.sum + foundItem.price;

        return {
          ...state,
          items: newItems,
          sum: newSum,
        };
      }
      return state;
    }

    case ActionType.DECREMENT_ITEM: {
      const foundItem = state.items.find(i => i.id === payload);
      if (foundItem) {
        const count = foundItem.count - 1;
        if (count <= 0) {
          return removeItem({state, id: payload});
        }

        const updatedItem = {...foundItem, count};
        const newItems = state.items.map(i => i.id === payload ? updatedItem : i);
        const newSum = state.sum - foundItem.price;
        return {
          ...state,
          items: newItems,
          sum: newSum,
        };
      }
      return state;
    }

    case ActionType.EMPTY_CART: {
      return {
        ...state,
        items: [],
        sum: 0,
      };
    }

    case ActionType.CLOSE_TOAST: {
      return {
        ...state,
        toastItemName: '',
      };
    }

    default:
      return state;
  }
}
