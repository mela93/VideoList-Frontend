import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: "",
        loadChildren: "./pages/list/list.module#ListModule"
    }
];