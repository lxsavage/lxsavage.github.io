<template>
  <nav>
    <ul class="flex justify-center mt-5 mb-5">
      <li class="text-center inline pr-5 pl-5" v-for="item in props.items">
        <a v-if="item.urlIsExternal" :href="item.url">{{ item.name + ' | ' + item.url }}</a>
        <NuxtLink v-else :to="item.url" class="border-black-100">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
interface INavItem {
  name: string,
  url: string,
  icon: string,
  urlIsExternal?: boolean
}

const props = defineProps<{
  title?: string,
  items: INavItem[],
}>();
</script>