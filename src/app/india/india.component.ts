import { Component, OnInit, Inject } from '@angular/core';
import { India } from '../shared/india';
import { IndiaService } from '../services/india.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class IndiaComponent implements OnInit {
  indiaErrMess: String;
  india: India;
  constructor(private indService: IndiaService,
              @Inject('BaseURL1') public BaseURL1) {

  }

  ngOnInit(): void {
    this.indService.getIndiaData().subscribe((dishes) => this.india=dishes,
    errmess => this.indiaErrMess = <any>errmess);
  }



}
