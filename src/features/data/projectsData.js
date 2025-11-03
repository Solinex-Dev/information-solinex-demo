// Projects data structure - streamlined to only used fields
const getProjectImage = (category) => {
  const categoryImages = {
    'Fintech': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
    'Sports Tech': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    'E-Commerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    'Healthcare': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center'
  }

  return categoryImages[category] || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center'
}

export const createProjectsData = () => [
  {
    id: 1,
    title: 'Wealth Family',
    category: 'Fintech',
    imageUrl: getProjectImage('Fintech'),
    imageColor: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
    link: 'https://wealthfamily.com'
  },
  {
    id: 2,
    title: 'Race Walk Tournament',
    category: 'Sports Tech',
    imageUrl: getProjectImage('Sports Tech'),
    imageColor: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
    link: 'https://racewalktournament.com'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    imageUrl: getProjectImage('E-Commerce'),
    imageColor: 'bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700',
    link: 'https://ecommerce-demo.com'
  },
  {
    id: 4,
    title: 'Healthcare Portal',
    category: 'Healthcare',
    imageUrl: getProjectImage('Healthcare'),
    imageColor: 'bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700',
    link: 'https://healthcare-portal.com'
  }
]
