import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resdata } from '../interfaces/resdata.model';
import { ResdataService } from '../services/resdata.service';

@Component({
  selector: 'app-card-ics',
  templateUrl: './card-ics.component.html',
  styleUrls: ['./card-ics.component.css']
})
export class CardIcsComponent implements OnInit {

  formData: Resdata | undefined

  constructor(private service: ResdataService) { 
    this.formData = this.service.formData;
  }

  ngOnInit(): void {
    console.log()
  }

}
