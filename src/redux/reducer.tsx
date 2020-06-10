
import INITIAL_STATE, { IState } from './state';
  export type IAction =
      | {
    type: 'base',
    func: 'setMenus',
    menus: any[]
}| {
    type: 'base',
    func: 'setAuthorityMap',
    authorityMap: {[key:string]:boolean}
}
const reducer = (state: IState = INITIAL_STATE, action:IAction): IState => {
          switch (action.type) {
        case 'base':
          switch (action.func) {
        
          case 'setMenus':
              return {
                  ...state,
                  menus: action.menus
              };
          
          case 'setAuthorityMap':
              return {
                  ...state,
                  authorityMap: action.authorityMap
              };
          
        default:
          return state;
       }
        
        default:
            return state;
    }
}
export default reducer;
