import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from '../pages/toolbar/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faPlus} from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        NgbModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        NgbModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        SearchComponent,
        MatCardModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    entryComponents: [
        SearchComponent
    ]
})
export class SharedModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(fas, far, faStar, faPlus);
    }
}
