<template>
  <h2 class="text-lg">
    {{ props.name }}
    <span v-if="props.date" class="float-right">{{ props.date }}</span>
    <span v-else class="float-right text-gray-500">In Progress</span>
  </h2>
  <h3 class="text-md">
    <b>Language:</b>
    {{  props.language }}
  </h3>
  <h3 v-if="props.class" class="text-md mb-2">
    <b>Class:</b>
    {{ props.class }}
  </h3>
  <section>
    <h3 class="text-lg">Description</h3>
    <slot name="description" />
  </section>
  <img v-if="props.img" :src="props.img"
       class="border-solid border-2 border-slate-300 md:rounded-lg md:shadow mt-2 mb-2"
       :alt="props.name + ' screenshot'" />
</template>

<script lang="ts" setup>
interface IProjectSummary {
  name: string,
  date?: string,
  language: string,
  class?: string,
  img?: string,
}

const props = defineProps<IProjectSummary>();
const slots = useSlots();
</script>