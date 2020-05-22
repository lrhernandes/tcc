import React from 'react';
import './styles.css';
import '../../js/maps'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import mapStyles from '../../templates/ContentMap/mapstyles'

/*function loadMap(){
    return (
        const MyMapComponent = (props) =>
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: -29.934590, lng: -51.170860 }}
            >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
)}
const MapWrapped = withScriptjs(withGoogleMap(loadMap));*/

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -29.934590, lng: -51.170860 }}
        defaultOptions={{styles: mapStyles, mapTypeControl: false}}
        >
    {props.isMarkerShown && <Marker position={{ lat: -29.934590, lng: -51.170860 }}/>}
  </GoogleMap>
))

export default function ContentMap(){
    return (
        <div className="content-map">
            <div id="map">
                <MyMapComponent
                    isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAGVvTK0AwB_fpE-_-DrVN1uhbyY7S-AV4&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
}