import { Routes } from '@angular/router';
import { VideosViewComponent } from './videos-view/videos-view.component';
import { VideosDetailComponent } from './videos-detail/videos-detail.component';
import { VideosSearchComponent } from './videos-search/videos-search.component';
import { VideosCreateComponent } from './videos-create/videos-create.component';

export const VideosRoutes: Routes = [
    {
        path: "",
        redirectTo: 'view',
        pathMatch: 'full'
    },
    {
        path: "view",
        component: VideosViewComponent
    },
    {
        path: "view/:id",
        component: VideosDetailComponent
    },
    {
        path: "search",
        component: VideosSearchComponent
    },
    {
        path: "create",
        component: VideosCreateComponent
    },


];
