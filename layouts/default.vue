<template>
  <div class="container mx-auto md:shadow-2xl md:max-w-2xl bg-neutral-50 p-5 md:mt-5 rounded-xl">
    <header>
      <p>hi</p>
      <GithubUserBanner :user="user" />
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
const user = {
  name: 'Logan Savage',
  bio: 'Computer and Information Science student at The Ohio State University',
  avatarURL: 'https://avatars.githubusercontent.com/u/31578557?v=4',
  location: 'Columbus, OH, USA',
  profileURL: 'https://github.com/lxsavage'
}
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