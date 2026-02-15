import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast is your emergency response in Queens?",
    answer: "Our Queens emergency units typically arrive within 45-60 minutes regardless of borough traffic. We have teams stationed in Astoria, Flushing, and Jamaica to ensure rapid NYC response."
  },
  {
    question: "Do you handle burst pipes in high-rise buildings?",
    answer: "Yes. Our team is specialized in NYC's complex vertical infrastructure. We manage pressure-regulated high-rise systems and coordinate immediate water shut-off to prevent down-unit damage."
  },
  {
    question: "Are your plumbers NYC Master Licensed?",
    answer: "Absolutely. All our technicians are fully NYC Master Licensed and insured. We adhere strictly to NYC Department of Buildings codes for every emergency restoration project."
  },
  {
    question: "What should I do while waiting for the plumber?",
    answer: "If safe, locate your main water shut-off valve and turn it clockwise. Clear a path to the leak area. Our dispatchers will guide you through immediate mitigation steps on the phone."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Queens Emergency <span className="text-emerald-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about rapid emergency diagnostics and restoration in NYC.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-emerald-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
