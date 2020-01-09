import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import Page5 from './views/nav2/Page5.vue'
import echarts from './views/charts/echarts.vue'
import Course from './course/CourseType.vue'
import TenantRegister from './course/TenantRegister'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-loading',
        leaf: true,//只有一个节点
        children: [
            { path: '/main', component: echarts, name: '首页', hidden: true }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '课程管理',
        iconCls: 'el-icon-s-grid',
        children: [
            { path: '/course', component: Course, name: '课程类型' },
            { path: '/page5', component: Page5, name: '课程管理' }
        ]
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '人员配置',
        iconCls: 'el-icon-s-custom',//图标样式class
        children: [
            { path: '/table', component: Table, name: '公司员工' },
            { path: '/tenantRegister', component: TenantRegister, name: '租户管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'el-icon-upload',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;