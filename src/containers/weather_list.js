import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(viewData) {
        if (!viewData.length) {
            return
        };
        const posts = viewData.data.children.map((view) => {
            return (
                <h2> { view.data.title }</h2>
            )
        });
    }

    render() {
        return (
            <div>
               { this.renderWeather(this.props.weather)}
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);