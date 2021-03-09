import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CopyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>

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
)(CopyComponent)