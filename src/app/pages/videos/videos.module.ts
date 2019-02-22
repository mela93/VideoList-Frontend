import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosViewComponent } from './videos-view/videos-view.component';
import { VideosDetailComponent } from './videos-detail/videos-detail.component';
import { RouterModule } from '@angular/router';
import { VideosRoutes } from "./videos.routes";
import { SharedModule } from "../../shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideosSearchComponent } from './videos-search/videos-search.component';
import { VideosCreateComponent } from './videos-create/videos-create.component';


@NgModule({
    declarations: [
        VideosViewComponent,
        VideosDetailComponent,
        VideosSearchComponent,
        VideosCreateComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(VideosRoutes),
        SharedModule,
        NgbModule
    ]
})
export class VideosModule { }
