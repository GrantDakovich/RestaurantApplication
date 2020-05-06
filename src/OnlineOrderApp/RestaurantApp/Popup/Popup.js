import React from 'react';  

import styles from "./Popup.module.css";

import { connect } from "react-redux";

import GetItem from "./../../../GetItem.js";
import * as info from "./../../../MenuInfo.js";

import SinglePricePopupButton from "./PopupButtons/SinglePricePopupButton.js";
import MultiPricePopupButton from "./PopupButtons/MultiPricePopupButton.js";


import FreeMustChoiceSelector from "./PopupModSelectors/FreeMustChoiceSelector.js";
import PoppupModToggle from "./PopupModToggles/PopupModToggle.js";

// this.props.itemOrderObj

/*

itemOrderObj = {
	type: ,
	buttonInfo: {
		price: 
	},
	modObj: {
		
	}
}

*/

class Popup extends React.Component { 

	

	modificationObj = {
		
	}

	closePopup() {
		this.props.dispatch({type: "CLOSEPOPUP"});
	}

	addToOrder(buttonObj) {
		this.props.dispatch({type: "ADDTOORDER", buttonObj: buttonObj});
	}

	buttonPressed(buttonObj) {
		if (buttonObj.type === "singlePriceButton") {
			this.addToOrder(buttonObj);
		}
		else if (buttonObj.type === "multiPriceButton") {
			this.addToOrder(buttonObj);
		}
	}

	modChanged(str) {
		console.log(str);
	}

	onToggle(onoff, name, price) {
		/*alert(onoff);
		alert(name);
		alert(price);*/
	}

  	render() {

  		const item = GetItem(this.props.selectedItemID, info);

		if (this.props.selectedItemID !== null) {
	  		const item_name = item.name;
	  		//const price = item.price;
	  		const description = item.description;

	  		var priceButtonSet = null;
	  		var modWidgetsSet = null;
	  		if (item.purchaseInfo.type === "singlePrice") {
	  			var buttonObj = {
	  				name: item_name,
	  				type: "singlePriceButton",
	  				price: item.purchaseInfo.priceInfo.price
	  			}

	  			priceButtonSet = (
	  				<SinglePricePopupButton buttonPressed={this.buttonPressed.bind(this)} buttonObj={buttonObj} />
	  			);
	  		}
	  		else if (item.purchaseInfo.type === "multiPrice") {

	  			var priceButtonArray = []
	  			for (let i = 0; i < item.purchaseInfo.priceInfo.prices.length; i++) {
	  				
	  				var buttonObj = {
	  					name: item_name,
	  					type: "multiPriceButton",
	  					price: item.purchaseInfo.priceInfo.prices[i][0],
	  					attribute: item.purchaseInfo.priceInfo.prices[i][1]
	  				}

	  				priceButtonArray.push((
	  					<MultiPricePopupButton buttonPressed={this.buttonPressed.bind(this)} buttonObj={buttonObj} />
	  				));
	  			}
	  			priceButtonSet = priceButtonArray;

	  		}
	  		else if (item.purchaseInfo.type === "singlePriceWithFreeMustChoices") {
	  			const freeMustChoices = item.purchaseInfo.modificationInfo.freeMustChoices;
	  			var buttonObj = {
	  				name: item_name,
	  				type: "singlePriceButton",
	  				price: item.purchaseInfo.priceInfo.price,
	  				choice: null
	  			}

	  			const freeMustChoicesCallback = (choice) => {
	  				console.log(choice);
					buttonObj.choice = choice
	  			}


	  			for (let i = 0; i < freeMustChoices.length; i++) {
	  				const freeMustChoicesObj = freeMustChoices[i];
	  				//this.modificationObj[freeMustChoicesObj.choiceName] = null;
	  				modWidgetsSet = (<FreeMustChoiceSelector freeMustChoicesObj={freeMustChoicesObj} modLink={(choice) => {freeMustChoicesCallback(choice)}} buttonObj={buttonObj} />)
	  			}


	  			const buttonCallback = () => {
	  				if (buttonObj.choice === null) {
	  					alert("Please select a choice");
	  				}
	  				else {
	  					this.buttonPressed(buttonObj);
	  				}
	  			}

	  			priceButtonSet = (
	  				<SinglePricePopupButton buttonPressed={() => {buttonCallback()}} buttonObj={buttonObj}/>
	  			);

	  		}
	  		else if (item.purchaseInfo.type === "singlePriceWithOptionalPaidAddOns") {
	  			const optionalPaidAddons = item.purchaseInfo.modificationInfo.optionalPaidAddons;

	  			var buttonObj = {
	  				name: item_name,
	  				type: "singlePriceButton",
	  				price: item.purchaseInfo.priceInfo.price,
	  				addons: []
	  			}

	  			const paidAddonsToggleCallback = (currentVal, name, price) => {
	  				console.log(currentVal)
	  				buttonObj.addons.push(name);
	  			}

	  			for (let i = 0; i < optionalPaidAddons.length; i++) {
	  				const optionalPaidAddonsObj = optionalPaidAddons[i];

	  				var modWidgetToggles = [];
	  				for (let j = 0; j < optionalPaidAddonsObj.choices.length; j++) {
	  					this.modificationObj[optionalPaidAddonsObj.choices[j]] = "off";
	  					modWidgetToggles.push((<PoppupModToggle name={optionalPaidAddonsObj.choices[j][0]} price={optionalPaidAddonsObj.choices[j][1]} onToggle={ (value, name, price) => {paidAddonsToggleCallback(value, name, price)} } />));
	  				}
	  				modWidgetsSet = modWidgetToggles;

	  			}

	  			priceButtonSet = (
	  				<SinglePricePopupButton buttonPressed={this.buttonPressed.bind(this)} buttonObj={buttonObj} />
	  			);
	  		}


	  		const ret = (
	  			<div>
					<div className={styles.PopupOutter}>
						<div className={styles.PopupInner}>
							<div className={styles.PopupContent}>
								{/* Name Div */}
								<div className={styles.PopupNameDiv}>
									{item_name}
								</div>

								{/* Description Div */}
								<div className={styles.PopupDescriptionDiv}>
									{description}
								</div>
								{modWidgetsSet}
								{priceButtonSet}

								{/* Close Button Div */}
								<div className={styles.PopupCloseButtonDiv}>
									<button onClick={this.closePopup.bind(this)}>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.PopupBg}>
					</div>
				</div>  
	  		);

	  		return ret;
	  	}
		else {
	  		const other = (
	  			<div>

	  			</div>
	  		)
	  		
	  		return other;
	  	}
  		
	}  
}  

const mapStateToProps = state => ({
	selectedItemID: state.selectedItemID
})

export default connect(mapStateToProps)(Popup);















