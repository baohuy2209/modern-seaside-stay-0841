
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Apartments() {
  const { t } = useLanguage();
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.apartments.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.apartments.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute top-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Contents */}
        <section className="w-[70%] mx-auto py-20">
          {t.apartments.contents.map((content, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
              <p className="text-muted-foreground text-lg leading-normal indent-8">{content.description}</p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center items-center">
                {content.images.map((image, index) => (
                  <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4">
                    <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
                    <p className="text-center text-muted-foreground text-sm mt-2">{image.subImageTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
