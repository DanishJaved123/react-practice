import React from "react";
import ReactDOM from 'react-dom';
function Card(props) {

    console.log(props.title);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="cards">
                            <div className="card">
                                <img src={props.imgsrc} alt={props.title} />
                                <div className="card-info">
                                    <div className="card-category">{props.sname}</div>
                                    <h2 className="card-title">{props.title}</h2>
                                    <p className="card-desc">{props.text}</p>
                                    <a href={props.link} >Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;