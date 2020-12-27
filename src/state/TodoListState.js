import { atom } from "recoil";

const todoListState = atom({
  key: "todlListState",
  default: [],
});

export default todoListState;
