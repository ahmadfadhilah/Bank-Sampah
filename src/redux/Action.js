import {removeToken, storeToken} from '../services/storage/Token';

const changeToken = data => {
  data ? storeToken(data) : null;
  console.log('storing to redux');
  return {
    type: 'CHANGE',
    data: data,
  };
};

const setUser = (user) => {
    return {
        type: 'SET_USER',
        data: user,
    };
};

const setShopId = (data) => {
    return {
        type: 'SET_ID',
        data: data
    };
};

const clearToken = () => {
    removeToken();
    return {
      type: 'CLEAR',
    };
  };

const setCartData = () => {
    return {
        type: 'SET_CART',
        data: data
    };
};

const setChatBedge = () => {
    return {
        type: 'SET_CHAT_BEDGE',
        data: data,
    };
};

export {changeToken, setUser, setShopId, setCartData, setChatBedge, clearToken}