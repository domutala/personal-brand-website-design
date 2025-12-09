<script lang="ts" setup>
const subjects = [
  {
    title: "Ton code du lundi mérite-t-il vraiment d’être relu le mardi ? 😅👀",
    hashtags: ["CodeReview", "DevLife", "SoftwareEngineering", "HumourTech"],
    img: "/images/vice-versa.png",
    text: false,
  },

  {
    title: "On bannit enfin le “ça dépend”… ou ça dépend ? 😭🤷🏾‍♂️",
    hashtags: ["debate", "humour", "questionDuJour", "relaxtalk"],
  },

  {
    title:
      "Sheldon & Amy méritent-ils vraiment le Nobel… ou Leonard mérite juste un Nobel de survie ? 😂",
    hashtags: ["BigBangTheory", "teamLeo", "SeriesTalk", "GeekLife"],
    img: "/images/big-bang-theory.png",
  },

  {
    title:
      "Pourquoi les product managers disent toujours “c’est juste un petit changement” ? 😭🔥",
    hashtags: ["ProductLife", "DevVsPM", "TechHumour", "TeamWork"],
  },

  {
    title:
      "Quel pays va devenir la Silicon Valley africaine… et pourquoi c’est pas le tien ? 😅🔥",
    hashtags: ["TechAfrique", "Innovation", "TechTalk", "AfricaRising"],
  },

  {
    title:
      "Le bug le plus bête que t’as résolu en 4h… pour découvrir que c’était une virgule ? 😭💀",
    hashtags: ["BugLife", "DeveloperProblems", "HumourDev", "CodePain"],
    icon: "i-mdi-comma-box",
    img: "/images/debug.png",
  },

  {
    title:
      "Si tu pouvais télécharger une compétence comme dans Matrix, tu prends quoi en premier ? ⚡",
    hashtags: ["MatrixVibes", "SuperPouvoirs", "QuestionFun", "WhatIf"],
  },

  {
    title:
      "Jeux vidéo vs Mozart : qui te donne vraiment +10 d’intelligence ? 🎮🎼",
    hashtags: [
      "GamingLife",
      "ClassiqueVsModerne",
      "SmartDebate",
      "FunQuestion",
    ],
    img: "/images/mozart.png",
  },
  {
    title:
      "Défi : écris une phrase sans le ‘U’… si ton cerveau ne crash pas avant 😭🔥",
    hashtags: ["DefiDuJour", "BrainChallenge", "FunPost", "JeuDeMots"],
  },
  {
    title:
      "L’IA va-t-elle prendre nos jobs… ou juste nous voler nos pauses café ? 🤖☕",
    hashtags: ["AI", "TechHumour", "FutureOfWork", "GeekTalk"],
    img: "/images/cup-coffee.png",
  },
  {
    title:
      "Frontend vs Backend : qui souffre le plus… et pourquoi c’est tout le monde ? 😭🔥",
    hashtags: ["DevLife", "Frontend", "Backend", "CodeWar"],
    img: "/images/header.png",
  },

  {
    title:
      "Si JavaScript était une personne, tu sortirais avec ou tu ghost direct ? 😂",
    hashtags: ["JavaScript", "WebDev", "HumourDev", "TechFun"],
    img: "/images/ghost.png",
    icon: "i-simple-icons-javascript",
  },
];
</script>

<template>
  <u-container class="max-w-[1900px]! py-16">
    <u-page-grid
      class="mx-auto gap-4 lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3"
    >
      <div
        v-for="(subject, s) in subjects"
        :key="s"
        :ui="{ container: 'p-0! min-h-[420px] rounded-0!' }"
        orientation="vertical"
        variant="subtle"
        class="overflow-hidden min-h-[420px] light:bg-black/5 dark:bg-white/5 relative rounded-[inherit] w-full h-full flex flex-col group"
      >
        <img
          v-if="subject.img"
          :src="subject.img"
          alt="Tailwind CSS"
          class="h-full w-full object-top object-cover grayscale inset-0 absolute transition-all group-hover:scale-[1.5]"
        />

        <div class="mb-10 mt-10 flex justify-end px-10">
          <u-icon
            v-if="subject.icon"
            :name="subject.icon"
            :size="subject.img ? 64 : 92"
          />
        </div>

        <div
          class="bg-default/80 absolute inset-0 backdrop-blur-sm hidden group-hover:block"
        ></div>

        <div class="mt-auto absolute bottom-0 w-full p-10">
          <div
            class=""
            :class="{ 'leading-9': subject.img, 'leading-12': !subject.img }"
          >
            <p
              class="bg-black text-white inline font-bold"
              :class="{ 'text-4xl': subject.img, 'text-5xl': !subject.img }"
            >
              {{ $t(`discuss.subjects.${s}.title`) }}
            </p>
          </div>

          <div class="flex items-center gap-2 flex-wrap">
            <span
              v-for="hashtag in subject.hashtags"
              :key="hashtag"
              class="bg-black text-white text-sm"
            >
              #{{ hashtag }}
            </span>
          </div>

          <div
            class="relative mt-5 hidden group-hover:block animate__animated animate__fadeInUp animate__faster"
          >
            <p v-if="subject.text" class="hidden group-hover:block mb-5">
              {{ $t(`discuss.subjects.${s}.text`) }}
            </p>

            <u-button
              icon="i-simple-icons-whatsapp"
              :to="`https://wa.me/+221764037313?text=${subject.title}`"
              target="_blank"
              size="xl"
              color="success"
            >
              {{ $t(`discuss.cta`) }}
            </u-button>
          </div>
        </div>
      </div>
    </u-page-grid>
  </u-container>
</template>
