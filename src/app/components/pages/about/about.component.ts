import { Component, OnInit } from '@angular/core';
import { SobreMi } from '../../../Models/models';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  data: SobreMi = new SobreMi();
  logos = 'logos:';

  // tslint:disable-next-line: variable-name
  constructor(public _ds: DataServiceService ) {
    _ds.getInfo().subscribe((resp: any) => {
      this.data.descripcion = resp.sobremi.descripcion;
      this.data.iconos = resp.sobremi.iconos;
      this.data.imagen = resp.sobremi.imagen;
    });
  }

  ngOnInit(): void {
  }

}
