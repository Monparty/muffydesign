"use client"
import AOS from "aos";
import { useEffect } from "react";

export default function QuestionSection({question, answer}) {
  useEffect(() => {
      AOS.init();
  }, [])
  return (
    <details data-aos="fade-up" className="border border-red-600 rounded-md">
      <summary className="flex py-4 cursor-pointer hover:bg-red-50 font-medium items-center px-4 focus:bg-red-100 rounded-md">
        {question}
        <button className="ml-auto">
          <svg className="fill-current opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </button>
      </summary>
      <div className="px-6 py-3 rounded-md">{answer}</div>
    </details>
  )
}