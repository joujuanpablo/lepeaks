import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        const { icon } = this.props;

        return (
        <form onSubmit={this.handleSubmit} className="text-input">
          <label>
              <div className="text-input--wrapper">
                <input type="text" className="text-input--field" placeholder="Enter your email address" value={this.state.value} onChange={this.handleChange} />
                <div className="text-input--icon">
                    <FontAwesomeIcon icon={icon} size={'lg'} />
                </div>
              </div>
          </label>
        </form>
      );
    }
  }

export default TextInput;