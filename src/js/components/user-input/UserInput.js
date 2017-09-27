import React, {Component} from 'react';
//Locals
import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

export default class UserInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {inputFields, submitFunction, changeFunction} = this.props;

    return (

    <div className="preferences">
      <h2 className="subsection-title"> Please submit your bike commute preferences below </h2>
      <form onSubmit={submitFunction} onChange={changeFunction}>

      {inputFields.map(function(obj){
      return <label >
        <p className="form-label">
        {obj.label}
        </p>
        <input name={obj.name} value={obj.value} />
      </label>
        })
      }
      <input className="submit-preferences" type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}
