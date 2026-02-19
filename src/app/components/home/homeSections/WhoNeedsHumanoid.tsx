const WhoNeedsHumanoid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedBlue text-blue">
            Ideal Client Profile
          </span>

          <h2>Who Needs a Humanoid?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="p-6 rounded-xl  bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h3 className="text-blue">Marketing Agencies</h3>
            [cite_start]
            <p>
              I handle polite follow-ups your clients will actually be proud
              of[cite: 10].
            </p>
          </div>
          <div className="p-6 rounded-xl  bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h3 className="text-blue">SaaS Teams</h3>
            [cite_start]
            <p>
              Emails that lead to demos—without &quot;personalized at
              scale&quot; tools that sound like robots[cite: 12, 13].
            </p>
          </div>
          <div className="p-6 rounded-xl  bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h3 className="text-blue">Consultants</h3>
            [cite_start]
            <p>
              Relationship-first outreach that feels classy, not desperate[cite:
              14, 116].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsHumanoid;
