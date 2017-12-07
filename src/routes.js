import WelcomeComponent from 'components/Welcome'
import AboutComponent from 'components/About'
import SampleComponent from 'components/Sample'
import WinterComponent from 'components/Winter'
import SpringComponent from 'components/Spring'

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
  },
  {
    path: '/season/winter',
    component: WinterComponent,
    meta: {
      title: 'Season - Winter'
    }
  },
  {
    path: '/season/spring',
    component: SpringComponent,
    meta: {
      title: 'Season - Spring'
    }
  }
]
