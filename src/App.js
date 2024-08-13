import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'
const App = () => {
  return (
    <div className="bg-container">
      <>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact component={NotFound} />
        </Switch>
      </>
    </div>
  )
}
export default App
