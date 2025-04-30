import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({ Icon, title, children }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        {/* Render Icon and Title ONLY if provided */}
        {(Icon || title) && (
          <Card.Title>
            {Icon && <Icon className="purple" />} {title && <span>&nbsp;{title}</span>}
          </Card.Title>
        )}
        <Card.Text style={{ textAlign: "left" }}>
          {children}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
