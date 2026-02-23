import { bitcountGridDouble } from "@/app/layout";
import PrimaryButton from "@/components/common/PrimaryButton";

const Banner = () => {
  return (
    <section className="text-center mx-auto px-4 flex justify-center items-center min-h-screen py-10 md:py-20">
      <div className="text-center">
        <span className="eyebrow bg-white text-purple border-2 border-purple">
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
          We do everything from setup to meeting bookings. You join the meeting
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
