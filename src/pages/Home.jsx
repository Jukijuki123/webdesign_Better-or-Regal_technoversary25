import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TentangSection from '../components/TentangSection'
import imgGelombang from "../assets/img/gelombang.svg";
import SumberSampah from '../components/SumberSampah';
import TestimoniSection from '../components/Testimoni';
import FaqSection from '../components/FaqSection';
import TrashCashSection from '../components/TrashCashSection';
import ContactSection from '../components/Kontak';
import CaraKerja from '../components/CaraKerja';
import Footer from '../components/Footer';
import CommunitySection from '../components/KomunitasSection';
import EducationSection from '../components/EdukasiSection';
import ImpactSection from '../components/ImpactSection';
import ImpactStats from '../components/ImpactStats';


const Home = () => {

    return (
    <>
    <Navbar />
        <main className="pt-16 scroll-smooth">

            <HeroSection /> 
            <div className="overflow-hidden -mb-6">
                <img src={imgGelombang} alt="Gelombang" className="w-full" />
            </div>
            <ImpactStats />
            <TentangSection />
            <SumberSampah />

            <EducationSection />
            <ImpactSection />
            <CaraKerja />
            <TrashCashSection />
            <TestimoniSection />
            <CommunitySection />
            <FaqSection />
            <ContactSection />
            <Footer />
        </main>
    </>
    )
}

export default Home
