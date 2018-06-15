import React, { Component } from 'react';
import inverterData from './../data/inverters';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inverters: inverterData,
      amps: '',
      volts: '',
      item: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("submit!");
    event.preventDefault();
  }

  render() {
    return(
      <section className="calculator">
        <h1>Which Inverter Do I Need?</h1>
        <p>Please add the following information about the items you need to power:</p>
        <div className="input-inverter-info">
          <form onSubmit={this.handleSubmit}>
            Item:<input type="text" id="item" value={this.state.item} onChange={this.handleInputChange} className="inputs"/>
            Amps:<input type="text" id="amps" value={this.state.amps} onChange={this.handleInputChange} className="inputs"/>
            Volts:<input type="text" id="volts" value={this.state.volts} onChange={this.handleInputChange} className="inputs"/>
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
              <tr>
                <td>{this.state.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Calculator;
