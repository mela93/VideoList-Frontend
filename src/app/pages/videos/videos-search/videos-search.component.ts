import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
    selector: 'app-videos-search',
    templateUrl: './videos-search.component.html',
    styleUrls: ['./videos-search.component.scss']
})
export class VideosSearchComponent implements OnInit {
    public search_text: string;
    public video_data: any;

    constructor(
        public videoService: VideoService
    ) { }

    ngOnInit() {
    }

    search() {
        this.videoService.searchVideo(this.search_text).subscribe(
            data => {
                this.video_data = data.results;
            },
            err => {

            }
        );
    }

}
