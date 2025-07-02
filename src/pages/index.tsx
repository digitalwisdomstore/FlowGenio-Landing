// src/pages/index.tsx
import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';
import InfluencerToolkit from '../components/InfluencerToolkit';
import Features from '../components/Features';
import ProductList from '../components/ProductList';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>FLOWgenio | Generá Contenido con AI</title>
      <meta
        name="description"
        content="FLOWgenio: tu asistente AI para crear contenido viral, automatizar tu marketing y escalar tu negocio en LATAM."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <main>
      {/* Hero siempre visible */}
      <Hero />

      {/* Secciones colapsables */}
      <Accordion title="Influencer Toolkit">
        <InfluencerToolkit />
      </Accordion>

      <Accordion title="Características Destacadas">
        <Features />
      </Accordion>

      <Accordion title="Nuestros Productos AI">
        <ProductList />
      </Accordion>

      {/* Testimonios también en acordeón */}
      <Accordion title="Lo que dicen nuestros usuarios">
        <Testimonials />
      </Accordion>

      {/* Pruebalo Gratis queda fijo */}
      <LeadForm />
    </main>

    <Footer />
  </>
);

export default HomePage;
