import React from 'react'
import TopicPanel from './topic-panel'
import MapPanel from './map-panel'

import Topic from './topic'

const topics = [
	'311',
	'Schools',
	'Police',
	'Community Gardens',
]

export default class Main extends React.Component {
	render() {
		return (
			<main>
				<TopicPanel id="topic-panel" topics={topics}/>
				<MapPanel id="map-panel" />
			</main>
		)
	}
}

