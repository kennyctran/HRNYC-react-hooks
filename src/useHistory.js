import React, { useState } from 'react';

function useHistory () {
  const [state, setState] = useState(() => {
    return [];
  });

  const setStateSupercharged = {
    remove() {
      setState(state.slice(0, state.length - 1));
    },

    add(item) {
      setState([...state, item]);
    },

    mix() {
      const copy = [...state];
      for (let i = copy.length - 1; i > 0; i--) {
        const randomIdx = Math.floor(Math.random() * i);
        if (randomIdx !== i) {
          [copy[i], copy[randomIdx]] = [copy[randomIdx], copy[i]];
        }
      }
       setState(copy);
    },

    findTheMaximum() {
      const maxNum = state.reduce((accum, item) => {
        return Math.max(accum, item);
      });
      setState([maxNum]);
    }
  }
  return [state, setStateSupercharged];
}

export default useHistory;