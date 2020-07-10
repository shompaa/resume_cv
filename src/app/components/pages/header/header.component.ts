import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../services/data-service.service';
import { Header } from '../../../Models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  data: Header = new Header();

  // tslint:disable-next-line: variable-name
  constructor(public _ds: DataServiceService ) {
    _ds.getInfo().subscribe((resp: any) => {
      this.data.cargo = resp.header.cargo;
      this.data.cv = resp.header.cv;
      this.data.descripcion = resp.header.descripcion;
    });
  }

  ngOnInit(): void {
  }

}
