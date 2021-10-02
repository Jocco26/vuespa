import Home from './components/Home';
import About from './components/About';
import Notfound from './components/Notfound';

export default{
    mode: 'history',
    linkActiveClass:'font-semibold',

    routes:[
        {
            path: '*',
            component: Notfound
        },
        {
            path:'/',
            component: Home
        },
        {
            path:'/about',
            component: About
        }
    ]
}