import dynamic from "next/dynamic";

const CalendlyForm = dynamic(() => import("../contact/CalendlyForm"), {
    ssr: false
});

export default function Home() {
  return (
    <div>
        <CalendlyForm />
    </div>
  );
}