// Tech stack data organized by categories
import reactIcon from '../../assets/icons/icon-react.png'
import nodejsIcon from '../../assets/icons/icon-nodejs.png'
import typescriptIcon from '../../assets/icons/icon-typescript.png'
import javascriptIcon from '../../assets/icons/icon-javascript.png'
import mongodbIcon from '../../assets/icons/icon-mongodb.png'
import postgresqlIcon from '../../assets/icons/icon-postgresql.png'
import dockerIcon from '../../assets/icons/icon-docker.png'
import awsIcon from '../../assets/icons/icon-aws.png'
import gitIcon from '../../assets/icons/icon-git.png'
import tailwindIcon from '../../assets/icons/icon-tailwind-css.png'

// Newly added platform/service icons
import cloudflareIcon from '../../assets/icons/icon-cloudflare.png'
import githubIcon from '../../assets/icons/icon-github.png'
import digitaloceanIcon from '../../assets/icons/icon-digitalocean.png'
import supabaseIcon from '../../assets/icons/icon-supabase.png'
import renderIcon from '../../assets/icons/icon-render.jpg'
import vercelIcon from '../../assets/icons/icon-vercel.png'

export const techGroups = [
  {
    title: 'Technology',
    titleKey: 'techStack.groups.technology',
    items: [
      { name: 'React', icon: reactIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'Node.js', icon: nodejsIcon },
      { name: 'TailwindCSS', icon: tailwindIcon },
      { name: 'PostgreSQL', icon: postgresqlIcon },
      { name: 'Docker', icon: dockerIcon }
    ]
  },
  {
    title: 'Platform & Service',
    titleKey: 'techStack.groups.platformService',
    items: [
      { name: 'AWS', icon: awsIcon },
      { name: 'DigitalOcean', icon: digitaloceanIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'Render', icon: renderIcon },
      { name: 'Vercel', icon: vercelIcon },
      { name: 'Cloudflare', icon: cloudflareIcon },
      { name: 'GitHub', icon: githubIcon }
    ]
  }
]

// Keep backward compatibility
export const techItems = techGroups.flatMap(group => group.items)
