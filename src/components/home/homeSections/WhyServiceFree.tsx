const WhyServiceFree = () => {
  return (
    <section id="roi" className="py-20 bg-mutedGreen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-8">
          <div>
            <span className="eyebrow bg-white text-green">
              The Business Case
            </span>
            <h2 className="!text-left text-primary">
              Why This Service is <span className="text-green">Free.</span>
            </h2>
            <p className="text-[#334155]">
              Most agencies cost you money. We make you money. [cite_start]If
              you sell a high-ticket service ($5k+ LTV), you only need one
              closed deal to cover our entire setup[cite: 124, 211].
            </p>
            <p className="text-[#334155]">
              We don&apos;t focus on &quot;Open Rates.&quot; [cite_start]We
              focus on the only metric that matters:{" "}
              <strong>Cash Collected</strong>[cite: 38, 86].
            </p>
          </div>
          <div className="bg-white p-7 rounded-xl border-2 border-green text-sm md:text-base">
            <div className="flex justify-between py-3 border-b border-dashed border-[#cbd5e1] font-bold">
              <span>Avg. Client LTV</span>
              <strong>$10,000</strong>
            </div>
            <div className="flex justify-between py-3 border-b border-dashed border-[#cbd5e1] font-bold">
              <span>Hashtag Faisal Cost</span>
              <strong className="text-[#ef4444]">-$1,500</strong>
            </div>
            <div className="flex justify-between py-3 border-b border-dashed border-[#cbd5e1] font-bold">
              <span>Closes Per Month (Conservative)</span>
              <strong className="flex items-center gap-1">
                <span>X </span> <span>2</span>
              </strong>
            </div>
            <div className="flex justify-between font-extrabold text-xl md:text-3xl my-4 text-green tracking-tight">
              <span>Net Profit</span>
              <span>$18,500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyServiceFree;
