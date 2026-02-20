import React from "react";

const NoteFromFaisal = () => {
  return (
    <section id="about" className="py-20 bg-mutedPurple">
      <div className="container mx-auto px-6">
        <div className="block grid-cols-1 md:flex items-center gap-10">
          <div className="w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] mb-8 md:mb-0 mx-auto bg-white rounded-[50%] flex-shrink-0 border-4 border-purple"></div>
          <div>
            <span className="eyebrow bg-white text-purple">
              A Note from Faisal
            </span>
            <h3 className="mt-4 text-primary text-4xl">
              &quot;Humans Ignore Robots.&quot;
            </h3>

            <p className="italic text-[#333]">
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
