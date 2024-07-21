"use client";

import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

const CalendlyForm = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next"));
    }
  }, []);

  return (
    <article className="fixed bottom-5 right-5 bg-brown rounded-full z-[2]">
      <div className="sticky button-div">
        <PopupButton
          className="py-2 px-6 xl:py-3 xl:px-8 font-semibold rounded-full italic text-md xl:text-lg shadow-2xl text-white ease-in-out duration-500 hover:bg-black"
          url="https://calendly.com/ajgeiger311"
          rootElement={rootElement!}
          text="Schedule Appointment"
        />
      </div>
    </article>
  );
}

export default CalendlyForm;