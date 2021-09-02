import type { Ref } from "@vue/composition-api";
import { ref } from "@vue/composition-api";

export function useThing(): { thing: Ref<boolean> } {
  const thing: Ref<boolean> = ref(false);

  return { thing };
}
