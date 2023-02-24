<template>
  <div class="md:container mx-auto md:max-w-xl p-5">
    <a :href="props.user.profileURL">
      <div class="md:gap-4 md:columns-2 md:flex">
        <img class="h-32 w-32 rounded-full mx-auto md:mr-0"
             :src="props.user.avatarURL"
             :alt="`Profile photo of ${props.user.name}`" />
        <div class="text-center pt-2 md:pt-0 md:text-left md:my-auto">
          <h1 class="text-2xl font-mono">
              {{ props.user.name }}
          </h1>
          <p class="mb-2">{{ props.user.bio }}</p>
          <p>
            <FontAwesomeIcon :icon="faLocationDot" class="mr-1" />
            {{ props.user.location }}
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
  username: string,
  user: IGithubUser,
}

const props = defineProps<IGithubUserBannerProps>();
</script>