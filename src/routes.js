import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'src/components/app.jsx';
import ListPage from 'src/components/list.jsx';
import DetailPage from 'src/components/detail.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListPage} />
    <Route path=":id" component={DetailPage} />
  </Route>
);

