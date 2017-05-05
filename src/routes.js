import Main from './components/layouts/main';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';


const routes = [
    {
        component: Main,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];

export default routes;
