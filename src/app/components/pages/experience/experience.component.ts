import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';
import { Experiencia } from '../../../Models/models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: []
})
export class ExperienceComponent implements OnInit {

  data: Experiencia[];

  // tslint:disable-next-line: variable-name
  constructor(public _ds: DataServiceService ) {
    _ds.getInfo().subscribe((resp: any) => {
      this.data = resp.experiencia;
    });
  }

  ngOnInit(): void {
  }

}
