import { create } from "zustand";

interface StateI {
    farmInfo: any
}

interface ActionI {
    setFarmInfo: (info: any) =>  void
}

const useFarmStore = create<StateI & ActionI>((set: any) => (
    {
        farmInfo: {},
        setFarmInfo: (farmInfo: any) => set({ farmInfo })
    }
))


export default useFarmStore;