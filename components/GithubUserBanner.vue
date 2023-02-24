<template>
  <div class="md:container mx-auto md:max-w-xl p-5">
    <section v-if="state.isLoading">
      <p class="text-center">...</p>
    </section>

    <a v-else :href="state.githubUser.html_url">
      <div class="md:gap-4 md:columns-2 md:flex">
        <img class="h-32 w-32 rounded-full mx-auto md:mr-0"
             :src="state.githubUser.avatar_url"
             :alt="`Profile photo of ${state.githubUser.name}`" />
        <div class="text-center pt-2 md:pt-0 md:text-left md:my-auto">
          <h1 class="text-2xl font-mono">
              {{ state.githubUser.name }}
          </h1>
          <p class="mb-2">{{ state.githubUser.bio }}</p>
          <p>
            <FontAwesomeIcon :icon="faLocationDot" class="mr-1" />
            {{ state.githubUser.location }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface IGithubUserBannerProps {
  username: string
}

interface IGithubUserBannerState {
  isLoading: boolean,
  githubUser: object,
}

const props = defineProps<IGithubUserBannerProps>();

const state: IGithubUserBannerState = reactive({
  isLoading: true,
  githubUser: {},
});

fetch(`https://api.github.com/users/${encodeURIComponent(props.username as string)}`)
    .then(async result => {
      state.githubUser = await result.json()
      state.isLoading = false
    })
    .catch(err => {
      console.log(`Failed to fetch Github profile due to error ${err}`)
    });

</script>