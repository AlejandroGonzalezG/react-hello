import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import cardImage from "../../img/500x325.png";



const Cards = (props) => {
	return (
		<div className="container">
			<div className="row g-2 row-cols-1 row-cols-md-4 h-100">
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body">
						<h5 className="card-title text-center">Card title</h5>
						<p className="card-text text-center">{props.cardDescription}</p>
						</div>
						<div className="card-footer bg-light d-flex justify-content-center">
						<button className="btn btn-primary">Find Out More!</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{props.cardDescription}</p>
						</div>
						<div className="card-footer bg-light d-flex justify-content-center">
						<button className="btn btn-primary">Find Out More!</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img className="card-img-top " src={cardImage} alt="Card image cap"/>
						<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{props.cardDescription}</p>
						</div>
						<div className="card-footer bg-light d-flex justify-content-center">
						<button className="btn btn-primary">Find Out More!</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{props.cardDescription}</p>
						</div>
						<div className="card-footer bg-light d-flex justify-content-center">
						<button className="btn btn-primary">Find Out More!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	cardDescription: PropTypes.string,
}


export default Cards;
