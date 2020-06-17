import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

function SavedCard({ title, imgSrc, authors, desc, link }) {
  return (
    <div className="col mb-2">
      <div className="view overlay zoom rounded">
        <img src={imgSrc} alt="zoom" />
        <div className="mask flex-center waves-effect waves-light">
          <div className="card h-100 w-100">
            <div className="card-body">
              <h5 className="card-title text-white">{title}</h5>
              {authors.map((author) => (
                <p className="card-text text-light">{author}</p>
              ))}
            </div>
            <div className="card-body">
              <Row>
                <Col size="md-6">
                  <button type="button" class="btn btn-sm rounded btn-light">
                    View
                  </button>
                </Col>
                <Col size="md-6">
                  <button type="button" class="btn btn-sm rounded btn-danger">
                    Delete
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedCard;
