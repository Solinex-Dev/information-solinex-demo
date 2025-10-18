// Projects data structure
// Using single, consistent images for each project
const getProjectImage = (category) => {
  const categoryImages = {
    'Fintech': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=320&fit=crop&crop=center',
    'Sports Tech': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=320&fit=crop&crop=center',
    'E-Commerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=320&fit=crop&crop=center',
    'Healthcare': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=320&fit=crop&crop=center'
  }
  
  return categoryImages[category] || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=320&fit=crop&crop=center'
}

export const createProjectsData = (t) => [
  {
    id: 1,
    title: 'Wealth Family',
    description: 'A comprehensive financial management platform designed to help families track their wealth, investments, and financial goals.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
    icon: '💰',
    imageUrl: getProjectImage('Fintech'),
    imageColor: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
    link: 'https://wealthfamily.com',
    client: 'Wealth Management Corp',
    duration: '4 months',
    teamSize: '3 members',
    rating: 5,
    category: 'Fintech',
    featured: true
  },
  {
    id: 2,
    title: 'Race Walk Tournament',
    description: 'An event management system for race walking tournaments featuring participant registration, live timing, and real-time leaderboards.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    icon: '🏃',
    imageUrl: getProjectImage('Sports Tech'),
    imageColor: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
    link: 'https://racewalktournament.com',
    client: 'Athletic Association',
    duration: '3 months',
    teamSize: '4 members',
    rating: 5,
    category: 'Sports Tech',
    featured: true
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    icon: '🛒',
    imageUrl: getProjectImage('E-Commerce'),
    imageColor: 'bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700',
    link: 'https://ecommerce-demo.com',
    client: 'Retail Solutions Inc',
    duration: '6 months',
    teamSize: '5 members',
    rating: 5,
    category: 'E-Commerce',
    featured: false
  },
  {
    id: 4,
    title: 'Healthcare Portal',
    description: 'A patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Docker'],
    icon: '🏥',
    imageUrl: getProjectImage('Healthcare'),
    imageColor: 'bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700',
    link: 'https://healthcare-portal.com',
    client: 'Medical Group',
    duration: '8 months',
    teamSize: '6 members',
    rating: 5,
    category: 'Healthcare',
    featured: true
  }
]
