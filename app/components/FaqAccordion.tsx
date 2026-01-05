
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Dúvidas Frequentes</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FaqAccordion;
