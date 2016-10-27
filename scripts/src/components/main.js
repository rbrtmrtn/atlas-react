import React from 'react'
import { app } from '../app'
import TopicPanel from './topic-panel'
import MapPanel from './map-panel'
import Topic from './topic'

console.log('app', app)

const topicNames = app.config.topics.map((topic) => topic.name)

export default class Main extends React.Component {
	render() {
		return (
			<main className="row collapse">
				<TopicPanel id="topic-panel" topics={topicNames}/>
				<MapPanel id="map-panel" />
			</main>
		)
	}
}
