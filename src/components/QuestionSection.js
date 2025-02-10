"use client"
import AOS from "aos";
import { useEffect } from "react";

export default function QuestionSection({question, answer}) {
  useEffect(() => {
      AOS.init();
  }, [])
  return (
    <details data-aos="fade-up" className="border border-red-200 rounded-md">
      <summary className="flex 2xl:text-xl font-light py-4 cursor-pointer hover:bg-red-50 items-center px-4 focus:bg-red-200 rounded-md">
        {question}
        <div className="ml-auto p-1 rounded-full bg-red-400">
          <svg className="fill-current opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
      </summary>
      <div className="px-6 py-3 rounded-md 2xl:text-lg">{answer}</div>
    </details>
  )
}