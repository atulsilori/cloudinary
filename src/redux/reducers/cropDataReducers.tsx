const cropDataReducer = (state = { x: 0, y: 0, width: 0, height: 0 }, action: ICropdata): Idata => {
  switch(action.type){
    case 'cropdata':
      return action.value;
    default:
      return state;

  }
};

export default cropDataReducer;
