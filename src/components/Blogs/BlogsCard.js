// src/components/BlogsCard.js
import React from "react";
import Card from "react-bootstrap/Card";

function BlogsCard({ title, description, link }) {
  return (
    <Card className="blog-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ textAlign: "left", marginTop: "10px" }}>
          {description}
        </Card.Text>
        {link && (
          <div className="text-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read Blog
            </a>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default BlogsCard;
