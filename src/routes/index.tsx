import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from 'components/Header';

export default function Routes() {
    return(
        <Router>
            <Route path='/' exact component={Header} />
        </Router>
    )
}
