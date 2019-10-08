import { SAVE_LOOP } from './index';
import axios from 'axios';

export const saveLoop = id => ({
  type: SAVE_LOOP,
  id
});

export const saveLoopThunk = (sound, loopId) => {
  return async dispatch => {
    if (!loopId) {
      const { data } = await axios.post('/api/loops/', sound);
      dispatch(saveLoop(data.id));
    } else {
      const { data } = await axios.put('/api/loops/', sound);
      dispatch(saveLoop(data.id));
    }
  };
};

const initialState = {
  id: null
};
export default function loops(state = initialState, action) {
  switch (action.type) {
    case SAVE_LOOP: {
      return action.id;
    }
    default:
      return state;
  }
}