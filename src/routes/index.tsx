import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './home';
import { Movie } from './movie'

export const Routes: React.FC = () => {
    return(
        <Router>
            <Route path='/' exact component={Home} />
            <Route path='/movie' exact component={Movie} />
        </Router>
    )
}
