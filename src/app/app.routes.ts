import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home-module/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'list',
        loadChildren: () => import('./list-module/list.module').then((m) => m.ListModule),
    },
    {
        path: 'statistics',
        loadChildren: () => import('./statistics-module/statistics.module').then((m) => m.StatisticsModule),
    }
];
