import { create } from "zustand";

// View transition related store
// Currently, it tracks ongoing animations to prevent interaction during transitions

const useViewTransitionsStore = create(() => ({
  animations: [] as Animation[],
}));

export function pushAnimation(animation: Animation) {
  useViewTransitionsStore.setState((state) => ({
    animations: [...state.animations, animation],
  }));
}

export function popAnimation(animation: Animation) {
  useViewTransitionsStore.setState((state) => ({
    animations: state.animations.filter((a) => a !== animation),
  }));
}

export function getAnimations() {
  return useViewTransitionsStore.getState().animations;
}
