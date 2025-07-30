import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "layout2" | "layout3"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}