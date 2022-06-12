// Layouts
import { HeaderOnly } from '~/components/Layout';

import Search from '~/pages/Search';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// Public Routes
export const publicRoutes = [
  { path: '/', component: Search },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];
export const privatecRoutes = [];
