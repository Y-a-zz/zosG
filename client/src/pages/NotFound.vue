<script setup lang="ts">

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template >
  <section class="flex flex-col w-[100vw] min-h-lvh pt-40 pb-20 items-center   text-center bg-gradient-to-b from-blue-200 via-white to-blue-50">
    <!-- Hero section -->
    <h1 class="text-4xl md:text-6xl font-bold text-blue-300 mb-4">
      {{t('notFoundTitle')}}
    </h1>
    <p class="max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
      {{t('notFoundText')}}
    </p>
  </section>
</template>
