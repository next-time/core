import WelcomeComponent from 'components/Welcome'
import HelloComponent from 'components/Hello'
import SampleComponent from 'components/Sample'

export default [
  {
    path: '/',
    component: WelcomeComponent
  },
  {
    path: '/hello/:name',
    component: HelloComponent
  },
  {
    path: '/sample',
    component: SampleComponent
  }
]
