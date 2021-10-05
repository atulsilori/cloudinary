const cloudinaryUrlActions = (url:string):IAction => {
  return{
    type: 'cloudinaryurl',
    value: url,
  };
};

export default cloudinaryUrlActions;
