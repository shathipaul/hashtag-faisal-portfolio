const TransparentAligned = () => {
  return (
    <section id="services" className="py-12 md:py-16 xl:py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedOrange text-orange">Pricing</span>
          <h2>Transparent & Aligned</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="bg-mutedOrange p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-orange">
            <span className="text-[2rem] mb-3 block">🚀</span>
            <h3 className="text-orange">Campaign Setup</h3>
            <p>We build a complete system for one ICP.</p>
            <div className="text-[2.5rem] font-bold my-3 text-primary -tracking-[1px]">
              $1,500{" "}
              <span className="text-base font-semibold text-muted opacity-85">
                / One-time
              </span>
            </div>
            <ul className="list-none text-muted mb-6">
              <li>
                ✓ <strong>ICP Strategy</strong> & Testing
              </li>

              <li>
                ✓ <strong>Domain Warm-up</strong>
              </li>

              <li>
                ✓ <strong>5-8 Humanoid</strong> Emails
              </li>
            </ul>
          </div>

          <div className="bg-mutedGreen/10 p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-green">
            <span className="text-[2rem] mb-3 block">💸</span>
            <h3 className="text-green">Pay-Per-Meeting</h3>

            <p>Only pay for qualified meetings we book.</p>
            <div className="text-[2.5rem] font-bold my-3 text-primary -tracking-[1px]">
              $250{" "}
              <span className="text-base font-semibold text-muted opacity-85">
                / Meeting
              </span>
            </div>
            <ul className="list-none text-muted mb-6">
              <li>
                ✓ <strong>Upfront</strong> Qualification
              </li>

              <li>
                ✓ <strong>Quality</strong> over Volume
              </li>
              <li>✓ 10% Revenue Share</li>
            </ul>
          </div>

          <div className="bg-mutedPurple p-7 rounded-xl transition-all duration-500 hover:-translate-y-1 border-t-8 border-purple">
            <span className="text-[2rem] mb-3 block">🤝</span>
            <h3 className="text-purple">Follow-Up Sub</h3>

            <p>Already have a setup? Our follow-ups could help.</p>
            <div className="text-[2.5rem] font-bold my-3 text-primary -tracking-[1px]">
              $250{" "}
              <span className="text-base font-semibold text-muted opacity-85">
                / Month
              </span>
            </div>
            <ul className="list-none text-muted mb-6">
              <li>
                ✓ Up to <strong>500 Follow-ups</strong>
              </li>

              <li>
                ✓ <strong>Inbox Wingman</strong> model
              </li>
              <li>✓ Month-to-month flexibility </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentAligned;
