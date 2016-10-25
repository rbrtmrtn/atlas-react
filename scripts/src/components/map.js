import React from 'react'
import { Map, BaseTileLayer } from 'react-leaflet'
import { TiledMapLayer } from 'esri-leaflet'

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

// see https://github.com/Charmatzis/react-leaflet-google for example
// class EsriTileLayer extends BaseTileLayer {
// 	super.componentWillMount()
// 	this.props = {}
//  this.leafletElement = new TiledMapLayer();
// }
