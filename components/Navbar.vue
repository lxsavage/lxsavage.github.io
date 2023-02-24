<template>
  <nav>
    <ul class="flex justify-center mt-5 mb-5">
      <li class="text-center inline pr-5 pl-5" v-for="item in props.items">
        <a v-if="item.urlIsExternal"
           :href="item.url">
          {{ item.name }}
        </a>
        <a target="_blank" class="text-black cursor-default" v-else-if="router.currentRoute.value.fullPath === item.url">
          {{ item.name }}
        </a>
        <NuxtLink v-else
                  :to="item.url"
                  class="text-gray-500 hover:text-black">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter();

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