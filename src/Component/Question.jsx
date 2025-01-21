import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = () => {
  const questions = [
    {
      id: 1,
      question:
        "What happens if there is an issue with a transaction or transfer?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quis fugiat, excepturi corporis quod eveniet. Blanditiis eaque, assumenda impedit nihil eum vero autem fugiat, labore rerum iusto, quo corporis sint quia. Inventore, vitae pariatur placeat ab tenetur accusamus quos voluptatum ipsum iste alias at adipisci accusantium, illo consequatur nostrum doloremque!",
    },
    {
      id: 2,
      question:
        "Are there any transaction limits or restrictions I should be aware of?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quis fugiat, excepturi corporis quod eveniet. Blanditiis eaque, assumenda impedit nihil eum vero autem fugiat, labore rerum iusto, quo corporis sint quia. Inventore, vitae pariatur placeat ab tenetur accusamus quos voluptatum ipsum iste alias at adipisci accusantium, illo consequatur nostrum doloremque!",
    },
    {
      id: 3,
      question:
        "How often should I update my password and security information?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quis fugiat, excepturi corporis quod eveniet. Blanditiis eaque, assumenda impedit nihil eum vero autem fugiat, labore rerum iusto, quo corporis sint quia. Inventore, vitae pariatur placeat ab tenetur accusamus quos voluptatum ipsum iste alias at adipisci accusantium, illo consequatur nostrum doloremque!",
    },
    {
      id: 4,
      question:
        "Is the platform accessible 24/7 or are there specific operating hours?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quis fugiat, excepturi corporis quod eveniet. Blanditiis eaque, assumenda impedit nihil eum vero autem fugiat, labore rerum iusto, quo corporis sint quia. Inventore, vitae pariatur placeat ab tenetur accusamus quos voluptatum ipsum iste alias at adipisci accusantium, illo consequatur nostrum doloremque!",
    },
    {
      id: 5,
      question: "What payment methods are accepted for the services offered?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quis fugiat, excepturi corporis quod eveniet. Blanditiis eaque, assumenda impedit nihil eum vero autem fugiat, labore rerum iusto, quo corporis sint quia. Inventore, vitae pariatur placeat ab tenetur accusamus quos voluptatum ipsum iste alias at adipisci accusantium, illo consequatur nostrum doloremque!",
    },
  ];
  return (
    <div className="mt-[5rem] px-[0.5rem] md:px-[3rem] ">
      <h1 className="text-center text-[2rem] md:text-[3rem] overflow-x-hidden text-[#3D73B3] font-bold">
        Frequently Asked questions
      </h1>
      <div className="w-full mt-[1rem]">
        {questions.map((quest) => {
          return (
            <div key={quest.id} className="w-full md:w-[57%] mx-auto mt-[1rem]">
              <p className="flex justify-between font-semibold text-[1rem] md:text-[1.5rem] shadow-md shadow-[#000] items-center border-b-[2px] border-b-[#000] px-[1rem] py-[0.5rem]">
                {quest.question}
                <IoIosArrowDown />
              </p>
              <p className="mt-[1rem] hidden text-[0.8rem] md:text-[1rem]">{quest.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
