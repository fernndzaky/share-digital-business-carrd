import React, {Component} from 'react';
import '../../assets/css/Clients/components.css';





export default class BlueButton extends Component {
  render(){
      return(
        <a href="https://www.tokopedia.com/smartbizz" rel="noopener noreferrer" className="blue-button font-size-18 lato-bold">
            {this.props.buttonText}
        </a>
        )
    }
}