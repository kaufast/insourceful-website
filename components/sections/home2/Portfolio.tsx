'use client'
import dynamic from "next/dynamic";
// Dynamically import PortfolioFilter1 with ssr: false
const PortfolioFilter1 = dynamic(
  () => import("@/components/elements/PortfolioFilter1"),
  {
    ssr: false,
  }
);
export default function Portfolio() {
  return (
    <>
      {/*Portfolio Two Start*/}
      <section className="portfolio-two">
        <div className="container">
          <div className="section-title-two text-center">
            <div className="section-title-two__tagline-box">
              <span className="section-title-two__tagline">Our Portfolio</span>
            </div>
            <h2 className="section-title-two__title">Our Case Studies</h2>
          </div>
          <PortfolioFilter1 />
        </div>
      </section>
      {/*Portfolio Two End*/}
    </>
  );
}
