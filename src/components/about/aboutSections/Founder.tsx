import Image from "next/image";
import faisal from "@/assets/about/faisal.png";

const FounderSection = () => {
  return (
    <section className="container px-6 py-10 mx-auto md:py-20" id="founder">
      <span className="block mb-5 text-xl font-extrabold text-center uppercase md:text-2xl text-purple">
        FOUNDER & OPERATOR
      </span>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div
          className="relative bg-mutedBlue border-blue rounded-[30px] 
                p-[20px] flex items-center justify-center 
                text-center overflow-hidden w-full md:w-2/3 lg:w-full lg:max-h-[600px] h-full object-cover mx-auto"
        >
          <Image
            src={faisal}
            alt=""
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h2 className="mb-6 ">Faisal Ahmed</h2>

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

          <div className="grid gap-6 sm:grid-cols-3">
            <div
              className="bg-white border border-slate-200 
                    rounded-[20px] p-6 text-center 
                    shadow-sm"
            >
              <span className="block text-[2rem] font-black text-purple">
                $1.7M+
              </span>
              <p className="mt-2 text-sm font-medium text-muted xl:text-lg">
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
              <p className="mt-2 text-sm font-medium text-muted xl:text-lg">
                Successful Clients
              </p>
            </div>

            <div
              className="bg-white border border-slate-200 
                    rounded-[20px] p-6 text-center 
                    shadow-sm"
            >
              <span className="block text-[2rem] font-black text-orange">
                99%
              </span>
              <p className="mt-2 text-sm font-medium text-muted xl:text-lg">
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
