import { Code, TrendingUp, Zap } from 'lucide-react'

// Solutions data structure
export const createSolutionsData = (t) => [
  {
    title: t('solutions.items.development.title'),
    description: t('solutions.items.development.description'),
    icon: Code,
    features: t('solutions.items.development.features', [])
  },
  {
    title: t('solutions.items.business.title'),
    description: t('solutions.items.business.description'),
    icon: TrendingUp,
    features: t('solutions.items.business.features', [])
  },
  {
    title: t('solutions.items.approach.title'),
    description: t('solutions.items.approach.description'),
    icon: Zap,
    features: t('solutions.items.approach.features', [])
  }
]
