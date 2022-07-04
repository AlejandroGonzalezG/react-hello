import React from "react";
import PropTypes from "prop-types";


const estiloJumbotron = {
	background: "#F1F2F2",
};

const estiloBoton = {
	padding: "10px",
    marginTop: "20px",
    marginBottom: "80px",
	textAlign: "start",

};

const Jumbotron = (props) => {
	return (
        <div className="container">
            <div className="row">
                <div className="col-12">
		            <div className="jumbotron p-4" style={estiloJumbotron}>
			            <h1 className="display-4 text-start">{props.title}</h1>
			            <p className="lead text-start">{props.description}</p>
			            <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button" style={estiloBoton}>{props.buttonLabel}</a>
		            </div>
                </div>
            </div>
        </div>
	)
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

export default Jumbotron;