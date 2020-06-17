import React from "react";
import { Row, Col, Container } from "../Grid";
import "./style.css";

class ResultsCard extends React.Component {
  constructor(props) {
    super(props);
    let { title, imgSrc, authors, desc, link } = this.props;
    this.state = {
      bookData: {
        title: title,
        image: imgSrc,
        authors: authors,
        description: desc,
        link: link,
      },
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    let { title, imgSrc, authors, desc, link } = this.props;
    const data = {
      title: title,
      image: imgSrc,
      authors: authors,
      description: desc,
      link: link,
    };
    this.props.handleSave(data);
  };

  render() {
    const { title, imgSrc, authors, desc, link } = this.props;
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
              <div className="card-body ">
                <Row>
                  <Col size="md-6">
                    <button
                      type="button"
                      className="btn btn-sm rounded btn-success"
                      onClick={this.handleClick}
                    >
                      Save
                    </button>
                  </Col>
                  <Col size="md-6">
                    <button type="button" class="btn btn-sm rounded btn-light">
                      View
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
}

export default ResultsCard;
