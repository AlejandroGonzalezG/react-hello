import React from "react";
import PropTypes from "prop-types";


const estiloJumbotron = {
	background: "#F1F2F2",
};

const estiloBoton = {
	padding: "10px",
    marginTop: "20px",
    marginBottom: "80px",
};

const Jumbotron = (props) => {
	return (
        <div className="container pb-4 pt-3 text-start">
            <div className="row">
                <div className="col-12">
		            <div className="jumbotron px-5 py-1" style={estiloJumbotron}>
			            <h1 className="display-2 pt-5">{props.title}</h1>
			            <p className="lead">{props.description}</p>
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