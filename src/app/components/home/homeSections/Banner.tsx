const Banner = () => {
  return (
    <section className="container mx-auto px-6 flex justify-center items-center min-h-screen py-20">
      <div className="text-center">
        <span className="eyebrow bg-white text-purple border-2 border-purple">
          The Humanoid Email Marketer
        </span>
        <h1>
          Get Qualified Sales Calls.
          <br /> <span className="text-purple">Pay Only When They Show.</span>
        </h1>
        <p className="max-w-[800px] mx-auto mb-[30px]">
          Short emails &rarr; Real conversations &rarr; Qualified meetings. No
          spam. No templates. [cite_start]No nonsense[cite: 1]. [cite_start]I
          combine human tone with AI precision to build respectful, predictable
          outbound systems[cite: 2].
        </p>
        <div>
          <a href="#contact" className="btn">
            Get Your Outreach Plan
          </a>
          <a href="#system" className="btn-secondary btn ml-[10px]">
            See The System
          </a>
        </div>
        <p className="mt-[25px] text-sm  md:text-base text-muted">
          Trusted by <span className="text-blue">Agencies</span>,{" "}
          <span className="text-green">SaaS</span> &{" "}
          <span className="text-purple">Consultants</span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
