<template>
  <div>
    <section v-if="state.pageLoading"></section>
    <section v-else>
        <img :src="state.githubUser.avatar_url" :alt="`Profile photo of ${state.githubUser.name}`" />
        <h1>
          <a :href="state.githubUser.html_url" style="text-decoration: none; color: black">
            {{ state.githubUser.name }}
          </a>
        </h1>
        <p>{{ state.githubUser.bio }}</p>
        <ul>
          <li>Followers: {{ state.githubUser.followers }}</li>
          <li>Following: {{ state.githubUser.following }}</li>
        </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
const BASE_URL = 'https://api.github.com/users/';
const name = 'index.vue';

const state = reactive({
  githubUser: {},
  pageLoading: true
})

fetch(BASE_URL + 'lxsavage')
  .then(async result => {
    state.githubUser = await result.json()
    state.pageLoading = false
  })
  .catch(err => {
    console.log('Failed to fetch res due to error')
  })
</script>