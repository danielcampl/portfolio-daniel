import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdf from "../assets/daniel-campelo-cv.pdf";
import Button from "../components/Button";
import Menu from "../components/Menu";
import "../CSS/Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Menu />
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <div className="resume-container">
          <section className="flex-box">
            <div className="button-download">
              <Button title="Download CV" />
            </div>
            <Row className="resume">
              <Document file={pdf} className="document-container">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Row>
          </section>
        </div>
      </motion.div>
    </Container>
  );
}
