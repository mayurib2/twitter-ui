import React, { PureComponent } from 'react'
import '../assets/heart-check.css';


class CustomLIkeHeart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    onClick = (event) => {
        console.warn('Missing "onClick" property');
      }
    
      render() {
        const { checked, onClick } = this.props;
    
        return (
          <button
            className={ `heart-checkbox ${checked ? 'checked' : ''}` }
            onClick={ (event) => onClick ? onClick(event, this.props) : this.onClick(event) }
            { ...this.props }
          >
          </button>
        );
      }
}

export default CustomLIkeHeart
