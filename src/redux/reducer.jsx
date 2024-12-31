const initialState = {
  product: JSON.parse(localStorage.getItem('product')) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT": 
    let result=[...state.product,action.payload]
    localStorage.setItem('product',JSON.stringify(result))
      return {...state,product:result}
   
      
    default:
      return state;
  }
};
