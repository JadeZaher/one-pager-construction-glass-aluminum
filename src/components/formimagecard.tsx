import Image from 'next/image';
import QuoteForm from './QuoteForm';

interface FormImageCardProps {
  imageSrc: string;
  heading: string;
  subheading: string;
}

export default function FormImageCard({ imageSrc, heading, subheading }: FormImageCardProps) {
  return (
    <div className="relative w-1/2 h-screen overflow-hidden shadow-lg">
        {/* Left side - Image with overlay */}
        <div className="relative h-full">
          <Image
            src={imageSrc}
            alt="Card image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10 " />
          <div className="absolute p-5 pb-20 z-20 min-h-1/2 max-h-1/2 text-white bg-black">
            <h1 className="text-4xl font-bold mb-2">{heading}</h1>
            <h2 className=" mb-0 mx-auto leading-8 mt-[10%]">{subheading}</h2>
          </div>
        </div>
        
    </div>
  );
}
