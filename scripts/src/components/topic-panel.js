import React from 'react'
import Topic from './topic'
import { app } from '../index.js'

export default class TopicPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {activeTopic: '311'}
		this.handleTopicChange = this.handleTopicChange.bind(this)
	}

	handleTopicChange(newTopic) {
		this.setState({activeTopic: newTopic})
	}

	render() {
		const topics = this.props.topics
		return (
			<div id="topic-panel" className="large-12 columns">
				<h1>1234 MARKET ST</h1>

 				{topics.map((topic) => {
 					return <Topic name={topic}
 								  active={this.state.activeTopic === topic}
 								  didClickTopic={this.handleTopicChange}
 						   />
 				})}
 			</div>
		)
	}
}
