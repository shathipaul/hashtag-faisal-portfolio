import { bitcountGridDouble } from "@/app/layout";
import PrimaryButton from "@/components/common/PrimaryButton";

const Banner = () => {
  return (
    <section className="lg:max-h-[90vh] flex items-center justify-center px-4 py-10 mx-auto text-center md:py-20">
      <div className="text-center animate-fadeInUp">
        <span className="bg-white border-2 eyebrow text-purple border-purple">
          The Humanoid Email Marketer
        </span>
        <h1>
          Get Qualified Sales{" "}
          <span
            className={`${bitcountGridDouble.className} uppercase bg-gradient-to-r from-blue via-green to-orange inline-block text-transparent bg-clip-text`}
          >
            Meetings.
          </span>
          <br />{" "}
          <span className="text-purple">
            Pay Only When They <span className={` `}>Show</span>.
          </span>
        </h1>
        <p className="text-center !mb-0">DONE-FOR-YOU service!</p>
        <p className="max-w-[800px] mx-auto mb-[30px]">
          We do everything from setup to meeting bookings. You join the meetings
          and close.
        </p>
        <PrimaryButton />
        <p className="mt-[25px] text-sm  md:text-base text-muted">
          Trusted by <span className="text-blue">Agencies</span>,{" "}
          <span className="text-green">SaaS</span> &{" "}
          <span className="text-purple">Consultants</span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
