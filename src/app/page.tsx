import { ALTERNATE_STEPS, CARDS_DATA, PRICING_CARDS } from "@/lib/constants";
import AlternateSteps from "../components/alternate-steps";
import { CarouselComp } from "@/components/carousel";
import { AccordionComp } from "@/components/accordian";
import TypingText from "@/components/typing-text";
import ScrollViewCard from "@/components/ScrollViewCards";
import Partners from "@/components/partners";
import PricingDiv from "@/components/pricingdiv";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <HeroSection />
      </section>

      {/* discover feature  */}
      <section className="flex items-center gap-8 px-14 py-20">
        <div className="text-nowrap text-xl font-bold text-orange-600">
          Discover Our App's Key Features
        </div>
        <p className="font-normal text-slate-800">
          GymFluencer is your ultimate fitness companion, designed to help you
          track your workouts with ease. Our application allows you to log
          exercises, count reps, and calculate calories burned, all through a
          user-friendly interface. Whether you’re a beginner or a seasoned
          athlete, our app will keep you motivated and on track.
        </p>
      </section>

      {/* card section */}
      <section className="bg-slate-100 px-10 py-20">
        <ScrollViewCard />
      </section>

      {/* steps */}
      <section className="flex flex-col gap-y-20 p-20">
        {ALTERNATE_STEPS.map((data, index) => (
          <AlternateSteps
            key={data.id}
            index={index}
            title={data.title}
            description={data.description}
            img={data.img}
          />
        ))}
      </section>

      {/* review section */}
      <section className="flex flex-col items-center justify-center gap-y-6 bg-slate-100 p-20">
        <h3 className="text-2xl font-semibold text-slate-800">Reviews</h3>
        <CarouselComp />
      </section>

      {/* sliding animation*/}
      <section className="relative px-10 py-20">
        <Partners />
      </section>

      {/* pricing plans */}
      <section className="bg-slate-100 p-20">
        <PricingDiv />
      </section>

      {/* faqs */}
      <section className="p-20">
        <p className="text-2xl font-semibold">FAQs</p>
        <AccordionComp />
      </section>
    </>
  );
}
