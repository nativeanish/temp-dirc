import { create } from "zustand";
export default useBlock = create((set) => ({
  data: {},
  set: (_data) => set(() => ({ data: _data })),
}));
