import type { ComputedRef } from "@vue/composition-api";
import { computed, defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: { msg: String },
  setup() {
    const count = ref(0);

    const double: ComputedRef<number> = computed(() => count.value * 2);

    return { count, double };
  },
});
