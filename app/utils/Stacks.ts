type Stack = {
  code: string;
  name: string;
  icon: string;
  grade: number;
  category: string;
};

export const stacks: { [key: string]: Stack } = {
  // --- Back-end ---
  nuxt: {
    code: "nuxt",
    name: "Nuxt",
    icon: "i-simple-icons-nuxt",
    grade: 5,
    category: "backend",
  },
  nestjs: {
    code: "nestjs",
    name: "NestJS",
    icon: "i-file-icons-nestjs",
    grade: 4,
    category: "backend",
  },
  nodejs: {
    code: "nodejs",
    name: "Node.js",
    icon: "i-ri-nodejs-fill",
    grade: 4,
    category: "backend",
  },
  express: {
    code: "express",
    name: "Express",
    icon: "i-simple-icons-express",
    grade: 4,
    category: "backend",
  },
  adonisjs: {
    code: "adonisjs",
    name: "AdonisJS",
    icon: "i-simple-icons-adonisjs",
    grade: 3,
    category: "backend",
  },
  koa: {
    code: "koa",
    name: "Koa",
    icon: "i-simple-icons-koa",
    grade: 4,
    category: "backend",
  },

  // --- Front-end ---
  vue: {
    code: "vue",
    name: "Vue.js",
    icon: "i-akar-icons-vue-fill",
    grade: 5,
    category: "frontend",
  },
  javascript: {
    code: "javascript",
    name: "JavaScript",
    icon: "i-simple-icons-javascript",
    grade: 4,
    category: "frontend",
  },
  typescript: {
    code: "typescript",
    name: "TypeScript",
    icon: "i-simple-icons-typescript",
    grade: 4,
    category: "frontend",
  },
  html5: {
    code: "html5",
    name: "HTML5",
    icon: "i-simple-icons-html5",
    grade: 4,
    category: "frontend",
  },
  css3: {
    code: "css3",
    name: "CSS3",
    icon: "i-simple-icons-css",
    grade: 4,
    category: "frontend",
  },
  vuetify: {
    code: "vuetify",
    name: "Vuetify",
    icon: "i-simple-icons-vuetify",
    grade: 4,
    category: "frontend",
  },
  tailwindcss: {
    code: "tailwindcss",
    name: "TailwindCSS",
    icon: "i-simple-icons-tailwindcss",
    grade: 4,
    category: "frontend",
  },
  pwa: {
    code: "pwa",
    name: "PWA",
    icon: "i-simple-icons-pwa",
    grade: 3,
    category: "frontend",
  },
  pinia: {
    code: "pinia",
    name: "Pinia",
    icon: "i-simple-icons-pinia",
    grade: 5,
    category: "frontend",
  },

  // --- DevOps / Cloud ---
  netlify: {
    code: "netlify",
    name: "Netlify",
    icon: "i-simple-icons-netlify",
    grade: 4,
    category: "devops",
  },
  cleverCloud: {
    code: "cleverCloud",
    name: "Clever Cloud",
    icon: "i-simple-icons-clevercloud",
    grade: 4,
    category: "devops",
  },
  cloudflare: {
    code: "cloudflare",
    name: "Cloudflare",
    icon: "i-simple-icons-cloudflare",
    grade: 4,
    category: "devops",
  },
  firebase: {
    code: "firebase",
    name: "Firebase",
    icon: "i-simple-icons-firebase",
    grade: 3,
    category: "devops",
  },
  docker: {
    code: "docker",
    name: "Docker",
    icon: "i-simple-icons-docker",
    grade: 4,
    category: "devops",
  },
  googleCloud: {
    code: "googleCloud",
    name: "Google Cloud",
    icon: "i-simple-icons-googlecloud",
    grade: 3,
    category: "devops",
  },
  ovh: {
    code: "ovh",
    name: "OVH",
    icon: "i-simple-icons-ovh",
    grade: 4,
    category: "devops",
  },
  linux: {
    code: "linux",
    name: "Linux",
    icon: "i-simple-icons-linux",
    grade: 4,
    category: "devops",
  },
  jenkins: {
    code: "jenkins",
    name: "Jenkins",
    icon: "i-simple-icons-jenkins",
    grade: 3,
    category: "devops",
  },

  // --- Database ---
  postgresql: {
    code: "postgresql",
    name: "PostgreSQL",
    icon: "i-simple-icons-postgresql",
    grade: 4,
    category: "database",
  },
  mongodb: {
    code: "mongodb",
    name: "MongoDB",
    icon: "i-simple-icons-mongodb",
    grade: 4,
    category: "database",
  },
  mysql: {
    code: "mysql",
    name: "MySQL",
    icon: "i-simple-icons-mysql",
    grade: 3,
    category: "database",
  },
  typeorm: {
    code: "typeorm",
    name: "TypeORM",
    icon: "i-simple-icons-typeorm",
    grade: 5,
    category: "database",
  },
  drizzle: {
    code: "drizzle",
    name: "Drizzle",
    icon: "i-simple-icons-drizzle",
    grade: 4,
    category: "database",
  },

  // --- Langages ---
  python: {
    code: "python",
    name: "Python",
    icon: "i-simple-icons-python",
    grade: 2,
    category: "language",
  },
  flask: {
    code: "flask",
    name: "Flask",
    icon: "i-simple-icons-flask",
    grade: 2,
    category: "backend",
  },
  pug: {
    code: "pug",
    name: "Pug",
    icon: "i-simple-icons-pug",
    grade: 4,
    category: "frontend",
  },
  sass: {
    code: "sass",
    name: "Sass",
    icon: "i-simple-icons-sass",
    grade: 5,
    category: "frontend",
  },

  // --- Mobile / Desktop ---
  flutter: {
    code: "flutter",
    name: "Flutter",
    icon: "i-simple-icons-flutter",
    grade: 3,
    category: "mobile_desktop",
  },
  ionic: {
    code: "ionic",
    name: "Ionic",
    icon: "i-simple-icons-ionic",
    grade: 3,
    category: "mobile_desktop",
  },
  capacitor: {
    code: "capacitor",
    name: "Capacitor",
    icon: "i-simple-icons-capacitor",
    grade: 4,
    category: "mobile_desktop",
  },
  electron: {
    code: "electron",
    name: "Electron",
    icon: "i-simple-icons-electron",
    grade: 4,
    category: "mobile_desktop",
  },

  // --- Tools ---
  github: {
    code: "github",
    name: "GitHub",
    icon: "i-simple-icons-github",
    grade: 4,
    category: "tools",
  },
  gitlab: {
    code: "gitlab",
    name: "GitLab",
    icon: "i-simple-icons-gitlab",
    grade: 3,
    category: "tools",
  },
  jira: {
    code: "jira",
    name: "Jira",
    icon: "i-simple-icons-jira",
    grade: 4,
    category: "tools",
  },
  notion: {
    code: "notion",
    name: "Notion",
    icon: "i-simple-icons-notion",
    grade: 3,
    category: "tools",
  },

  // --- Build tools ---
  webpack: {
    code: "webpack",
    name: "Webpack",
    icon: "i-simple-icons-webpack",
    grade: 3,
    category: "build",
  },
  vite: {
    code: "vite",
    name: "Vite",
    icon: "i-simple-icons-vite",
    grade: 3,
    category: "build",
  },
  esbuild: {
    code: "esbuild",
    name: "esbuild",
    icon: "i-simple-icons-esbuild",
    grade: 4,
    category: "build",
  },

  // --- CMS ---
  storyblok: {
    code: "storyblok",
    name: "Storyblok",
    icon: "i-simple-icons-storyblok",
    grade: 2,
    category: "cms",
  },
  wordpress: {
    code: "wordpress",
    name: "WordPress",
    icon: "i-simple-icons-wordpress",
    grade: 3,
    category: "cms",
  },
  strapi: {
    code: "strapi",
    name: "Strapi",
    icon: "i-simple-icons-strapi",
    grade: 5,
    category: "cms",
  },
  directus: {
    code: "directus",
    name: "Directus",
    icon: "i-simple-icons-directus",
    grade: 2,
    category: "cms",
  },

  // --- Auth ---
  keycloak: {
    code: "keycloak",
    name: "Keycloak",
    icon: "i-simple-icons-keycloak",
    grade: 3,
    category: "auth",
  },

  redis: {
    code: "redis",
    name: "Redis",
    icon: "i-simple-icons-redis",
    grade: 3,
    category: "backend",
  },

  // --- Testing ---
  cypress: {
    code: "cypress",
    name: "Cypress",
    icon: "i-simple-icons-cypress",
    grade: 3,
    category: "testing",
  },
  vitest: {
    code: "vitest",
    name: "Vitest",
    icon: "i-simple-icons-vitest",
    grade: 4,
    category: "testing",
  },
  jest: {
    code: "jest",
    name: "Jest",
    icon: "i-simple-icons-jest",
    grade: 4,
    category: "testing",
  },

  // --- Validation ---
  zod: {
    code: "zod",
    name: "Zod",
    icon: "i-simple-icons-zod",
    grade: 5,
    category: "validation",
  },
};

export default stacks;
