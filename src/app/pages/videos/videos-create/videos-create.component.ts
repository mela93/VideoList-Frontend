import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoService } from 'src/app/services/video.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-videos-create',
    templateUrl: './videos-create.component.html',
    styleUrls: ['./videos-create.component.scss']
})
export class VideosCreateComponent implements OnInit {
    public action: any = {};
    public video_data: any = {};
    public id: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private videoService: VideoService
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(
            data => {
                this.initPage(data);
            }
        );
    }

    initPage(v) {
        switch (JSON.parse(v.action)) {
            case 1:
                this.action = 1;
                this.id = v.id;
                this.getVideoDetail(this.id);
                break;
            default:
                this.action = 0;
                this.video_data = {};
                break;
        }
    }

    createVideo() {
        const data = {
            "code": this.video_data.code,
            "title": this.video_data.title,
            "link": this.video_data.link || null,
            "pub_day": this.video_data.pub_day || null,
            "like": this.video_data.like || false,
            "in_library": this.video_data.in_library || false,
        }
        console.log(data);
        this.videoService.createVideo(data).subscribe(
            data => {
                console.log(data);
            },
            err => {

            }
        );
    }

    getVideoDetail(id) {
        this.videoService.getVideoById(id).subscribe(
            data => {
                this.video_data = data;
            },
            err => {

            }
        );
    }

    updateVideo(v) {
        let data = {
            "code": this.video_data.code,
            "title": this.video_data.title
        }
        switch (v) {
            case 0:
                data["link"] = this.video_data.link;
                data["pub_day"] = this.video_data.pub_day;
                data["like"] = this.video_data.like;
                data["in_library"] = this.video_data.in_library;
                break;
            case 1:
                data["deleted"] = this.video_data.deleted;
                break;
            default:
                break;
        }
        console.log(data)
        // this.videoService.updateVideoById(this.id, data).subscribe(
        //     data => {
        //         this.video_data = data;
        //     },
        //     err => {

        //     }
        // );
    }

    cancel() {
        if (this.action === 1) {
            history.go(-1);
        } else {
            this.router.navigate(['view']);
        }
    }
}
