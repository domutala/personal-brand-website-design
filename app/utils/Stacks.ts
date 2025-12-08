type Stack = { name: string; icon: string; grade: number; category: string };

export const stacks: { [key: string]: Stack } = {
  // --- Back-end ---
  nuxt: {
    name: "Nuxt",
    icon: "i-simple-icons-nuxt",
    grade: 5,
    category: "backend",
  },
  nestjs: {
    name: "NestJS",
    icon: "i-file-icons-nestjs",
    grade: 4,
    category: "backend",
  },
  nodejs: {
    name: "Node.js",
    icon: "i-ri-nodejs-fill",
    grade: 4,
    category: "backend",
  },
  express: {
    name: "Express",
    icon: "i-simple-icons-express",
    grade: 4,
    category: "backend",
  },
  adonisjs: {
    name: "AdonisJS",
    icon: "i-simple-icons-adonisjs",
    grade: 3,
    category: "backend",
  },
  koa: {
    name: "Koa",
    icon: "i-simple-icons-koa",
    grade: 4,
    category: "backend",
  },

  // --- Front-end ---
  vue: {
    name: "Vue.js",
    icon: "i-akar-icons-vue-fill",
    grade: 5,
    category: "frontend",
  },
  javascript: {
    name: "JavaScript",
    icon: "i-simple-icons-javascript",
    grade: 4,
    category: "frontend",
  },
  typescript: {
    name: "TypeScript",
    icon: "i-simple-icons-typescript",
    grade: 4,
    category: "frontend",
  },
  html5: {
    name: "HTML5",
    icon: "i-simple-icons-html5",
    grade: 4,
    category: "frontend",
  },
  css3: {
    name: "CSS3",
    icon: "i-simple-icons-css",
    grade: 4,
    category: "frontend",
  },
  vuetify: {
    name: "Vuetify",
    icon: "i-simple-icons-vuetify",
    grade: 4,
    category: "frontend",
  },
  tailwindcss: {
    name: "TailwindCSS",
    icon: "i-simple-icons-tailwindcss",
    grade: 4,
    category: "frontend",
  },
  pwa: {
    name: "PWA",
    icon: "i-simple-icons-pwa",
    grade: 3,
    category: "frontend",
  },
  pinia: {
    name: "Pinia",
    icon: "i-simple-icons-pinia",
    grade: 5,
    category: "frontend",
  },

  // --- DevOps / Cloud ---
  netlify: {
    name: "Netlify",
    icon: "i-simple-icons-netlify",
    grade: 4,
    category: "devops",
  },
  cleverCloud: {
    name: "Clever Cloud",
    icon: "i-simple-icons-clevercloud",
    grade: 4,
    category: "devops",
  },
  cloudflare: {
    name: "Cloudflare",
    icon: "i-simple-icons-cloudflare",
    grade: 4,
    category: "devops",
  },
  firebase: {
    name: "Firebase",
    icon: "i-simple-icons-firebase",
    grade: 3,
    category: "devops",
  },
  docker: {
    name: "Docker",
    icon: "i-simple-icons-docker",
    grade: 4,
    category: "devops",
  },
  googleCloud: {
    name: "Google Cloud",
    icon: "i-simple-icons-googlecloud",
    grade: 3,
    category: "devops",
  },
  ovh: {
    name: "OVH",
    icon: "i-simple-icons-ovh",
    grade: 4,
    category: "devops",
  },
  linux: {
    name: "Linux",
    icon: "i-simple-icons-linux",
    grade: 4,
    category: "devops",
  },
  jenkins: {
    name: "Jenkins",
    icon: "i-simple-icons-jenkins",
    grade: 3,
    category: "devops",
  },

  // --- Database ---
  postgresql: {
    name: "PostgreSQL",
    icon: "i-simple-icons-postgresql",
    grade: 4,
    category: "database",
  },
  mongodb: {
    name: "MongoDB",
    icon: "i-simple-icons-mongodb",
    grade: 4,
    category: "database",
  },
  mysql: {
    name: "MySQL",
    icon: "i-simple-icons-mysql",
    grade: 3,
    category: "database",
  },
  typeorm: {
    name: "TypeORM",
    icon: "i-simple-icons-typeorm",
    grade: 5,
    category: "database",
  },
  drizzle: {
    name: "Drizzle",
    icon: "i-simple-icons-drizzle",
    grade: 4,
    category: "database",
  },

  // --- Langages ---
  python: {
    name: "Python",
    icon: "i-simple-icons-python",
    grade: 2,
    category: "language",
  },
  flask: {
    name: "Flask",
    icon: "i-simple-icons-flask",
    grade: 2,
    category: "backend",
  },
  pug: {
    name: "Pug",
    icon: "i-simple-icons-pug",
    grade: 4,
    category: "frontend",
  },
  sass: {
    name: "Sass",
    icon: "i-simple-icons-sass",
    grade: 5,
    category: "frontend",
  },

  // --- Mobile / Desktop ---
  flutter: {
    name: "Flutter",
    icon: "i-simple-icons-flutter",
    grade: 3,
    category: "mobile_desktop",
  },
  ionic: {
    name: "Ionic",
    icon: "i-simple-icons-ionic",
    grade: 3,
    category: "mobile_desktop",
  },
  capacitor: {
    name: "Capacitor",
    icon: "i-simple-icons-capacitor",
    grade: 4,
    category: "mobile_desktop",
  },
  electron: {
    name: "Electron",
    icon: "i-simple-icons-electron",
    grade: 4,
    category: "mobile_desktop",
  },

  // --- Tools ---
  github: {
    name: "GitHub",
    icon: "i-simple-icons-github",
    grade: 4,
    category: "tools",
  },
  gitlab: {
    name: "GitLab",
    icon: "i-simple-icons-gitlab",
    grade: 3,
    category: "tools",
  },
  jira: {
    name: "Jira",
    icon: "i-simple-icons-jira",
    grade: 4,
    category: "tools",
  },
  notion: {
    name: "Notion",
    icon: "i-simple-icons-notion",
    grade: 3,
    category: "tools",
  },

  // --- Build tools ---
  webpack: {
    name: "Webpack",
    icon: "i-simple-icons-webpack",
    grade: 3,
    category: "build",
  },
  vite: {
    name: "Vite",
    icon: "i-simple-icons-vite",
    grade: 3,
    category: "build",
  },
  esbuild: {
    name: "esbuild",
    icon: "i-simple-icons-esbuild",
    grade: 4,
    category: "build",
  },

  // --- CMS ---
  storyblok: {
    name: "Storyblok",
    icon: "i-simple-icons-storyblok",
    grade: 2,
    category: "cms",
  },
  wordpress: {
    name: "WordPress",
    icon: "i-simple-icons-wordpress",
    grade: 3,
    category: "cms",
  },
  strapi: {
    name: "Strapi",
    icon: "i-simple-icons-strapi",
    grade: 5,
    category: "cms",
  },
  directus: {
    name: "Directus",
    icon: "i-simple-icons-directus",
    grade: 2,
    category: "cms",
  },

  // --- Auth ---
  keycloak: {
    name: "Keycloak",
    icon: "i-simple-icons-keycloak",
    grade: 3,
    category: "auth",
  },

  redis: {
    name: "Redis",
    icon: "i-simple-icons-redis",
    grade: 3,
    category: "backend",
  },

  // --- Testing ---
  cypress: {
    name: "Cypress",
    icon: "i-simple-icons-cypress",
    grade: 3,
    category: "testing",
  },
  vitest: {
    name: "Vitest",
    icon: "i-simple-icons-vitest",
    grade: 4,
    category: "testing",
  },
  jest: {
    name: "Jest",
    icon: "i-simple-icons-jest",
    grade: 4,
    category: "testing",
  },

  // --- Validation ---
  zod: {
    name: "Zod",
    icon: "i-simple-icons-zod",
    grade: 5,
    category: "validation",
  },
};

export default stacks;
