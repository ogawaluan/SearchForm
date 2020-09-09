import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SearchForm from './pages/SearchForm';
import SearchResults from './pages/SearchResults';


function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/form" component={SearchForm} />
            <Route path="/formShow" component={SearchResults} />
        </BrowserRouter>
    )
}

export default Routes;