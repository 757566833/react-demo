
import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Layout from "@/layouts";
import '@/global'
import '@/global.less'

import Component0 from "@/pages/index";

import Component1 from "@/pages/page1";

import Component2 from "@/pages/page2/index";

import Component3 from "@/pages/page3/page31/index";

const AppRouter: React.FC = () => {
    return (
        <Layout>
            <Router>
                <Switch>


                    <Route path="/" exact={true} component={Component0} />

                    <Route path="/page1" exact={true} component={Component1} />

                    <Route path="/page2" exact={true} component={Component2} />

                    <Route path="/page3/page31" exact={true} component={Component3} />

                </Switch>
            </Router>
        </Layout>
    );
}
ReactDOM.render(<AppRouter />, document.getElementById('root'))
