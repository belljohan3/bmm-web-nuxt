<script lang="ts" setup>
import authorizedUrl from "@/utils/authorizedUrl";
import { useAuth0 } from "@auth0/auth0-vue";

const props = defineProps<{
  src: string;
  alt?: string;
}>();

const source = ref<string>();
const { getAccessTokenSilently } = useAuth0();

onMounted(async () => {
  const token = await getAccessTokenSilently();
  source.value = authorizedUrl(props.src, token);
});
</script>
<template>
  <img :src="source" :alt="alt || ''" loading="lazy" v-bind="$attrs" />
</template>
