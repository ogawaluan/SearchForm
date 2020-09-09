import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SearchForm from './pages/SearchForm';


function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/form" component={SearchForm} />
        </BrowserRouter>
    )
}

export default Routes;