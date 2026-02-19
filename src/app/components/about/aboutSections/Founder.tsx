import Image from "next/image";
import faisal from "@/assets/about/IMG_20260131_044826.jpg";

const FounderSection = () => {
  return (
    <section className="container mx-auto py-20" id="founder">
      <span
        className="block text-2xl font-extrabold uppercase 
                   text-purple text-center mb-5"
      >
        FOUNDER & OPERATOR
      </span>
      {/* <div
        className="grid grid-cols-1 lg:grid-cols-[450px_1fr] 
            gap-[80px] items-start"
        id="founder"
      >
        <div
          className="sticky top-[40px] relative 
              bg-mutedBlue 
              rounded-[48px] 
              aspect-[1/1.2] 
              flex items-center justify-center 
              border border-blue 
              overflow-hidden 
              shadow-[0_50px_110px_rgba(7,16,34,0.12)]"
        >
          <div
            className="absolute bottom-[30px] right-[30px] 
                bg-green text-primary 
                px-6 py-3 
                font-black text-[1rem] 
                rounded-[12px] 
                shadow-[0_10px_30px_rgba(140,217,163,0.4)]"
          >
            $100K+ EARNED
          </div>

          <div className="font-black text-blue opacity-20 text-[4rem] text-center leading-tight">
            FOUNDER
            <br />
            PHOTO
          </div>
        </div>

        <div className="text-left">
         

          <h2
            className="text-[3.5rem] text-start font-black 
               tracking-[-0.05em] 
               mb-[10px]"
          >
            MD. Faisal Ahmed
          </h2>

          <p
            className="text-[1.25rem] text-primary 
              font-semibold 
              mb-[30px] 
              leading-[1.6]"
          >
            I spent 5 years in the trenches, working with 100+ B2B clients to
            figure out one simple thing:
            <strong>Outreach is only hard when you&apos;re lazy.</strong>
          </p>

          <p className="text-muted font-medium mb-[40px]">
            I started as a freelancer on Upwork, hitting $100K+ in earnings by
            strictly ignoring vanity metrics like &quot;Open Rates&quot; and
            obsessing over <strong>Booked Calls.</strong> I realized that SaaS
            founders and Agency owners don&apos;t need more marketing guys—they
            need a System Architect to build their meeting machine.
          </p>

          <div className="grid gap-[15px]">
            <div
              className="p-[25px] rounded-[24px] 
                  bg-white border border-slate-200 
                  transition-all duration-300 
                  hover:translate-x-[10px] 
                  hover:border-purple 
                  hover:bg-mutedPurple"
            >
              <b className="block text-[1.1rem] font-black mb-[5px]">
                The $100K+ Threshold
              </b>
              <span className="text-[1rem] text-muted font-bold">
                I&apos;ve built real pipelines for 100+ clients. No theory. No
                screenshots. Just real revenue evidence.
              </span>
            </div>

            <div
              className="p-[25px] rounded-[24px] 
                  bg-white border border-slate-200 
                  transition-all duration-300 
                  hover:translate-x-[10px] 
                  hover:border-purple 
                  hover:bg-mutedPurple"
            >
              <b className="block text-[1.1rem] font-black mb-[5px]">
                The Anti-Freelancer Bias
              </b>
              <span className="text-[1rem] text-muted font-bold">
                Freelancing pays, but it doesn&apos;t scale. I built Hashtag
                Faisal to provide the asset I wish I had: a machine that runs
                without babysitting.
              </span>
            </div>

            <div
              className="p-[25px] rounded-[24px] 
                  bg-white border border-slate-200 
                  transition-all duration-300 
                  hover:translate-x-[10px] 
                  hover:border-purple 
                  hover:bg-mutedPurple"
            >
              <b className="block text-[1.1rem] font-black mb-[5px]">
                Operator Over Marketer
              </b>
              <span className="text-[1rem] text-muted font-bold">
                I care more about your ROI than your feelings. If your offer is
                weak, I&apos;ll tell you. Truth is the only path to scale.
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid lg:grid-cols-2 gap-[80px] items-center">
        <div
          className="relative bg-mutedBlue border-blue rounded-[30px] 
                p-[20px] flex items-center justify-center 
                text-center overflow-hidden"
        >
          <div className="w-full h-full object-cover">
            <Image
              src={faisal}
              alt=""
              placeholder="blur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[3rem] text-start font-black tracking-[-0.04em] mb-6">
            MD. Faisal Ahmed
          </h2>

          <p className="text-[1.1rem] text-muted leading-[1.8] font-medium mb-12">
            I didn’t start HashtagFaisal because I thought the world needed
            another marketing agency. I started it because I saw SaaS founders
            and agency owners getting burned by &quot;volume-first&quot; systems
            that destroyed their reputations.
            <br />
            <br />I spent 5 years in the trenches, working with over 100 clients
            and earning $100K+ on Upwork by strictly following one rule:
            <strong>If it’s not relevant, don’t send it.</strong>
            <br />
            <br />
            Today, I build &quot;Humanoid&quot; systems. Half machine for
            analytical rigor, half human for emotional resonance. That is the
            only way to win in a a post-AI world.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div
              className="bg-white border border-slate-200 
                    rounded-[20px] p-6 text-center 
                    shadow-sm"
            >
              <span className="block text-[2rem] font-black text-purple">
                $100K+
              </span>
              <p className="text-muted font-medium mt-2">Total Revenue Proof</p>
            </div>

            <div
              className="bg-white border border-slate-200 
                    rounded-[20px] p-6 text-center 
                    shadow-sm"
            >
              <span className="block text-[2rem] font-black text-green">
                100+
              </span>
              <p className="text-muted font-medium mt-2">Successful Clients</p>
            </div>

            <div
              className="bg-white border border-slate-200 
                    rounded-[20px] p-6 text-center 
                    shadow-sm"
            >
              <span className="block text-[2rem] font-black text-orange">
                99%
              </span>
              <p className="text-muted font-medium mt-2">
                Inbox Deliverability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
