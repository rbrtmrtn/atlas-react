import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<header data-swiftype-index='false' className="site-header app">
	      <div className="row">
	        <div className="small-24 columns">
	          <a href="http://alpha.phila.gov/" className="logo">
	            <img data-interchange="[//cityofphiladelphia.github.io/patterns/images/city-of-philadelphia-mobile.png, small], [//cityofphiladelphia.github.io/patterns/images/city-of-philadelphia-white.png, medium]" src="//cityofphiladelphia.github.io/patterns/images/city-of-philadelphia-white.png" alt="City of Philadelphia" />
	          </a>
	          <div className="page-title-container">
	            <a href="#/">
	              <h1 className="page-title">Atlas</h1>
	            </a>
	          </div>
	          <div id="search-container">
	            <input type="text" placeholder="Which address are you looking for?" id="search-input" />
	            <a href="#" id="search-button" className="button no-margin">Go</a>
	          </div>
	        </div>
	      </div>
	    </header>
		)
	}
}
