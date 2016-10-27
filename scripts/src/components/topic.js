import React from 'react'

export default class Topic extends React.Component {
	render() {
		return (
			<div>
				<TopicHeader name={this.props.name} didClickTopic={this.props.didClickTopic} />
				<TopicBody name={this.props.name} active={this.props.active} />
			</div>
		)
	}
}

export class TopicHeader extends React.Component {
	constructor(props) {
		super(props)
		this.didClickTopic = this.didClickTopic.bind(this)
	}

	didClickTopic() {
		this.props.didClickTopic(this.props.name)
	}

	render() {
		return (
			<a className="topic-header" onClick={this.didClickTopic}>{this.props.name}</a>
		)
	}
}

export class TopicBody extends React.Component {
	render() {
		// TEST: this is not how we really want to do this.
		if (this.props.name === 'Basic Info') {
			return (
				<div className={this.props.active ? "topic-body" : "topic-body hidden"}>
					Basic info will go here
				</div>
			)
		}

		else {
			return (
				// set classname conditionally based on parent's state
				<div className={this.props.active ? "topic-body" : "topic-body hidden"}>Data goes here</div>
			)
		}
	}
}
