<template>
  <section>
    <ul class="flex justify-center mt-5">
      <li class="pr-5">
        <a href="https://www.linkedin.com/in/logan-savage-a7b776211" title="LinkedIn (Logan Savage)">
          <FontAwesomeIcon :icon="faLinkedinIn" class="text-lg hover:text-blue-600" />
        </a>
      </li>
      <li class="pr-5">
        <a href="mailto:lxsavage@proton.me" title="lxsavage@proton.me">
          <FontAwesomeIcon :icon="faEnvelope" class="text-lg hover:text-green-500" />
        </a>
      </li>
      <li>
        <a href="https://www.github.com/lxsavage" title="GitHub (lxsavage)">
          <FontAwesomeIcon :icon="faGithub" class="text-lg hover:text-purple-500" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>