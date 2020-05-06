import React from 'react';  

// props has a buttonObj

// buttonObj has 

class FreeMustChoicePopupButton extends React.Component { 


  	render() {

      buttonPressed() {

        this.props.buttonPressed(this.props.buttonObj);
      }

  		return (
  			<div>
  				<button onClick={() => buttonPressed() }>
  					Add to Cart for <span style={{fontFamily: "arial"}}>$&nbsp;</span> 
  					{this.props.buttonObj.price}
  				</button>
  			</div>
  		);
  	}

}  


export default FreeMustChoicePopupButton;
