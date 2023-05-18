import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";
import Users from "./pages/Users";
import Earnings from "./pages/Earnings";
import Transactions from "./pages/Transactions";
import Advertisements from "./pages/Advertisements";
import HomePage from "./pages/Clients/home";
import IdentityVerification from "./pages/IdentityVerification";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/cards" component={Cards} />
            <Route path="/charts" component={Charts} />
            <Route path="/users" component={Users} />
            <Route path="/earnings" component={Earnings} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/advertisements" component={Advertisements} />
            <Route path="/identity-verification" component={IdentityVerification} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
