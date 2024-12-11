import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  title: string;
  description: string;
  rating: number;
}

const ReviewCrads = ({ title, description, rating }: ReviewCardProps) => {
  const totalStar = 5;

  return (
    <Card className="h-full transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {Array.from({ length: totalStar }, (_, index) => (
          <Star
            fill={index < rating ? "gold" : "transparent"}
            stroke="#d4d0cf"
            strokeWidth={1}
            style={{
              filter: index < rating ? "drop-shadow(0 0 2px gold)" : "none",
            }}
          />
        ))}
      </CardFooter>
    </Card>
  );
};

export default ReviewCrads;
