import React, { Component } from 'react';

import styles from "./Confirmation.module.css";

import { connect } from "react-redux";

import Header from "./../RestaurantApp/Header/Header.js";

import OrderInformationBox from "./OrderInformationBox/OrderInformationBox.js";

import axios from "axios";


class Confirmation extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}


	sendOrder() {
		//this.props.orderItemsArray

		axios.post("http://localhost:7000/receive_customer_order", {a: "hello"})
		.then(function (response) {
    		console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
	render() {
		const types = [];
		for (let i = 0; i < this.props.orderItemsArray.length; i++) {
			const keys = Object.keys(this.props.orderItemsArray[i]);
			const values = Object.values(this.props.orderItemsArray[i]);
			types.push((<h3>Order Item Number {i + 1}</h3>));
			for (let j = 0; j < keys.length; j++) {		
				if (Array.isArray(values[j])) {
					for (let k = 0; k < values[j].length; k++) {
						types.push((<div>{values[j][k]}</div>));
					}
					console.log(values[j]);
				}
				else {
					types.push((<div>{keys[j]} : {values[j]}</div>));
				}
			}
			
		}


		return (
			<div>
				<Header/>
				<div className={styles.ConfirmationBody} style={{position:"relative", top: "120px", paddingLeft: "30px"}}>
					<OrderInformationBox />
					{types}
					<div className={styles.buttonWrapper} style={{marginTop: "30px"}}>
						<button className={styles.confirmationButton} onClick={() => { this.sendOrder(); }}>Confirm Your Order</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	orderItemsArray: state.orderItemsArray
})

export default connect(mapStateToProps)(Confirmation);


