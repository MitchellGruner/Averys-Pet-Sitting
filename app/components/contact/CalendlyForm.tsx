"use client";

import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

import Image from "next/image";

const CalendlyForm = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next"));
    }


  }, []);

  return (
    <div id="contactForm" className="fixed bottom-5 right-5 bg-light-brown rounded-full">
      <div className="button-div">
        <PopupButton
          className="sticky py-2 px-6 xl:py-3 xl:px-8 font-semibold rounded-full italic text-md xl:text-lg shadow-2xl text-white ease-in-out duration-500 hover:bg-black"
          url="https://calendly.com/mit-gruner"
          rootElement={rootElement!}
          text="Schedule Appointment"
        />
        <Image
            src="/calendar.icon.png"
            width={50}
            height={50}
            alt="Calendar Icon"
        />
      </div>
      {/* <div className="button-div-absolute bg-white rounded-full absolute bottom-[-0.2em] right-1 py-3 px-28"></div> */}
    </div>
  );
}

export default CalendlyForm;