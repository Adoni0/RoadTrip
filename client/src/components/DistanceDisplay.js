import React, { Component } from 'react';
import OriginDest from './OriginDest';

export default class DistanceDisplay extends Component {
  constructor(props){
    super(props)
    
  }

  getDistance(){
    let destinations = ''
    let orgin = [`${this.state.lat}, ${this.state.lng}`]
  } 

  render() {
    return (
      <div>
        <OriginDest />
      </div>
    )
  }
}


