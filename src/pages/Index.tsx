import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import QueensPlumbingInfo from "@/components/landing/QueensPlumbingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>emergency plumber queens ny Queens NY</title>
        <meta name="description" content="emergency plumber queens ny Queens NY - 24/7 Expert emergency plumbing repair, burst pipes & severe leak detection in Queens. Rapid NYC response. Call (877) 792-1410!" />
        <meta name="keywords" content="emergency plumber queens ny, Queens NY plumber, 24 hour plumber Queens, NYC emergency plumbing, Astoria plumber, Flushing plumbing repair, Queens drain cleaning" />
        <link rel="canonical" href="https://queens-emergency-plumbing.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Queens Emergency Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Queens",
              "addressRegion": "NY",
              "postalCode": "11101",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.7282",
              "longitude": "-73.7949"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Queens, NY"
            },
            "priceRange": "$$$",
            "description": "24/7 Professional emergency plumbing services in Queens, NY. We specialize in rapid response for burst pipes, flooding, sewer backups, and urgent plumbing repairs throughout all NYC boroughs."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Plumbing & Flood Mitigation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Queens Emergency Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Queens, NY"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Emergency Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Burst Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Sewer Backup Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rapid Leak Detection & Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Emergency Plumbing"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="emergency plumber queens ny Queens NY - Queens Emergency Plumbing Pros" />
        <meta property="og:description" content="24/7 Emergency plumbing services in Queens, NY. Rapid response for New York City home & business owners. Master licensed & insured." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://queens-emergency-plumbing.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              emergency plumber queens ny Queens NY
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Queens Emergency Plumbing Pros</span>
            </>
          }
          subtitle="Queens' premier 24/7 emergency response team. We provide rapid diagnostic restoration for burst pipes, severe leaks, and NYC infrastructure failures. Precision Emergency Care."
          image="https://images.unsplash.com/photo-1504151932400-72d433433e33?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=2000"
          badge="QUEENS EMERGENCY PLUMBERS"
        />
        <Services />
        <WhyUs />
        <QueensPlumbingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
