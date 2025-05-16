
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I open a trading account?",
      answer: "Opening an account is simple. Click on the 'Start Trading' button, fill out the registration form with your details, verify your identity, and make your first deposit to begin trading."
    },
    {
      question: "What markets can I trade on Data FX?",
      answer: "Data FX offers a wide range of markets including Forex, Stocks, Cryptocurrencies, Commodities, Indices, and more. You can explore all available markets in the 'Markets' section."
    },
    {
      question: "Is there a minimum deposit requirement?",
      answer: "Yes, the minimum deposit requirement is $100. This allows you to start trading with a sufficient balance to explore different markets."
    },
    {
      question: "How can I withdraw my funds?",
      answer: "You can withdraw funds through your account dashboard. Select the 'Withdraw' option, choose your preferred withdrawal method, enter the amount, and follow the instructions. Withdrawals are typically processed within 1-3 business days."
    },
    {
      question: "What trading platforms do you offer?",
      answer: "We offer a proprietary web trading platform, mobile apps for iOS and Android, and support for MetaTrader 4 and 5 platforms to suit different trading preferences."
    },
    {
      question: "Do you offer leverage trading?",
      answer: "Yes, we offer leverage trading with ratios up to 1:500 depending on your account type, jurisdiction, and the asset class you're trading. Please note that leverage trading involves significant risk."
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about trading with Data FX.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
