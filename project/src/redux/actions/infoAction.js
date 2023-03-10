export const getInfoAC = (payload) => ({ type: 'GET_INFO', payload });



export const getInfoThunk = () => async (dispatch) => {
    try {
      const response = await fetch('http:localhost:3002/data');
      const data = await response.json();
      console.log(data,'<<<<');
      dispatch(getInfoAC(data));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  