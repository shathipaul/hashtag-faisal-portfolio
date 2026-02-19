const BannerSection = () => {
  return (
    <section className="py-20">
      <div className="container px-6 text-center">
        <span
          className="inline-block px-5 py-[10px] bg-mutedPurple text-purple 
                 rounded-full font-extrabold text-[0.9rem] 
                 tracking-[0.15em] uppercase mb-[30px]"
        >
          Hashtag Faisal Manifesto
        </span>

        <h1
          className="text-[5.5rem] max-[900px]:text-[3rem] 
               font-black tracking-[-0.06em] leading-[0.95] 
               animate-fadeInUp"
        >
          Marketing is Noise.
          <br />
          <span className="text-purple">Leverage is Quiet.</span>
        </h1>

        <p
          className="text-[1.6rem] text-muted mt-[40px] 
              max-w-[850px] mx-auto font-bold 
              animate-fadeInUp"
        >
          Most agencies want your retainer. I want your results. We aren&apos;t
          here to send emails; we are here to engineer high-ticket conversations
          that scale your freedom.
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
