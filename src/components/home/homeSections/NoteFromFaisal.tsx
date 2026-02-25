import Image from "next/image";
import img from "@/assets/about/real01.png";

const NoteFromFaisal = () => {
  return (
    <section id="about" className="py-12 md:py-16 xl:py-20 bg-mutedPurple">
      <div className="container mx-auto px-6">
        <div className="block grid-cols-1 md:flex items-center gap-10">
          <div
            className="w-[160px] lg:w-[200px] h-[160px] lg:h-[200px] mb-8 md:mb-0 mx-auto 
           rounded-[50%] flex-shrink-0 border-4 border-purple overflow-hidden"
          >
            <Image src={img} alt="" />
          </div>
          <div className="text-center md:text-start">
            <span className="eyebrow bg-white text-purple">
              A Note from Faisal
            </span>
            <h3 className="mb-4 text-primary text-3xl md:text-4xl">
              &quot;Humans Ignore Robots.&quot;
            </h3>

            <p className="italic text-primary">
              &quot;The Brands that win will be the ones that sound alive. I run
              lean, think deeply about your buyers, and treat every send like
              it’s from a real person. Because they are.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteFromFaisal;
