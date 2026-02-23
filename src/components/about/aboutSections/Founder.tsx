import Image from "next/image";
import faisal from "@/assets/about/IMG_20260131_044826.jpg";

const FounderSection = () => {
  return (
    <section className="container mx-auto px-6 py-10 md:py-20" id="founder">
      <span
        className="block text-xl md:text-2xl font-extrabold uppercase 
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

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div
          className="relative bg-mutedBlue border-blue rounded-[30px] 
                p-[20px] flex items-center justify-center 
                text-center overflow-hidden"
        >
          <div className="w-full lg:max-h-[600px] h-full object-cover">
            <Image
              src={faisal}
              alt=""
              placeholder="blur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className=" mb-6">Faisal Ahmed</h2>

          <p className="mb-12">
            I spent 5 years in the trenches, working with over 100 clients and
            earning $100K+ on Upwork by strictly following one rule:
            <strong>If it’s not relevant, don’t send it.</strong>
            <br />
            <br />
            Over the last 5 years, I&apos;ve worked with 100+ clients and earned
            $400K+ (as a freelancer) on Upwork and Fiverr by following one
            simple rule: If it doesn&apos;t sound like a person, don&apos;t sent
            it, just don&apos;t!
            <br />
            <br />
            In 2025, I left freelancing, and started{" "}
            <span className="font-bold">HashtagFaisal</span> using my decade of
            experience.
            <br /> <br />I didn’t start this to be just another agency. I
            started it because I watched lazy &apos;AI automation&apos; destroy
            the reputations of good companies.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div
              className="bg-white border border-slate-200 
                    rounded-[20px] p-6 text-center 
                    shadow-sm"
            >
              <span className="block text-[2rem] font-black text-purple">
                $1.7M+
              </span>
              <p className="text-muted font-medium mt-2">
                Total Revenue Generated
              </p>
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
