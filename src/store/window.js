import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    /* ---------------- OPEN ---------------- */
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.isMinimized = false;
        win.zIndex = state.nextZIndex++;
        win.data = data ?? win.data;
      }),

    /* ---------------- CLOSE ---------------- */
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
        win.data = null;
      }),

    /* ---------------- FOCUS ---------------- */
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win || !win.isOpen) return;

        win.zIndex = state.nextZIndex++;
      }),

    /* ---------------- MINIMIZE ---------------- */
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win || !win.isOpen) return;

        win.isMinimized = true;
      }),

    /* ---------------- MAXIMIZE (TOGGLE) ---------------- */
    toggleMaximize: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win || !win.isOpen) return;
        
        
        
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;