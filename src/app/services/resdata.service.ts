import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Operationtime, Resdata } from '../interfaces/resdata.model';
import { IResdataService } from './resdata.service.interface';

@Injectable({
    providedIn: 'root'
})
export class ResdataService {
    constructor(private http: HttpClient) { }


    formData: Resdata | any;



    onSave(form: Resdata | any) {
        this.formData.name = form.name;
        this.formData.profile_image_url = form.profile_image_url;
        this.formData.images = form.images;
        this.formData.rating = form.rating;
        this.formData.address = form.address;
        this.formData.operation_time = form.operation_time;
    }
}

