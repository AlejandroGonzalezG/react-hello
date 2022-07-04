import React from "react";

//include images into your bundle
import cardImage from "../../img/500x325.png";

//create your first component
const Cards = () => {
	return (
		<div className="container">
			<div className="row g-2 row-cols-1 row-cols-md-4 h-100">
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body">
						<h5 className="card-title text-center">Card title</h5>
						<p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
						<div className="card-footer bg-light">
						<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
						<div className="card-footer bg-light">
						<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
						<div className="card-footer bg-light">
						<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">
						<img className="card-img-top" src={cardImage} alt="Card image cap"/>
						<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
						<div className="card-footer bg-light">
						<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
