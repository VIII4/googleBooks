import React from "react";
import { Container, Row, Col } from "../Grid";
import SearchBar from "../SearchBar";
import ResultsDeck from "../ResultsDeck";

function SearchCard({ handleSearch, searchResults, handleSave }) {
  return (
    <Container>
      <div className="card stylish-color-dark p-2">
        <div className="card-body">
          <Row>
            <Col size="md-12">
              <SearchBar onClick={handleSearch} />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <ResultsDeck
                searchResults={searchResults}
                handleSave={handleSave}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default SearchCard;
