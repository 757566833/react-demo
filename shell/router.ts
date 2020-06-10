import fs from 'fs';
import path from 'path';
import { readFileList } from "./util";

var filesList: string[] = [];
readFileList('./src/pages', filesList);
console.log(filesList);

let str = `
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
`
for (const [index, iterator] of filesList.entries()) {
    const importPage = iterator.replace('src/', '@/')
    const importPageUrl = importPage.replace('.tsx', '')
    str += `
import Component${index} from "${importPageUrl}";
`
}
str += `
const AppRouter: React.FC = () => {
    return (
        <Layout>
            <Router>
                <Switch>

`
for (const [index, iterator] of filesList.entries()) {
    let importPage = iterator.replace('src/pages/', '/').replace('.tsx', '')
    if (importPage.endsWith('/index')) {
        importPage = importPage.substr(0, importPage.length - 6);
    }
    if (!importPage) {
        importPage = '/'
    }
    str += `
                    <Route path="${importPage}" exact={true} component={Component${index}} />
`
}
str += `
                </Switch>
            </Router>
        </Layout>
    );
}
ReactDOM.render(<AppRouter />, document.getElementById('root'))
`

try {
    fs.mkdirSync(path.join(__dirname, '..', 'src'))
} catch (error) {

}
fs.writeFileSync(path.join(__dirname, '..', 'src', 'app.tsx'), str)