import React, { Component } from 'react'

//import GoogleMapReact from 'google-map-react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const gKey = "APIKEY"

let gLat = "-29.6914"
let gLng = "-53.8008"

const containerStyle = { position: 'relative',  width: '100%', height: '250px' }

//const Marker = ({ text }) => <div style={{color:"$f0f"}}>{text}</div>;

export class Maps extends Component {
  render(){
    return(
      <Map 
        google={this.props.google} 
        initialCenter={{ lat: gLat, lng: gLng }} 
        zoom={10}
        containerStyle={containerStyle}>
        
          <Marker 
            title={'Santa Maria RS'}
            position={{lat: gLat, lng: gLng}}
            icon={{url: "http://maps.google.com/mapfiles/ms/micons/orange.png"}}/>
        
      </Map>    
    )
  }
}
export default GoogleApiWrapper({
  apiKey: gKey
})(Maps)

  /*

  static defaultProps = {
    center: { lat: -29.70, lng: -53.80 },
    zoom: 14
  };

  render() {
    return (
      <div style={{ width: '100%', height: '250px', border: '0px', padding: '0px' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: gKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals>
          {/**
           * <Marker
            lat={-29.6914}
            lng={-53.8008}
            text="My Marker" 
            />
           }
          
        </GoogleMapReact>
      </div>
    )
  }
}

/*
      <iframe title="Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783148.1181522706!2d115.83702304076536!3d39.93753464645484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sPequim%2C%20China!5e0!3m2!1spt-BR!2sbr!4v1591648009554!5m2!1spt-BR!2sbr"
        width="100%"
        height="250"
        style={{ border: 0 }} />
      */

      