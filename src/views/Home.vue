<script setup lang="ts">
import { Vue, React, NextJS, NestJS, TypeScript, JavaScript, Rust, CPlusPlus, Java } from '../icons'

const skills = {
  languages: [
    {
      name: 'TypeScript',
      icon: TypeScript,
    },
    {
      name: 'JavaScript',
      icon: JavaScript,
    },
    {
      name: 'Rust',
      icon: Rust,
    },
    {
      name: 'C/C++',
      icon: CPlusPlus,
    },
    {
      name: 'Java',
      icon: Java,
    },
  ],

  frameworks: [
    {
      name: 'Vue.js',
      icon: Vue,
    },
    {
      name: 'React',
      icon: React,
    },
    {
      name: 'Next.js',
      icon: NextJS,
    },
    {
      name: 'NestJS',
      icon: NestJS,
    },
  ],
}
</script>

<template>
  <div class="w-full flex flex-col gap-16 mt-32">
    <section class="flex flex-col w-full text-center gap-3">
      <h1 class="text-6xl font-bold text-white">Jack McCally</h1>
      <h2 class="text-3xl text-gray-300">Computer Engineering Student</h2>
    </section>
    <section class="flex flex-col justify-center items-center w-full">
      <h3 class="text-4xl font-bold text-white">About Me</h3>
      <p class="text-xl text-gray-300 mt-4 max-w-[60rem] text-center">
        I'm a computer engineering student at the University of St. Thomas with a passion for web
        development and software engineering. I enjoy learning new technologies and applying them to
        solve real-world problems.
      </p>
    </section>
    <section class="w-full flex flex-col lg:flex-row gap-16 lg:gap-0">
      <div class="flex-1">
        <h3 class="text-4xl font-bold text-white w-full text-center">Education</h3>
        <ul class="mt-4">
          <li>
            <h5 class="text-lg text-gray-300 font-medium">2023 - PRESENT</h5>
            <h4 class="text-2xl text-white font-bold">
              University of St. Thomas, <span>St. Paul, MN</span>
            </h4>
            <p class="text-lg text-gray-300">B.S. in Computer Engineering, expected May 2027</p>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <h1 class="text-4xl font-bold text-white w-full text-center">Work</h1>
        <ul class="mt-4">
          <li>
            <h5 class="text-lg text-gray-300 font-medium">2021 - PRESENT</h5>
            <h4 class="text-2xl text-white font-bold">Culvers, <span>Minnetonka, MN</span></h4>
            <p class="text-xl text-blue-200">Team Member</p>
            <p class="text-lg text-gray-300">
              Cross-trained in every non-manager store position. Worked as expo in both front of
              house and kitchen. Assisted in onboarding through training new employees. Skilled in
              mainting a calm environment during high-stress situations through years of customer
              service experience.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="w-full">
      <h1 class="text-4xl font-bold text-white w-full text-center">Skills</h1>
      <div class="flex flex-col items-center gap-8 mt-4">
        <div class="flex-1">
          <ul class="w-full items-center justify-center flex gap-8 flex-wrap">
            <li
              v-for="framework in skills.frameworks"
              :key="framework.name"
              class="flex items-center gap-4"
            >
              <component :is="framework.icon" class="w-16 h-16" />
              <span class="text-xl text-gray-300">{{ framework.name }}</span>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <ul class="w-full items-center justify-center flex gap-8 flex-wrap">
            <li
              v-for="language in skills.languages"
              :key="language.name"
              class="flex items-center gap-4"
            >
              <component :is="language.icon" class="w-16 h-16" />
              <span class="text-xl text-gray-300">{{ language.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
