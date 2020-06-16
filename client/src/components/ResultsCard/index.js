import React from "react";

function ResultsCard() {
  return (
    <div className="col mb-4">
      <div className="card">
        <div class="view overlay">
          <img
            class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
            alt="Card image cap"
          />
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <div class="card-body">
          <h4 class="card-title">Card title</h4>

          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <button type="button" class="btn btn-light-blue btn-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;
