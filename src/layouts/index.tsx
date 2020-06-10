import React from 'react'
import store from '@/redux/store';
import { Provider } from 'react-redux';
import Base from './base'
import NotFound from './empty'
const Layout: React.FC = (props) => {
    if (window.location.href.includes('/user/login')) {
        return <NotFound />
    } else if (!localStorage.getItem('token')) {
        window.location.href = '/user/login'
        return <NotFound />
    } else {
        return <Provider store={store}>
            <Base>{props.children}</Base>
        </Provider>
    }
}

export default Layout