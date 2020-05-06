import React, { Component } from 'react';



import { connect } from "react-redux";

import RestaurantApp from "./RestaurantApp/RestaurantApp.js";
import Checkout from "./Checkout/Checkout.js";
import Confirmation from "./Checkout/Confirmation.js";

import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";



import {isBrowser, isMobile} from "react-device-detect";

class OnlineOrderApp extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	
	render() {


		if (isMobile) {
		  	//alert("it's mobile");
		}
		else if (isBrowser) {
		    //alert("it's browser");
		}

		return (
			<BrowserRouter>
		        <Route path="/" exact render={() => (<RestaurantApp />)} />
		        <Route path="/confirmation" exact render={() => (<Confirmation />)} />  	 
		    </BrowserRouter>
		);
	}
}

const mapStateToProps = state => ({
	selectedItemID: state.selectedItemID
})

export default connect(mapStateToProps)(OnlineOrderApp);


