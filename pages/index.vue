<template>
  <div>
    <GithubUserBanner :props="githubUser" />
  </div>
</template>

<script lang="ts" setup>
import GithubUserBanner from "~/components/GithubUserBanner.vue";

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