import PrimaryButton from "../common/PrimaryButton";

const HowItWorks = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-[80px] text-center animate-fadeInUp">
          <span className="eyebrow bg-white text-purple border-2 border-purple">
            The 10-Step Implementation
          </span>

          <h1 className="">
            Stop Working For Your Leads.
            <br />
            <span className="text-purple">Make Your Leads Work For You.</span>
          </h1>

          <p className=" mt-5 max-w-[800px] mx-auto">
            Most people have a &quot;Hope and Pray&quot; model. We have a
            machine. <br /> This is exactly how we build it, one step at a time.
          </p>
        </div>

        <div className="machine-list">
          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp blue-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-blue z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-blue
          hover:bg-mutedBlue
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-blue mb-2">
                Architecture
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                Technical Moating
              </h3>

              <p className="text-[1.1rem] text-muted">
                If you use your primary domain for outbound, you’re gambling
                with your business. We build secondary infrastructure so your
                main reputation stays bulletproof. No risk, all upside.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-purple z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-purple
          hover:bg-mutedPurple
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-purple mb-2">
                Trust Building
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                The Technical Handshake
              </h3>

              <p className="text-[1.1rem] text-muted">
                Servers are like people; they don&apos;t trust strangers. we run
                a 14-day handshake protocol to &quot;warm up&quot; your domains.
                We earn our way into the primary inbox.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-green z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-green
          hover:bg-mutedPurple
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-green mb-2">
                Targeting
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                ICP Surgery
              </h3>

              <p className="text-[1.1rem] text-muted">
                If you sell to &quot;everyone,&quot; you’re broke. We slice your
                market with surgical clarity. If we can&apos;t describe their
                pain better than they can, we don&apos;t send a single email.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-orange z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-orange
          hover:bg-mutedOrange
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-orange mb-2">
                Psychology
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                Angle Mapping
              </h3>

              <p className="text-[1.1rem] text-muted">
                We find the emotional arbitrage. Why now? Why you? We don&apos;t
                sell your product’s features; we sell the relief of their
                biggest current headache.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-blue z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-blue
          hover:bg-mutedPurple
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-blue mb-2">
                Copywriting
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                The Humanoid Draft
              </h3>

              <p className="text-[1.1rem] text-muted">
                Templates die in the trash. We write 5-8 message sequences that
                sound like a friend reaching out to help. AI provides the draft;
                humans provide the soul.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-purple z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-purple
          hover:bg-mutedPurple
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-purple mb-2">
                Automation
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                Systems Integration
              </h3>

              <p className="text-[1.1rem] text-muted">
                If the leads leak, the money dies. We wire your CRM and
                behavioral triggers to ensure every reply is handled instantly
                and predictably. No lead left behind.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-green z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-green
          hover:bg-mutedGreen
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-green mb-2">
                Testing
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                The 500 Signal Test
              </h3>

              <p className="text-[1.1rem] text-muted">
                We launch a pilot batch to 500 prospects. We aren&apos;t looking
                for a &quot;Grand Slam&quot; yet—we are looking for
                &quot;Signal.&quot; If they don&apos;t care about the hook, we
                pivot in 48 hours.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-orange z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-orange
          hover:bg-mutedOrange
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-orange mb-2">
                Optimization
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                Brutal Diagnosis
              </h3>

              <p className="text-[1.1rem] text-muted">
                We look at the &quot;No&apos;s.&quot; We analyze why people
                aren&apos;t replying and refine the list. We let the data tell
                us exactly what the market wants, then we give it to them.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-purple z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-purple
          hover:bg-mutedPurple
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-purple mb-2">
                Concierge
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                The Inbox Wingman
              </h3>

              <p className="text-[1.1rem] text-muted">
                Replies are where the money is. We handle the follow-ups and
                objection handling. You only step in when the prospect is ready
                to book. Leverage your time.
              </p>
            </div>
          </div>

          <div className="step-block relative mb-10 opacity-0 animate-fadeInUp purple-step">
            <div className="step-dot absolute -left-[54px] top-[5px] w-[28px] h-[28px] rounded-full bg-white border-[4px] border-green z-[2]"></div>

            <div
              className="p-10 rounded-[32px] bg-white border border-[#f1f5f9]
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]
          transition-all duration-300
          hover:translate-x-[15px]
          hover:border-l-[10px] hover:border-green
          hover:bg-mutedGreen
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="block text-[0.85rem] font-extrabold uppercase text-green mb-2">
                Scaling
              </span>

              <h3 className="text-[1.85rem] font-extrabold mb-3">
                Pouring Fuel on the Fire
              </h3>

              <p className="text-[1.1rem] text-muted">
                Once we have proof of resonance, we scale from 500 to 5,000
                sends. This is how you win the game of ownership—by owning a
                machine that produces results without you.
              </p>
            </div>
          </div>
        </div>

        <div className="hard-sell-gradient-border mt-20 py-20 px-4 md:px-10 lg:px-20 rounded-[60px] text-center animate-fadeInUp">
          <span className="eyebrow mt-4 text-orange bg-mutedOrange px-4">
            The Final Decision
          </span>

          <h3 className="px-2">One choice. Two outcomes.</h3>

          <p className="px-2">
            Success in business isn&apos;t about working harder...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4">
            <div className="py-8 px-4 md:p-10 rounded-[40px] text-left bg-[#f8fafc] border border-[#e2e8f0] space-y-2 md:space-y-4">
              <span className="text-[0.85rem] font-extrabold text-[#94a3b8]">
                PATH A: THE GRIND
              </span>

              <h4>Keep guessing.</h4>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start text-">
                  <span className="text-red-500">✕ </span> Manual outreach 20+
                  hrs/week.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500">✕ </span> Burning your domain
                  reputation.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500">✕ </span> Inconsistent,
                  &quot;unpredictable&quot; pipeline.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-red-500">✕</span> Competing on price
                  with robots.
                </li>
              </ul>

              <p className="font-extrabold text-[#64748b]">
                Cost: Your time + Your sanity.
              </p>
            </div>

            <div className="py-8 px-4 md:p-10 rounded-[40px] text-left bg-mutedPurple border-[3px] border-purple shadow-[0_30px_60px_-15px_rgba(169,117,255,0.2)] space-y-2 md:space-y-4">
              <span className="text-[0.85rem] font-extrabold text-purple">
                PATH B: THE MACHINE
              </span>

              <h4>Build the system</h4>

              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-green">✓</span> 10-step humanoid
                  infrastructure.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green">✓</span> Predictable meetings on
                  autopilot.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green">✓</span> Strategic dominance in
                  your niche.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green">✓</span> Absolute time freedom as
                  an owner.
                </li>
              </ul>

              <p className="font-extrabold text-purple">
                Result: Unfair market leverage.
              </p>
            </div>
          </div>

          <div className="bg-primary text-white py-10 px-4 md:px-10 rounded-[48px] mt-10 text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full font-extrabold text-[0.85rem] uppercase mb-5">
              The Logic
            </span>

            <h2 className="text-white">Stop Paying the Tax.</h2>

            <p className="opacity-80 max-w-[700px] mx-auto">
              If you’re missing just 1 deal a month...
            </p>

            <div className="md:text-[2.2rem] font-extrabold text-green my-8">
              You are paying a $60,000/year Incompetence Tax.
            </div>
            {/* 
            <a
              href="#contact"
              className="inline-block bg-purple text-white md:px-16 py-6 rounded-[20px]
                  font-extrabold text-[1.5rem]
                  shadow-[0_20px_40px_rgba(169,117,255,0.4)]
                  animate-pulseGlow
                  transition-all duration-300
                  hover:-translate-y-2 hover:scale-105 hover:brightness-110"
            >
              Build My Machine Now
            </a> */}
            <PrimaryButton />
            <div className="mt-[50px] opacity-50 text-[1rem] italic">
              I stole that &quot;incompetence tax&quot; thing from The Mighty
              ALEX Hormozi by the way :D
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
