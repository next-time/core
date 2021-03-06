import WelcomeComponent from './components/Welcome'
import AboutComponent from './components/About'
import SampleComponent from './components/Sample'
import WinterComponent from './components/seasons/Winter'
import SpringComponent from './components/seasons/Spring'
import SummerComponent from './components/seasons/Summer'

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
   },
   {
     path: '/season/summer',
     component: SummerComponent,
     meta: {
       title: 'Season - Summer'
     }
   }
]
