import Main from './components/layouts/main';
import ImageUpload from './pages/image-upload/image-upload';
import SymptomSelection from './pages/symptom-selection/symptom-selection';
import NotFound from './pages/not-found/not-found';
import ResultPage from './pages/result-page/result-page';


const routes = [
    {
        component: Main,
        routes: [
            {
                path: '/',
                component: SymptomSelection,
                exact: true
            },
            {
                path: '/oirevaihtoehdot',
                component: SymptomSelection
            },
            {
                path: '/kuva-analyysi',
                component: ImageUpload
            },
            {
                path: '/oirearvio',
                component: ResultPage
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];

export default routes;
