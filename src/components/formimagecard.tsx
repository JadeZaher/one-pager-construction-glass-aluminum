import Image from 'next/image';
import QuoteForm from './QuoteForm';

interface FormImageCardProps {
  imageSrc: string;
  heading: string;
  subheading: string;
}

export default function FormImageCard({ imageSrc, heading, subheading }: FormImageCardProps) {
  return (
    <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden shadow-lg">
          <div className=" p-3 lg:p-5  z-20 h-[50vh] max-h-[50vh] text-white bg-black">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 mt-[2rem]">{heading}</h1>
            <h2 className="text-sm lg:text-base mb-0 mr-[5%] lg:mr-[15%] leading-6 lg:leading-8 mt-[5%]">{subheading}</h2>
          </div>
        <div className="relative lg:h-full h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10 " />
          <Image
            src={imageSrc}
            alt="Card image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
    </div>
  );
}
