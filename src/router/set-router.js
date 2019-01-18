import CompanyDetail from '../../src/view/company-describe';
import HomePage from '../../src/view/home-page';
// import ChildComponentTest from '../../src/view/Child';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/company',
        component: CompanyDetail,
        // childRoute:[
        //     {
        //         path:'/company/child',
        //         component:ChildComponentTest,
        //     },
        // ]
    },
]

