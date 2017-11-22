import WelcomeComponent from 'components/Welcome'
import AboutComponent from 'components/About'
import SampleComponent from 'components/Sample'

export default [
  {
    path: '/',
    component: WelcomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/sample',
    component: SampleComponent
  }
]
