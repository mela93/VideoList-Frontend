import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SearchComponent } from "./search/search.component";

@Component({
    selector: "app-toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
    search_open = false;
    search_text: string;
    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openDialog(): void {
        const dialogRef = this.dialog.open(SearchComponent, {
            position: { top: "7%" },
            hasBackdrop: true,
            backdropClass: "backdorp"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("The dialog was closed");
        });
    }
}

export interface DialogPosition {
    top: "top";
}
