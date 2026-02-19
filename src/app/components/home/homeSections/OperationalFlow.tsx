const OperationalFlow = () => {
  return (
    <section id="system" className="py-20">
      <div className="container max-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedGreen text-green">The System</span>
          <h2>Operational Flow</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="p-6 rounded-xl bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h4 className="text-green">01. Kickoff Call</h4>
            [cite_start]
            <p>
              Defining ICP clarity and mapping angles for best-fit buyers[cite:
              5, 160].
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h4 className="text-green">02. Tech Setup</h4>
            [cite_start]
            <p>
              Domain setup, warm-up, and spam-safety records (SPF, DKIM,
              DMARC)[cite: 6, 146].
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border-2 border-[#f1f5f9] hover:border-blue hover:bg-mutedBlue transition-all duration-500">
            <h4 className="text-green">03. The 10-Day Signal</h4>
            <p>
              Give me one ICP and 10 days. If the signal isn&apos;t clear, we
              stop. [cite_start]No drama[cite: 8, 132].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalFlow;
