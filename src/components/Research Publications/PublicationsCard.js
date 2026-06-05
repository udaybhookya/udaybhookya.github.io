import React, { useState } from "react";

function PublicationsCard({ title, venue, year, abstract, link, type = "publication", authors, patentNumber }) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className={`pub-card pub-card--${type}`}>
      <div className="pub-card-meta">
        <span className={`pub-type-badge pub-type--${type}`}>
          {type === "patent" ? "Patent Pending" : "IEEE Paper"}
        </span>
        {year && <span className="pub-year-badge">{year}</span>}
      </div>

      <h3 className="pub-title">{title}</h3>

      <div className="pub-venue">{venue}</div>

      {authors && <p className="pub-authors">{authors}</p>}

      {patentNumber && (
        <p className="pub-patent-num">App. No. {patentNumber}</p>
      )}

      {abstract && (
        <>
          <button
            className="abstract-toggle"
            onClick={() => setShowAbstract((p) => !p)}
          >
            {showAbstract ? "▲ Hide abstract" : "▼ Read abstract"}
          </button>
          {showAbstract && <p className="abstract-text">{abstract}</p>}
        </>
      )}

      {link && (
        <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-link-btn"
          >
            View Paper →
          </a>
        </div>
      )}
    </div>
  );
}

export default PublicationsCard;
