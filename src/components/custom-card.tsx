"use client";
import Image, { StaticImageData } from "next/image";

interface CustomCardProps {
  title: string;
  description: string;
  img: StaticImageData | undefined;
}

const CustomCard = ({ title, description, img }: CustomCardProps) => {
  return (
    <div className="w-96 text-center">
      <div>
        {img && (
          <Image
            width={400}
            className="m-auto h-[250px] rounded-lg"
            src={img}
            alt="img"
          />
        )}
      </div>
      <p className="mb-2 mt-5 text-xl font-semibold text-slate-800">{title}</p>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default CustomCard;
