"use client";
import React from "react";
import {
  PlantCare,
  QuizKit,
} from "../../_style-components/home-page-css/QuizKit";
import { Container } from "../../_style-components/home-page-css/Container";

const QuizKitContent = () => {
  return (
    <>
      <QuizKit>
        <h1>Find Your Perfect Plant</h1>
        <button>Get Started</button>
      </QuizKit>

      <Container>
        <PlantCare>
          <h2>Plant Care Instructions</h2>
          <div>A Plant-o-pedia of information</div>
          <button>Care Guides</button>
        </PlantCare>
      </Container>
    </>
  );
};

export default QuizKitContent;
