import React, { Component } from 'react';

import styles from "./Checkout.module.css";

import { Route, Link } from "react-router-dom";



class Checkout extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	
	render() {

		return (
			<div className={styles.CheckoutBody}>
				<div className={styles.Header}>
					<form className={styles.creditCard}>
				    	<div className={styles.formHeader}>
				      		<h4 className={styles.title}>Credit card detail</h4>
				    	</div>

				    	<div className={styles.formBody}>
				      		{/* Card Number */}
				      		<input type="text" className={styles.cardNumber} placeholder="Card Number"/>

				      		{/* Date Field */}
				      		<div className={styles.dateField}>
				        		<div className={styles.month}>
				          			<select name="Month">
				            			<option value="january">January</option>
				            			<option value="february">February</option>
				            			<option value="march">March</option>
				            			<option value="april">April</option>
				            			<option value="may">May</option>
				            			<option value="june">June</option>
				            			<option value="july">July</option>
				            			<option value="august">August</option>
				            			<option value="september">September</option>
				            			<option value="october">October</option>
				            			<option value="november">November</option>
				            			<option value="december">December</option>
				          			</select>
				        		</div>
				        		<div className={styles.year}>
				          			<select className={styles.Year}>
				            			<option value="2016">2016</option>
				            			<option value="2017">2017</option>
				            			<option value="2018">2018</option>
				            			<option value="2019">2019</option>
				            			<option value="2020">2020</option>
				            			<option value="2021">2021</option>
				            			<option value="2022">2022</option>
				            			<option value="2023">2023</option>
				            			<option value="2024">2024</option>
				          			</select>
				       			</div>
				      		</div>

				      		{/* Card Verification Field */}
				      		<div className={styles.cardVerification}>
				        		<div className={styles.cvvInput}>
				          			<input type="text" placeholder="CVV"/>
				        		</div>
				        		<div className={styles.cvvDetails}>
				          			<p>3 or 4 digits usually found <br /> on the signature strip</p>
				        		</div>
				      		</div>

				      		{/* Buttons */}
				      		<button type="submit" className={styles.proceedBtn}><a href="#">Order</a></button>
				    	</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Checkout;


