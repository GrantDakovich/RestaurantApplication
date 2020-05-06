import React from 'react';  

// props has a buttonObj

class MultiPricePopupButton extends React.Component { 


  	render() {
  		return (
  			<div>
  				<button onClick={() => {this.props.buttonPressed(this.props.buttonObj);}}>
  					Add {this.props.buttonObj.attribute} for <span style={{fontFamily: "arial"}}>$&nbsp;</span> 
  					{this.props.buttonObj.price}
  				</button>
  			</div>
  		);
  	}

}  


export default MultiPricePopupButton;















