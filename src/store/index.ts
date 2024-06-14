import { create } from 'zustand'
import { RendererType } from 'echarts/types/src/util/types.js'

interface State {
  renderer: RendererType
}

interface Action {
  setRenderer: (renderer: RendererType) => void
}

const useConfigStore = create<State & Action>((set: any) => ({
  renderer: 'canvas',
  setRenderer: (renderer: any) => set({ renderer })
}))

export default useConfigStore
