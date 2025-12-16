import { Metadata } from 'next';
import BookDemo from '@/components/BookDemo';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MachineSpecs from '@/components/MachineSpecs';
import Pricing from '@/components/Pricing';
import ProductCarousel from '@/components/ProductCarousel';
import ProfitCalculator from '@/components/ProfitCalculator';
import StructuredData from '@/components/StructuredData';
import { generateHomeMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateHomeMetadata();

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
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
