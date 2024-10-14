"use client";
import { useState } from "react";
import Bar from "../_components/home-page/Bar";
import FeatureProducts from "../_components/home-page/FeatureProducts";
import Flickity from "../_components/home-page/Flickity";
import Header from "../_components/home-page/Header";
import ShotifySection from "../_components/home-page/ShotifySection";
import SiteHeader from "../_components/home-page/SiteHeader";
import Promo from "../_components/home-page/Promo";
import Logoist from "../_components/home-page/Logoist";
import QuizKitContent from "../_components/home-page/QuizKitContent";
import LooReview from "../_components/home-page/LooReview";
import PromoInner from "../_components/home-page/PromoInner";
import Footer from "../_components/home-page/Footer";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <Flickity />
      <ShotifySection />
      <FeatureProducts setSelectedItem={setSelectedItem} />
      <Promo />
      <Logoist />
      <QuizKitContent />
      <LooReview />
      <PromoInner />
      <Footer />
    </>
  );
}
