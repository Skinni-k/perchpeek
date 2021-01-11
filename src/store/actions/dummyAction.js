import { DUMMY_ACTION_CONSTANT } from '../constants';


const request = () => {
  return {
    type: DUMMY_ACTION_CONSTANT,
  }
}

const success = (response) => {
  return {
    type: DUMMY_ACTION_CONSTANT,
    payload: {
      response,
    }
  }
}

const failure = error => {
  return {
    type: DUMMY_ACTION_CONSTANT,
    payload: {
      error
    }
  }
}

export const dummyAction = () => {
  
  return (dispatch)=>{
    /*
    dispatch(request());
    
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Make your asynchronous calls here ~~~~~~~~~~~~~~~~~~~~~~~~~

    fetch('http://example.com/movies.json')
    .then((response)=>{
      dispatch(success(response));
    })
    .catch((error)=> {
      dispatch(failure(error));
    })
    */
  }
}
