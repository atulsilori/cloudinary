const cloudinaryUrlReducers = (state='', actions:IAction): string=>{
  switch (actions.type) {
    case 'cloudinaryurl':
      return actions.value;
    default:
      return state;
  }
};

export default cloudinaryUrlReducers;
