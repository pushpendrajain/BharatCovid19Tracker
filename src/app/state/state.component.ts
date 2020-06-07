import { Component, OnInit, Inject } from '@angular/core';
import { State } from '../shared/state';
import { StateService } from '../services/state.service';
import { baseURL } from '../shared/baseurl';
import { flyInOut,expand } from '../animations/app.animation';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class StateComponent implements OnInit {

  stateErrMsg: String;
  states: State[];
  selectedState: State;

  constructor(private stateService: StateService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.stateService.getStates().subscribe((states) => this.states=states,
      errmess => this.stateErrMsg = <any>errmess);
  }

  onSelect(state:State){
    this.selectedState=state;
  }

}
