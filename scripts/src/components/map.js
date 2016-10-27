import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

// TODO: this map is just a placeholder. make a real map. good references:
// - https://github.com/socialradar/react-esri-map
// - https://github.com/Charmatzis/react-leaflet-google

const position = [39.952448, -75.163594]

export default class MapView extends React.Component {
	render() {
		return (
			<Map id="map" center={position} zoom={13}>
		    <TileLayer
		      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
		      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    />
		  </Map>
		)
	}
}
