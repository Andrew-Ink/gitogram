import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'

export default [
  {
    path: '/',
    component: auth,
    name: auth
  },
  {
    path: '/feeds',
    component: feeds,
    name: feeds
  },
  {
    path: '/stories/:id',
    component: stories,
    name: stories
  }
]
