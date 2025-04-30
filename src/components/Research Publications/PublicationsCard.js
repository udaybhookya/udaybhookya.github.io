import React from "react";
import Card from "react-bootstrap/Card";

function PublicationsCard({ title, description, abstract, link }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {title}
        </Card.Title>

        <Card.Text style={{ textAlign: "left", marginTop: "10px" }}>
          <strong>Description:</strong> {description}
        </Card.Text>

        {abstract && (
          <Card.Text
            className="purple"
            style={{
              textAlign: "left",
              fontStyle: "italic",
            } }
          >
            <strong>Abstract:</strong> {abstract}
          </Card.Text>
        )}

        {link && (
          <div className="text-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Full Paper
            </a>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default PublicationsCard;
