import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Uday_Resume_M_25.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const filename = "Uday-Chandra-Bhookya-Resume.pdf";

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const scale = width > 786 ? 1.7 : 0.6;

  // Programmatic download handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row className="justify-content-center mb-3">
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Pages stacked vertically */}
        <Row className="d-flex flex-column align-items-center resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="w-100"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className="mb-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Page pageNumber={index + 1} scale={scale} />
              </div>
            ))}
          </Document>
        </Row>

        {/* Bottom Download Button */}
        <Row className="justify-content-center mt-3">
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
