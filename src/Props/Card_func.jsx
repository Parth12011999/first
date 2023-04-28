import React from "react";

function Card_func({img, title, des}) {
  return (
    <div  className="col-md-4">
      <div className="card" style={{ width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {des}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card_func;
