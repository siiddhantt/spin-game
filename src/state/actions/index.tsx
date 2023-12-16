interface Plan {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const addSubscription = (subscription: Plan) => {
  return (dispatch: (arg0: {type: string; payload: Plan}) => void) => {
    dispatch({
      type: 'ADD_SUBSCRIPTION',
      payload: subscription,
    });
  };
};

export const removeSubscription = (subscription: Plan) => {
  return (dispatch: (arg0: {type: string; payload: Plan}) => void) => {
    dispatch({
      type: 'REMOVE_SUBSCRIPTION',
      payload: subscription,
    });
  };
};
