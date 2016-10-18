import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

// patterns wants jquery
// import $ from 'jquery'
// global.window.jQuery = $

render(<App />, document.getElementById('base'))
