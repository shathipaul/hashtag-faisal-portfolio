const TransparentAligned = () => {
  return (
    <section id="services" className="py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedOrange text-orange">Pricing</span>
          <h2>Transparent & Aligned</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="bg-white p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-orange">
            <span className="text-[2rem] mb-3 block">🚀</span>
            <h3 className="text-orange">Campaign Setup</h3>
            [cite_start]<p>Complete system built for one ICP[cite: 24].</p>
            <div className="text-[2.5rem] font-bold my-3 text-primary -tracking-[1px]">
              $1,500{" "}
              <span className="text-base font-semibold text-muted opacity-85">
                / One-time
              </span>
            </div>
            <ul className="list-none text-muted mb-6">
              [cite_start]
              <li>
                ✓ <strong>ICP Strategy</strong> & Testing [cite: 25]
              </li>
              [cite_start]
              <li>
                ✓ <strong>Domain Warm-up</strong> [cite: 25]
              </li>
              [cite_start]
              <li>
                ✓ <strong>5-8 Humanoid</strong> Emails [cite: 5]
              </li>
            </ul>
          </div>

          <div className="bg-mutedGreen/10 p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-green">
            <span className="text-[2rem] mb-3 block">💸</span>
            <h3 className="text-green">Pay-Per-Meeting</h3>
            [cite_start]
            <p>Only pay for qualified meetings we book[cite: 26].</p>
            <div className="text-[2.5rem] font-bold my-3 text-primary -tracking-[1px]">
              $250{" "}
              <span className="text-base font-semibold text-muted opacity-85">
                / Meeting
              </span>
            </div>
            <ul className="list-none text-muted mb-6">
              [cite_start]
              <li>
                ✓ <strong>Upfront</strong> Qualification [cite: 27]
              </li>
              [cite_start]
              <li>
                ✓ <strong>Quality</strong> over Volume [cite: 27]
              </li>
              [cite_start]<li>✓ 10% Revenue Share [cite: 26]</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-purple">
            <span className="text-[2rem] mb-3 block">🤝</span>
            <h3 className="text-purple">Follow-Up Sub</h3>
            [cite_start]
            <p>
              Human-polished nudges to keep conversations alive[cite: 151, 152].
            </p>
            <div className="text-[2.5rem] font-bold my-3 text-primary -tracking-[1px]">
              $250{" "}
              <span className="text-base font-semibold text-muted opacity-85">
                / Month
              </span>
            </div>
            <ul className="list-none text-muted mb-6">
              [cite_start]
              <li>
                ✓ Up to <strong>500 Follow-ups</strong> [cite: 29]
              </li>
              [cite_start]
              <li>
                ✓ <strong>Inbox Wingman</strong> model [cite: 42]
              </li>
              [cite_start]<li>✓ Month-to-month flexibility [cite: 142]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentAligned;
