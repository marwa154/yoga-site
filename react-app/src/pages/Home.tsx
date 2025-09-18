import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/hero/Hero';
import servicesData from '../data/services.json';
import ServiceCard from '../components/serviceCard/ServiceCard';
import Health from '../components/health/Health';
import Routine from '../components/routine/Routine';
import Follow from '../components/follow/Follow';
import JoinForm from '../components/joinForm/JoinForm';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < servicesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <Layout>
      <Hero />
      <ServiceCard
        service={servicesData[currentIndex]}
        index={currentIndex}
        onNext={handleNext}
      />
      <Health />
      <Routine />
      <Follow />
      <JoinForm/>
    </Layout>
  );
}
