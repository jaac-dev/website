import { promises as fs } from 'fs'

const url = (path) =>
  `https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/${path}.svg`

const ICONS = [
  ['Rust', url('rust/rust-original')],
  ['CPlusPlus', url('cplusplus/cplusplus-plain')],
  ['JavaScript', url('javascript/javascript-plain')],
  ['TypeScript', url('typescript/typescript-plain')],
  ['Java', url('java/java-plain')],

  ['Laravel', url('laravel/laravel-original')],

  ['NodeJS', url('nodejs/nodejs-plain')],
  ['NestJS', url('nestjs/nestjs-original')],
  ['NextJS', url('nextjs/nextjs-plain')],

  ['React', url('react/react-original')],
  ['Vue', url('vuejs/vuejs-plain')],

  ['Arduino', url('arduino/arduino-plain')],

  ['Docker', url('docker/docker-plain')],
  ['Git', url('git/git-plain')],
  ['GitHub', url('github/github-original')],
]

const tasks = ICONS.map(([name, url]) =>
  fetch(url)
    .then((res) => {
      if (res.status !== 200) throw new Error('Not found')
      return res.text()
    })
    .then((svg) => [name, svg])
    .catch(() => [name, null])
    .then(([name, svg]) => {
      if (!svg) return
      return fs.writeFile(
        `src/icons/${name}.vue`,
        `
<script setup lang="ts"></script>  
<template>
  ${svg}
</template>
      `.trim(),
      )
    }),
)

Promise.all(tasks)
