import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { District } from '../shared/district';
import { StateService } from '../services/state.service';
import { switchMap } from 'rxjs/operators';
import { visibility } from '../animations/app.animation';
import { State } from '../shared/state';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    expand(),
    flyInOut()
  ]
})
export class DistrictComponent implements OnInit {

  distErrMsg: String;
  state: State;
  district: District;
  stateIds: String[];
  visibility = 'shown';

  constructor(private stateService:StateService,
    private route:ActivatedRoute,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.stateService.getStateIds()
      .subscribe(stateIds => this.stateIds = stateIds);
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.stateService.getState(params['id']); }))
      .subscribe(state => { this.state = state; this.visibility = 'shown'; },
        errmess => this.distErrMsg = <any>errmess);
  }

}


