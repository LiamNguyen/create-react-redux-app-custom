import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _pick from 'lodash/pick';
import _isEmpty from 'lodash/isEmpty';

import './style.css';
import ExchangeRateActions from '../../../actions/ExchangeRateActions';

class SampleScreen extends Component {
  
  componentDidMount() {
    this.props.getExchangeRate();
  }
  
  render() {
    const { ExchangeRate: { exchangeRate: { rates } } } = this.props;
    
    return <table><tbody>{
      !_isEmpty(rates) && Object.keys(rates).map(key => (
        <tr key={key}>
          <td style={{ border: 'solid 1px black' }}>{key}</td>
          <td style={{ border: 'solid 1px black' }}>{rates[key]}</td>
        </tr>
      ))
    }</tbody></table>;
  }
}

export default connect(
  state => _pick(state, ['ExchangeRate']),
  dispatch => bindActionCreators({ ...ExchangeRateActions }, dispatch)
)(SampleScreen);
