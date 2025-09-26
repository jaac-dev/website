<script setup lang="ts"></script>

<template>
  <div class="background absolute w-full min-h-screen top-0 left-0">
    <main class="w-full px-4 md:px-8 lg:mx-auto max-w-[80rem] flex flex-col min-h-screen">
      <div class="flex-grow">
        <RouterView />
      </div>
      <footer class="flex justify-center items-center py-8">
        <p class="text-lg text-gray-300">
          Copyright (c) 2025 - <span class="text-blue-200">Jack McCally</span>, All rights reserved.
        </p>
      </footer>
    </main>
  </div>
</template>

<style scoped></style>
