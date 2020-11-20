import { ACTION_1 } from "./types";

const initialState = {
  posts: [{ id: 1, text: "post text" }]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_1:
      return {
        ...state,
        posts: [
          ...state.posts,
          { ...action.payload, id: state.posts.length + 1 }
        ]
      };
    case "ACTION_2":
      return { value: action.value_2 };

    default:
      return state;
  }
};
