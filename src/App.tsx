import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import { StyledSVGInline, MenuList, TopHeader, TopNavigation } from './style/styled-components/reusable.css';
import Ingredients from './components/Ingredients';
import RandomMeal from './components/RandomMeal';
import NotFound from './components/NotFound';
import Categories from './components/Categories/Categories';
import Tips from './components/Tips';
import Top from './components/Top';
import icons from './style/icons';

const App = () => {
    return (
        <div>
            <Router>
                <TopHeader>
                    <TopNavigation>
                        <StyledSVGInline src={`${icons.chefIcon}`} />
                        <MenuList>
                            <Link to="/random-meal">Home</Link>
                            <Link to="/categories">Categories</Link>
                            <Link to="/ingredients">Filter by ingredients</Link>
                            <Link to="/top">Top 25</Link>
                            <Link to="/tips">Tips + tricks</Link>
                        </MenuList>
                    </TopNavigation>
                </TopHeader>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/random-meal" />
                    </Route>
                    <Route exact path="/random-meal" component={RandomMeal} />
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/ingredients" component={Ingredients} />
                    <Route exact path="/top" component={Top} />
                    <Route exact path="/tips" component={Tips} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
