<template>
  <div class="container mx-auto md:shadow-2xl bg-neutral-50 p-5 md:mt-5 rounded-xl">
    <GithubUserBanner username="lxsavage"/>
    <Navbar :items="items"></Navbar>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Projects',
    url: '/projects'
  },
  {
    name: 'Resume',
    url: '/'
  }
]
</script>