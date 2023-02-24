<template>
  <div class="container mx-auto md:shadow-2xl md:max-w-2xl bg-neutral-50 p-5 md:mt-5 rounded-xl">
    <header>
      <GithubUserBanner username="lxsavage"/>
      <Navbar :items="items" />
    </header>
    <slot />
    <hr class="mt-5" />
    <footer>
      <ContactButtons />
    </footer>
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
    url: '/resume'
  }
]
</script>