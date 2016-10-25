import React from 'react'
import MapView from './map'

export default class MapPanel extends React.Component {
	render() {
		return (
			<div id="map-panel" className="large-12 columns">
				<MapView />
			</div>
		)
	}
}
