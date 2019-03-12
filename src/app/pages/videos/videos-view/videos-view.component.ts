import { Component, OnInit } from "@angular/core";
import { VideoService } from "src/app/services/video.service";

@Component({
    selector: "app-videos-view",
    templateUrl: "./videos-view.component.html",
    styleUrls: ["./videos-view.component.scss"]
})
export class VideosViewComponent implements OnInit {
    public list_data: any;
    constructor(private videoService: VideoService) {}

    ngOnInit() {
        this.getAllVideo();
    }

    getAllVideo() {
        this.videoService.getAllVideos().subscribe(
            data => {
                this.list_data = data.results;
            },
            err => {}
        );
    }
}
