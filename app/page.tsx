import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCarousel from '@/components/ProductCarousel';
import MachineSpecs from '@/components/MachineSpecs';
import Pricing from '@/components/Pricing';
import ProfitCalculator from '@/components/ProfitCalculator';
import BookDemo from '@/components/BookDemo';
import Footer from '@/components/Footer';
import { generateHomeMetadata } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = generateHomeMetadata();

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <Hero />
      <Features />
      <ProductCarousel />
      <MachineSpecs />
      <Pricing />
      <ProfitCalculator />
      <BookDemo />
      <Footer />
    </>
  );
}
