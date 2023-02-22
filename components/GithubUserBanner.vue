<template>
  <div class="md:container mx-auto md:max-w-md rounded-lg md:shadow p-5 mt-5 mb-5">
    <section v-if="state.isLoading">
      <p class="text-center">Loading GitHub information for {{ props.username }}...</p>
    </section>
    <div v-else class="gap-4 columns-2">
      <img class="h-32 w-auto rounded-full" :src="state.githubUser.avatar_url" :alt="`Profile photo of ${state.githubUser.name}`" />
      <div>
        <h1 class="text-2xl">
          <a :href="state.githubUser.html_url" style="text-decoration: none; color: black">
            {{ state.githubUser.name }}
          </a>
        </h1>
        <p>{{ state.githubUser.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  username: String,
})
const state = reactive({
  isLoading: true,
  githubUser: {},
})

fetch(`https://api.github.com/users/${encodeURIComponent(props.username as string)}`)
    .then(async result => {
      state.githubUser = await result.json()
      state.isLoading = false
    })
    .catch(err => {
      console.log('Failed to fetch res due to error')
    })

</script>