import Link from "next/link";
import FormImageCard from '../components/formimagecard';
import QuoteForm from "~/components/QuoteForm";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center  text-white">
      <FormImageCard imageSrc="/aluminumcool.jpg" heading="Aluminum Glass" subheading="As a leading innovator in glass and aluminum supply, we distribute high-quality products for residential and commercial projects 
. Our commitment to integrity ensures top-tier distribution and service, focusing on end-user satisfaction and building beneficial partnerships.
Stock up on durable aluminum sheets, plates, tubes, and custom solutions, along with architectural hardware, seals, tools, and machinery 
. Diversify your sources with us to minimize risks from price volatility or shortages.
Competitive wholesale pricing, fast delivery, and customizable options for doors, windows, and panels. Elevate your builds—contact us today for exclusive deals!" />
    <QuoteForm />
    </main>
  );
}
