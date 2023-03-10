const infoReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_INFO':
        return payload;
  
      default:
        return state;
    }
  };
  
  export default infoReducer;
  