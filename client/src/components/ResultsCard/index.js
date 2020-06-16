import React from "react";
import "./style.css";

class ResultsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookData: {
        title: props.title,
        description: props.desc,
        image: props.imgSrc,
        authors: props.authors,
        link: props.link,
      },
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleSave(this.state.bookData);
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
                <a className="btn btn-sm  btn-pink" onClick={this.handleClick}>
                  <i className="fas fa-clone left"></i> Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsCard;
