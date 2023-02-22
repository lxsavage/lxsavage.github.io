<template>
  <section v-if="state.isLoading">
    <h1>Loading...</h1>
  </section>
  <section v-else>
    <img :src="githubUser.avatar_url" :alt="`Profile photo of ${githubUser.name}`" />
    <h1>
      <a :href="githubUser.html_url" style="text-decoration: none; color: black">
        {{ githubUser.name }}
      </a>
    </h1>
    <p>{{ githubUser.bio }}</p>
    <ul>
      <li>Followers: {{ githubUser.followers }}</li>
      <li>Following: {{ githubUser.following }}</li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// TODO: Move API fetching logic here
const props = defineProps({
  githubUser: Object,
})
const state = reactive({
  isLoading: true
})

</script>

<style scoped>

</style>