import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WidgetType = "bookmarks";

export interface WidgetInstance {
  id: string;
  type: WidgetType;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minimized: boolean;
  zIndex: number;
}

interface WidgetState {
  widgets: WidgetInstance[];
  nextZ: number;
  addWidget: (widget: Omit<WidgetInstance, "zIndex">) => void;
  removeWidget: (id: string) => void;
  updateWidget: (id: string, patch: Partial<WidgetInstance>) => void;
  focusWidget: (id: string) => void;
  toggleMinimize: (id: string) => void;
}

const defaultWidgets: WidgetInstance[] = [
  {
    id: "bookmarks-1",
    type: "bookmarks",
    title: "Bookmarks",
    x: 40,
    y: 40,
    w: 340,
    h: 380,
    minimized: false,
    zIndex: 1,
  },
];

export const useWidgetStore = create<WidgetState>()(
  persist(
    (set, get) => ({
      widgets: defaultWidgets,
      nextZ: 2,
      addWidget: (widget) =>
        set((state) => ({
          widgets: [...state.widgets, { ...widget, zIndex: state.nextZ }],
          nextZ: state.nextZ + 1,
        })),
      removeWidget: (id) =>
        set((state) => ({
          widgets: state.widgets.filter((w) => w.id !== id),
        })),
      updateWidget: (id, patch) =>
        set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, ...patch } : w
          ),
        })),
      focusWidget: (id) => {
        const z = get().nextZ;
        set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, zIndex: z } : w
          ),
          nextZ: z + 1,
        }));
      },
      toggleMinimize: (id) =>
        set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, minimized: !w.minimized } : w
          ),
        })),
    }),
    { name: "nova-exe-widgets" }
  )
);
