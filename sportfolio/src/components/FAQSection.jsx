import React from "react";
import Container from "./Container";
import FAQItem from "./FAQItems";

const FAQSection = () => {
  const faqs = [
    {
      question: "How is the price per share calculated?",
      answer:
        "The market price is different from an intrinsic value, it is determined with respect to the point where the demand and supply of an asset coincides. The value keep fluctuating based on various factors, including news, social media, events, trade, demand, supply,  ",
    },
    {
      question: "What does a share represent?",
      answer:
        "The ownership representation is a direct correlation to the ownership of the team that the athlete is playing for. Let’s use the Lakers as an example and look at the 2022-23 NBA season. During the regular season LeBron James had a 15.5 Impact on Wins compared to 11.8 of D’Angelo Russell. So based on our proprietary algorithm the “Player Importance” of LeBron will be much higher than D’Ang ",
    },
    {
      question: "What is an ownership representation?",
      answer:
        "If you buy more shares of LeBron then your ownership representation in Lakers will be much higher compared rest of the roster as the NBA season progress but the opposite could happen if an average player has a breakout season and the stats sky rocket along with the impact on wins.",
    },
    {
      question: "What happens if an athlete is traded?",
      answer:
        "No worries, this is business as usual, we have baked the trade concept into our machine learning models. Once a trade happens, your position will be recalibrated based on the new teams valuation & roster impact.",
    },
    {
      question: "What happens if an athlete retires?",
      answer:
        "This is business as usual, we have baked the trade concept into our machine learning models as well. Once an athlete retires due to age, performance, injury, etc. we will add your position value to the team itself and your team ownership could be held as is or you will have a choice to obtain new players based on the current valuation.",
    },
  ];
  return (
    <Container className={"md:mt-16 mt-8 mb-4"}>
      <h2 className="lg:text-4xl md:text-2xl text-base font-bold uppercase text-center mb-5 cursor-pointer">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question}>
          {faq.answer}
        </FAQItem>
      ))}
    </Container>
  );
};

export default FAQSection;