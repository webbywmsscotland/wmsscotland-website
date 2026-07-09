"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you come to my home or workplace?",
      answer:
        "Yes. WMS Scotland is a fully mobile mechanic service. We carry out repairs and servicing at your home, workplace or roadside whenever possible.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We're based in Dunbar and cover East Lothian, including Haddington, North Berwick, Musselburgh, Tranent, East Linton and surrounding areas.",
    },
    {
      question: "Do you work on vans and commercial vehicles?",
      answer:
        "Absolutely. We regularly service and repair cars, vans, 4x4s and light commercial vehicles.",
    },
    {
      question: "Can you diagnose warning lights and faults?",
      answer:
        "Yes. We use professional diagnostic equipment to identify faults, clear warning lights where appropriate and recommend the correct repair.",
    },
    {
      question: "Do you work on tractors and agricultural machinery?",
      answer:
        "Yes. Agricultural machinery is one of our specialist areas, helping keep farms and businesses moving.",
    },
    {
      question: "What if my vehicle won't start?",
      answer:
        "Give us a call. We can often diagnose starting problems at your location and get you back on the road without the need for recovery.",
    },
  ];

  return (
    <section id="faq" className="bg-[#09101d] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-center text-5xl font-black text-white">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-400">
          Here are some of the questions we're asked most often.
        </p>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#10192d]"
            >
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-xl font-bold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openQuestion === index && (
                <div className="px-8 pb-8">
                  <p className="leading-8 text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}