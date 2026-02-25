import { IoMdMail } from "react-icons/io";

const PrimaryButton = () => {
  return (
    <div className=" md:max-w-[400px] mx-auto">
      <a
        target="_blank"
        href={
          "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-t5ESqE34Q97sS5yunZLXkoZbaoOIZxzhfUfwe_6iG93621vkoVi8Ola36Q18wJhH_R4xm1ro"
        }
        className="uppercase flex items-center justify-center gap-2  bg-purple text-white px-4 md:px-10 lg:px-16 py-4 md:py-6 rounded-[20px]
                         font-extrabold text-sm md:text-xl lg:text-2xl
                         shadow-[0_20px_40px_rgba(169,117,255,0.4)]
                         animate-pulseGlow
                         transition-all duration-300
                         hover:-translate-y-2 hover:scale-105 hover:brightness-110"
      >
        <IoMdMail />
        Book a free call
      </a>
    </div>
  );
};

export default PrimaryButton;
