import { createStore, Store } from 'redux';
import reducer, { IAction } from './reducer';
import { IState } from './state';
const global: any = window
let store: Store<IState, IAction>
if(global.store){
  store = global.store;
}else{
  store = createStore(reducer);
  global.store=store;
}
export default store;
