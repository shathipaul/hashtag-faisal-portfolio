const WhoNeedsHumanoid = () => {
  return (
    <section className="py-20 bg-mutedGreen">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedBlue text-blue">
            Ideal Client Profile
          </span>

          <h2>
            Who Needs a <span className="text-green">Humanoid</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="p-6 rounded-xl  bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h3 className="text-blue">Financial Advisors</h3>
            <p>
              Fear looking &quot;tacky&quot;? We use a classy,
              relationship-first tone that builds trust.
            </p>
          </div>

          <div className="p-6 rounded-xl  bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h3 className="text-blue">SaaS Founders</h3>

            <p>
              Stop burning leads with robotic AI tools. Get product-aware
              messaging that converts.
            </p>
          </div>
          <div className="p-6 rounded-xl  bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h3 className="text-blue">Marketing Agencies</h3>
            <p>
              Suffering from &quot;Cobbler&apos;s Children&quot; syndrome? I am
              your white-label wingman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsHumanoid;
