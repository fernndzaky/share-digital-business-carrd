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
import Profile from "./pages/Profile";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile/:id" component={Profile} />

            <IsUserRedirect  exact path="/login" loggedInPath={"/dashboard/profile/"+localStorage.getItem("uid")}>
                <Route path="/login" exact={true} component={SignIn} />
            </IsUserRedirect>


            <ProtectedRoute  exact path="/dashboard/profile/:id">
                <Route exact path="/dashboard/profile/:id" component={Dashboard} />
            </ProtectedRoute>
            <ProtectedRoute  exact path="/dashboard/users">
                <Route exact path="/dashboard/users" component={Users} />
            </ProtectedRoute>


            
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
