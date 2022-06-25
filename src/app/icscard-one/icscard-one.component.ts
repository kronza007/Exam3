import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Resdata } from '../interfaces/resdata.model';
import { Rest } from '../interfaces/rest';
import { ResdataService } from '../services/resdata.service';


@Component({
  selector: 'app-icscard-one',
  templateUrl: './icscard-one.component.html',
  styleUrls: ['./icscard-one.component.css']
})
export class IcscardOneComponent implements OnInit {


  resTs: Resdata[] = [];
  form: Rest | any;

  showCard: boolean = false;

  constructor(private http: HttpClient,
    private service: ResdataService) {

  }

  ngOnInit(): void {
    this.http.get<Resdata[]>('http://localhost:3000/posts')
      .subscribe(response => {
        this.resTs = response;
        // console.log(this.resTs)
      });
  }
  onSubmit() {
    this.form.get('name').markAsTouched();
    this.form.get('profile_image_url').markAsTouched();
    this.form.get('images').markAsTouched();
    this.form.get('rating').markAsTouched();
    this.form.get('address').markAsTouched();
    this.form.get('operation_time').markAsTouched();
    if (this.form.invalid) return;
    // this.service.onSave(this.form.value)
    // if(this.form.invalid) return;
    console.log('service' + this.service)
  }


}

