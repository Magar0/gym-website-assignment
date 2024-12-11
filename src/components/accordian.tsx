import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCORDIANS } from "@/lib/constants";

export function AccordionComp() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {ACCORDIANS.map((item, index) => (
        <AccordionItem value={index + ""}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
