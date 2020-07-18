import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";

function Cards({ users }) {
  return (
    <div className="Cards">
      {users.map((user) => (
        <Card className="Card" key={user.id}>
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <a href={user.url}>Go to Profile</a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
