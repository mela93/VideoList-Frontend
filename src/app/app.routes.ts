import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: "",
        loadChildren: "./pages/videos/videos.module#VideosModule"
    }
];
