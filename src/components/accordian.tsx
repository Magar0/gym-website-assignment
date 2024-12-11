import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordianData } from "@/lib/constants";

export function AccordionComp() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordianData.map((item, index) => (
        <AccordionItem value="item-1">
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
