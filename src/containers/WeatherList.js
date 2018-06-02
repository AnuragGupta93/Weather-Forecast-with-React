import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'
class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps =cityData.list.map(item=>item.main.temp);
        const pressures =cityData.list.map(item=>item.main.pressure);
        const humidities =cityData.list.map(item=>item.main.humidity);
        const {lon , lat} = cityData.city.coord;
        return (
            <tr key={name}>
                <td  id='tdleft'><GoogleMap lon={lon} lat={lat}/></td>
                <td id='tdleft'><Chart unit='K' color='red' feature={temps}/></td>
                <td id='tdleft'><Chart unit='Pa' color='blue' feature={pressures}/></td>
                <td id='tdleft'><Chart unit='%' color='orange' feature={humidities}/></td>
            </tr>
        )
    }
    render(){
        return (
            <div id='WeatherList'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Map</th>
                            <th>Temperature(K)</th>
                            <th>Pressure(Pa)</th>
                            <th>Humidity(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);