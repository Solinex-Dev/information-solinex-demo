// Tech stack data organized by categories
import reactIcon from '../../assets/icons/icon-react.png'
import nodejsIcon from '../../assets/icons/icon-nodejs.png'
import javascriptIcon from '../../assets/icons/icon-javascript.png'
import typescriptIcon from '../../assets/icons/icon-typescript.png'
import mongodbIcon from '../../assets/icons/icon-mongodb.png'
import postgresqlIcon from '../../assets/icons/icon-postgresql.png'
import dockerIcon from '../../assets/icons/icon-docker.png'
import awsIcon from '../../assets/icons/icon-aws.png'
import gitIcon from '../../assets/icons/icon-git.png'
import tailwindIcon from '../../assets/icons/icon-tailwind-css.png'

// Additional framework icons
import vueIcon from '../../assets/icons/icon-vue.png'
import nextjsIcon from '../../assets/icons/icon-nextjs.png'
import expressIcon from '../../assets/icons/icon-express.png'
import nestjsIcon from '../../assets/icons/icon-nestjs.png'
import redisIcon from '../../assets/icons/icon-redis.png'
import mysqlIcon from '../../assets/icons/icon-mysql.png'
import kubernetesIcon from '../../assets/icons/icon-kubernetes.png'
import gcpIcon from '../../assets/icons/icon-google-cloud.png'
import cloudflareIcon from '../../assets/icons/icon-cloudflare.png'
import githubIcon from '../../assets/icons/icon-github.png'
import figmaIcon from '../../assets/icons/icon-figma.png'

export const techGroups = [
  {
    title: 'Frontend',
    titleKey: 'techStack.groups.frontend',
    items: [
      { name: 'React', icon: reactIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'TailwindCSS', icon: tailwindIcon }
    ]
  },
  {
    title: 'Backend',
    titleKey: 'techStack.groups.backend',
    items: [
      { name: 'Node.js', icon: nodejsIcon },
      { name: 'Express.js', icon: expressIcon },
      { name: 'NestJS', icon: nestjsIcon },
      { name: 'JavaScript', icon: javascriptIcon }
    ]
  },
  {
    title: 'Database',
    titleKey: 'techStack.groups.database',
    items: [
      { name: 'MongoDB', icon: mongodbIcon },
      { name: 'PostgreSQL', icon: postgresqlIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'Redis', icon: redisIcon }
    ]
  },
  {
    title: 'DevOps & Cloud',
    titleKey: 'techStack.groups.devops',
    items: [
      { name: 'Docker', icon: dockerIcon },
      { name: 'Kubernetes', icon: kubernetesIcon },
      { name: 'AWS', icon: awsIcon },
      { name: 'Google Cloud', icon: gcpIcon },
      { name: 'Cloudflare', icon: cloudflareIcon }
    ]
  },
  {
    title: 'Tools',
    titleKey: 'techStack.groups.tools',
    items: [
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'Figma', icon: figmaIcon }
    ]
  }
]

// Keep backward compatibility
export const techItems = techGroups.flatMap(group => group.items)
