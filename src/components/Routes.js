import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";

// components
import Homepage from "./Home";
import Login from "./Login";
import Page404 from "./Error/Error";
import Spinner from "./Spinner";

let Routes = ({ setUser }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const user = localStorage.getItem("user");

    // Load user from API
    useEffect(() => {
        if (user) {
            setUser(user);
            setLoading(false);
            
        } else {
            // Make API call here if user isn't available in localStorage
            setTimeout(()=>{
                setLoading(false);
            },500)
        }
    }, [location]);

    if (loading) return <Spinner />

    return (
        <Switch>
            <Route path="/" exact={true} component={user ? Homepage : Login} />
            {/* <Route path="/auth" exact={true} component={Login} /> */}
            <Route component={Page404} />
        </Switch>
    );
};

const mapDispatchToProps = (dispatch) => ({
    // setUser: (user) => dispatch(setUserData(user)),
    setUser: (user) => console.log(user),
});

export default connect(null, mapDispatchToProps)(Routes);
