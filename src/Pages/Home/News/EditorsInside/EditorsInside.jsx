import React from "react";
import firstImg from "../../../../assets/1.png";
import SecondImg from "../../../../assets/2.png";
import ThirdImg from "../../../../assets/3.png";

const EditorsInside = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div className="col">
        <div className="card">
          <img src={firstImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={SecondImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={ThirdImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsInside;
