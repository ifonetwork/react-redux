import { ACTION_1 } from "./types";

export const postAction = (post) => {
  return {
    type: ACTION_1,
    payload: post
  };
};
