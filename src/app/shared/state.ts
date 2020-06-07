import { District } from './district';
export class State{
  id:String;
  state: String;
  active: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  aChanges: number;
  cchanges: number;
  rchanges: number;
  dchanges: number;
  districtData: District[]
}
