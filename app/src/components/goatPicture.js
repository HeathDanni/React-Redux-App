import React from 'react';
import {connect} from 'react-redux';

const goatPicture = (props) => {
    return (
        <p>Is this working</p>
    )
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(goatPicture)