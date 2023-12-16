interface Plans {
  [id: number]: Plan;
}
interface Plan {
  id: number;
  title: string;
  price: number;
  image: string;
}

const reducer = (state = {} as Plans, action: any) => {
  if (action.type === 'ADD_SUBSCRIPTION') {
    return {
      ...state,
      [action.payload.id]: action.payload,
    };
  } else if (action.type === 'REMOVE_SUBSCRIPTION') {
    return {
      ...state,
      [action.payload.id]: undefined,
    };
  }
  return state;
};

export default reducer;
