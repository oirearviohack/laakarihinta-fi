import Main from './components/layouts/main';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Packages from './pages/packages/packages';
import Blog from './pages/blog/blog';
import NotFound from './pages/not-found/not-found';


const routes = [
    {
        component: Main,
        routes: [
            {
                path: '/home',
                exact: true,
                component: Home
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/packages',
                component: Packages
            },
            {
                path: '/blog',
                component: Blog
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];

export default routes;
