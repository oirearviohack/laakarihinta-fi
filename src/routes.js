import Main from './components/layouts/main';
import ImageUpload from './pages/image-upload/image-upload';
import SymptomSelection from './pages/symptom-selection/symptom-selection';
import NotFound from './pages/not-found/not-found';


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
                path: '*',
                component: NotFound
            }
        ]
    }
];

export default routes;
