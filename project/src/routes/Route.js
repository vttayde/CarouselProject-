import { lazy } from 'react';

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import NoPageFound from '../components/login/NoPageFound';
const Dashboard = lazy(() => import('../components/pages/dashboard/CarouselComp'));
const Login = lazy(() => import('../components/login/Login'));
const PageUnderCon=lazy(() => import('../components/login/PageUnderCon'));

const Route = [
  {
    title: 'Login',
    path: '/',
    showInMenu: false,
    role: 'all',
    icon: <DashboardCustomizeIcon />,
    component: <Login />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    showInMenu: true,
    role: 'all',
    icon: <DashboardCustomizeIcon />,
    component: <Dashboard />,
  },  
  {
    title: 'puc',
    path: '/page-under-constraction',
    showInMenu: false,
    role: 'all',
    icon: <ThumbsUpDownIcon />,
    component: <PageUnderCon />,
  },
  {
        component: <NoPageFound/>,
        title: 'NoPageFound',
        path: '*',
        showInMenu: false,
        role: 'all',
        icon: <DashboardCustomizeIcon />,
    }
];

export default Route;
