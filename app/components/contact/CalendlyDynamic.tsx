import dynamic from "next/dynamic";

const CalendlyForm = dynamic(() => import("./CalendlyForm"), {
    ssr: false
});

export default function Home() {
  return (
    <div>
        <CalendlyForm />
    </div>
  );
}