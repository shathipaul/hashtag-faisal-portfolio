const WhyHumanoidOutreach = () => {
  return (
    <section className="py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedPurple text-purple">
            The Paradigm
          </span>
          <h2>
            Why <span className="text-green">Humanoid</span> Outreach?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="bg-white p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-purple">
            <h3 className="text-purple">Half-Machine</h3>

            <p>
              We use AI for backend efficiency, data analysis, and structural
              drafting.
            </p>
          </div>
          <div className="bg-white p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-orange">
            <h3 className="text-orange">Half-Human</h3>

            <p>
              Every message is human-polished to ensure tone, empathy, and
              nuance.
            </p>
          </div>
          <div className="bg-white p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-blue">
            <h3 className="text-blue">Fully Accountable</h3>

            <p>
              A real person owns every send, ensuring respectful, compliant
              outreach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHumanoidOutreach;
