import React from 'react'
import { Route} from 'react-router-dom'
import Home from '../home'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}

const mapStateToProps = ({ store }) => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
