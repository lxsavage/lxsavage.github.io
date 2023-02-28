<template>
  <section>
    <slot name="visible-text"></slot>
    <button @click="state.expanded = !state.expanded" class="flex mx-auto hover:text-slate-500 mt-2">
      <template v-if="state.expanded">
        <p class="align-text-middle">
          <FontAwesomeIcon :icon="faChevronUp" class="mr-1" />
          {{ props.collapseText || 'Collapse' }}
        </p>
      </template>
      <template v-else>
        <p class="align-text-middle">
          <FontAwesomeIcon :icon="faChevronDown" class="mr-1" />
          {{ props.expandText || 'Expand' }}
        </p>
      </template>
    </button>
    <div v-show="state.expanded" class="mt-2">
      <slot name="expanded-text"></slot>
    </div>
    <br class="mb-5" />
  </section>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

interface IProps {
  expandText ?: string,
  collapseText ?: string,
}

const props = defineProps<IProps>();
const state = reactive({
  expanded: false
});
</script>