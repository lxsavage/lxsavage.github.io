<template>
  <div>
    <h2 class="text-xl">GitHub</h2>

    <p v-if="state.isLoading">...</p>
    <div v-else class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <template v-for="repo in state.projects">
        <a :href="repo.html_url" class="tile inline-block p-2 rounded-xl shadow hover:shadow-xl">
          <h3 class="text-lg">{{ repo.full_name }}</h3>
          <h4 class="text-sm mb-2">Language: {{ repo.language }}</h4>
          <p class="text-sm">{{ repo.description }}</p>
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  username: string
}>();

const state = reactive({
  isLoading: true,
  projects: {}
})

fetch(`https://api.github.com/users/${encodeURIComponent(props.username as string)}/repos`)
    .then(async result => {
      state.projects = await result.json()
      state.isLoading = false
    })
    .catch(err => {
      console.log(`Failed to fetch GitHub user projects due to error ${err}`)
    });
</script>