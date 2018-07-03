import React, { Component } from 'react';
import inverterData from './../data/inverters';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inverters: inverterData,
      ampsInput: '',
      voltsInput: '',
      itemInput: '',
      watts: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let item = this.state.itemInput;
    let amps = this.state.ampsInput;
    let volts = this.state.voltsInput;

    this.setState({ watts: amps * volts })
    
  }

  render() {
    return(
      <section className="calculator">
        <h1>Which Inverter Do I Need?</h1>
        <p>Please add the following information about the items you need to power:</p>
        <div className="input-inverter-info">
          <form onSubmit={this.handleSubmit}>
            Item:<input type="text" id="item" name="itemInput" value={this.state.item} onChange={this.handleInputChange} className="inputs"/>
            Amps:<input type="text" id="amps" name="ampsInput" value={this.state.amps} onChange={this.handleInputChange} className="inputs"/>
            Volts:<input type="text" id="volts" name="voltsInput" value={this.state.volts} onChange={this.handleInputChange} className="inputs"/>
            <input type="submit" value="Add Appliance" />
          </form>

          <table id="appliance-table">
            <tbody id="tbody">
              <tr>
                <th>Item</th>
                <th>Amps</th>
                <th>Volts</th>
                <th>Watts</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Calculator;
