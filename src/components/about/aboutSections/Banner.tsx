const BannerSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container px-6 text-center">
        <span className="eyebrow text-purple bg-mutedPurple">
          Hashtag Faisal Manifesto
        </span>

        <h1 className="animate-fadeInUp">
          Marketing is Noise.
          <br />
          <span className="text-purple">Leverage is Quiet.</span>
        </h1>

        <p
          className=" 
              animate-fadeInUp"
        >
          Agencies sell retainers. I sell booked meetings. <br /> No long-term
          contracts, no retainers. Just human outreach that gets qualified
          meetings on your calendar.
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
