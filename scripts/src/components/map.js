import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]

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

// TEST: does the old map stuff work?
// export default class MapView extends React.Component {
// 	render() {
// 		return (<div>Hi im a map</div>)
// 	}
// }
