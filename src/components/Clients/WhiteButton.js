import React, {Component} from 'react';
import '../../assets/css/Clients/components.css';





export default class WhiteButton extends Component {
  render(){
      return(
        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="white-button font-size-18 dosis-semibold">
            {this.props.buttonText}
        </a>
        )
    }
}