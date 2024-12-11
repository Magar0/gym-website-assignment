import { alternateStepsData, cardsData } from "@/lib/constants";
import CustomCard from "../components/custom-card";
import AlternateSteps from "../components/alternate-steps";
import { CarouselComp } from "@/components/carousel";
import { AccordionComp } from "@/components/accordian";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="conte bg-custom-img relative flex h-screen items-center justify-center bg-cover bg-fixed bg-no-repeat text-white">
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-black/30"></div>
        <div className="relative z-10 w-[600px] text-center">
          <h1 className="mb-3 text-4xl font-bold">
            Track Your Fitness Journey
          </h1>
          <p className="text-lg">
            Discover the ultimate fitness companion with GymFluencer.
            Effortlessly log your workouts, count reps, and track calories
            burned. Stay motivated and achieve your goals with our user-friendly
            interface.
          </p>
        </div>
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
      <section className="grid grid-cols-3 justify-items-center gap-y-5 bg-slate-100 px-10 py-20">
        {cardsData.map((card) => (
          <CustomCard
            key={card.id}
            title={card.title}
            description={card.description}
            img={card.img}
          />
        ))}
      </section>

      {/* steps */}
      <section className="flex flex-col gap-y-20 p-20">
        {alternateStepsData.map((data, index) => (
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

      {/* faqs */}
      <section className="p-20">
        <p className="text-2xl font-semibold">FAQs</p>
        <AccordionComp />
      </section>
    </>
  );
}
