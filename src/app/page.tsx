import Link from "next/link";
import FormImageCard from '../components/formimagecard';
import QuoteForm from "~/components/QuoteForm";

export default function HomePage() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen items-center justify-center text-white">
      <FormImageCard imageSrc="/aluminumcool.jpg" heading="Aluminum Glass" subheading="We specialize in the distribution of high-quality aluminum and glass products for residential and commercial applications. Our focus on integrity delivers reliable service, end-user satisfaction, and strong partnerships.
Offering durable aluminum sheets, plates, tubes, custom fabrications, architectural hardware, seals, tools, and machinery. We provide competitive pricing, prompt delivery, and customization for doors, windows, and panels.
Diversify your supply chain to mitigate risks from market fluctuations. Contact us for details." />
    <QuoteForm />
    </main>
  );
}
