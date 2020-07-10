import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';
import { Portafolio } from '../../../Models/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {

  data: Portafolio[];

  // tslint:disable-next-line: variable-name
  constructor(public _ds: DataServiceService ) {
    _ds.getInfo().subscribe((resp: any) => {
      this.data = resp.portafolio;
    });
  }

  ngOnInit(): void {
  }

}
