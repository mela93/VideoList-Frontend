import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: "",
        loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosModule)
    }
];
