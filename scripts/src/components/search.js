import React from 'react'
import app from '../app'
import { handleApiResponse } from '../actions'

console.log('app search', app)

export default class Header extends React.Component {
	render() {
    return (
      <div id="search-container">
        <input id="search-input" type="text" placeholder="What address are you looking for?" value="1234 market st" />
        <a href="#" id="search-button" className="button no-margin" onClick={this.didSearch}>Go</a>
      </div>
    )
  }

  didSearch() {
    const val = document.getElementById('search-input').value,
          url = `https://api.phila.gov/ais/v1/addresses/${val}?include_units=&opa_only=&gatekeeperKey=${app.config.gatekeeperKey}`
		
    $.get(url, (data) => app.store.dispatch(handleApiResponse('ais', data)))
  }
}
