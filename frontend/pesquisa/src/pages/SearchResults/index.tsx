import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

function SearchResults () {

    const [results, setResults] = useState([]);

    useEffect(() => {

        api.get('/formShow').then((response) => {
          
          setResults(response.data)
        })
      }, [])
    
    return (
        <div>
            <PageHeader />
            { console.log(results) }
        </div>
    )
}

export default SearchResults;