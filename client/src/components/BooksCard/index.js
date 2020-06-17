import React from "react";
import { Container, Row, Col } from "../Grid";
import SavedDeck from "../SavedDeck";

function BooksCard({ books }) {
  return (
    <Container>
      <div className="card stylish-color-dark p-2">
        <div className="card-body">
          <Row>
            <Col size="md-12">
              <SavedDeck books={books} />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default BooksCard;
