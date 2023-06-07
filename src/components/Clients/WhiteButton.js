import React, {Component} from 'react';
import '../../assets/css/Clients/components.css';





export default class WhiteButton extends Component {
  render(){
      return(
        <a href="https://api.whatsapp.com/send?phone=+447498958903&text=Hallo%20Bizz%21%20" target="_blank" rel="noopener noreferrer" className="white-button font-size-18 lato-bold">
            {this.props.buttonText}
        </a>
        )
    }
}