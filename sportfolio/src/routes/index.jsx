import Demo from "../pages/Demo";
import Index from "../pages/Index";
let routes = [
    {
        path:'/',
        component: Index,
        layout:'main',
    },
    {
        path:'/demo',
        component: Demo,
        layout:'main',
    },
];

export default routes;