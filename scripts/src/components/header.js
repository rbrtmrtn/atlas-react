import React from 'react'
import SearchContainer from './search'

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
	          <SearchContainer />
	        </div>
	      </div>
	    </header>
		)
	}
}
