import type { Ref } from "@vue/composition-api";
import { defineComponent, ref } from "@vue/composition-api";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: { HelloWorld },
  setup() {
    const mini: Ref<boolean> = ref(true);

    const variable: Ref<string | undefined> = ref("");
    const portals: Ref<{ id: number; name: string }[]> = ref([]);
    const selectedPortalId: Ref<number | undefined> = ref<number>();

    return { mini, variable, portals, selectedPortalId };
  },
});
