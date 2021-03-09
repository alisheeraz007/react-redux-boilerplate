import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Logo from '../../Images/Logo 2.png'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Simple React with Redux boilerplate By</h1>
        <img style={{ width: "auto", height: 80 }} src={Logo} />
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
)(Home)
