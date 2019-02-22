import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_CONSTANT } from "../constants/url.constants";
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    constructor(
        private apiService: ApiService
    ) { }

    public searchVideo(search) {
        let url = "?search=" + search;
        return this.apiService.get(URL_CONSTANT.BASE_URL + url).pipe(map(
            data => {
                return data;
            })
        );
    }

    public getAllVideos() {
        return this.apiService.get(URL_CONSTANT.BASE_URL).pipe(map(
            data => {
                return data;
            })
        );
    }

    public getVideoById(id) {
        return this.apiService.get(URL_CONSTANT.BASE_URL + id + '/').pipe(map(
            data => {
                return data;
            })
        );
    }

    public updateVideoById(id, data) {
        return this.apiService.put(URL_CONSTANT.BASE_URL + id + '/', data).pipe(map(
            data => {
                return data;
            })
        );
    }

    public createVideo(data) {
        return this.apiService.post(URL_CONSTANT.BASE_URL, data).pipe(map(
            data => {
                return data;
            })
        );
    }



}
