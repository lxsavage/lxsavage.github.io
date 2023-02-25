<template>
  <a :href="url" class="tile inline-block p-2 rounded-xl shadow hover:shadow-xl">
    <h3 class="text-lg">{{ props.name }}</h3>
    <h4 class="text-sm mb-2">Language: {{ props.lang }}</h4>
    <p class="text-sm">{{ props.description }}</p>
  </a>
</template>

<script lang="ts" setup>
interface ITileCardProps {
  name: string,
  lang: string,
  description: string,
  url?: string
}

const props = defineProps<ITileCardProps>();
</script>