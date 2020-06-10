
export interface IState {
  menus: any[],
  authorityMap: {[key:string]:boolean}
}
const INITIAL_STATE: IState = {
  "menus": [],
  "authorityMap": {}
};
export default INITIAL_STATE;
