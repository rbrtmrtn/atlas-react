import { createStore } from 'redux'
import handleStateChange from './reducers'
import config from './config'

// the global app object
const app = {
  config: config,
  store: createStore(handleStateChange)
}

export default app
