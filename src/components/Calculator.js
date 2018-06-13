import React, { Component } from 'react';
import inverterData from './../data/inverters';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { inverters: inverterData };
  }

  render() {
    return(
      <section className="calculator">
        <h1>Which Inverter Do I Need?</h1>
        <p>Please add the following information about the items you need to power:</p>
        <div className="input-inverter-info">
          <ul>
            <li>Item:<input type="text" id="item" value="" className="inputs"/></li>
            <li>Amps:<input type="text" id="amps" value="" className="inputs"/></li>
            <li>Volts:<input type="text" id="volts" value="" className="inputs"/></li>
          </ul>
          <button id="add-button" type="button">Add Appliance</button>
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
