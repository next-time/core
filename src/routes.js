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
    component: AboutComponent,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/sample',
    component: SampleComponent,
    meta: {
      title: 'Sample'
    }
  }
]
