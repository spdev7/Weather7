import React, { Component } from 'react'
import MainCardBottom from './MainCardBottom';
import MainCardHeader from './MainCardHeader';
import MainCardGraph from './MainCardGraph';

export default class MainCard extends Component {
    render() {
        return (
            <div>
                <h1>MainCard</h1>
                <MainCardHeader/>
                <MainCardGraph/>
                <MainCardBottom/>
            </div>
        )
    }
}
