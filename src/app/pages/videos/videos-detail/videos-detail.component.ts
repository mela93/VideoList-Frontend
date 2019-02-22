import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
    selector: 'app-videos-detail',
    templateUrl: './videos-detail.component.html',
    styleUrls: ['./videos-detail.component.scss']
})
export class VideosDetailComponent implements OnInit {
    public id: any;
    public video_detail: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private videoService: VideoService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getVideoDetail(this.id);
    }

    getVideoDetail(id) {
        this.videoService.getVideoById(id).subscribe(
            data => {
                this.video_detail = data;
            },
            err => {

            }
        );
    }

    updateVideo(v) {
        let data = {
            "code": this.video_detail.code,
            "title": this.video_detail.title
        }
        switch (v) {
            case 0:
                data["like"] = !(this.video_detail['like'] || false);
                this.video_detail['like'] = !(this.video_detail['like'] || false);
                break;
            case 1:
                data["in_library"] = !(this.video_detail['in_library'] || false);
                break;
            default:
                break;
        }
        this.videoService.updateVideoById(this.id, data).subscribe(
            data => {
                this.video_detail = data;
            },
            err => {

            }
        );
    }

}
