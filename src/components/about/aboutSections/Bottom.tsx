import { IoMdMail } from "react-icons/io";

const BottomSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl mb-10">
          Ready to stop being a worker and start being an owner?
        </h2>
        {/* <div className="flex justify-center">
          <a
            href="#contact"
            className="bg-purple text-white text-2xl px-16 py-6 rounded-[100px] font-bold inline-block transition-all duration-500 shadow-xl shadow-[rgba(169, 117, 255, 0.3)]"
          >
            Build My Machine
          </a>
        </div> */}
        <div className="w-[200px] md:w-[400px] mx-auto">
          <a
            href="#contact"
            className="uppercase flex items-center justify-center gap-2  bg-purple text-white px-4 md:px-16 py-4 md:py-6 rounded-[20px]
                          font-extrabold text-lg md:text-[1.5rem]
                          shadow-[0_20px_40px_rgba(169,117,255,0.4)]
                          animate-pulseGlow
                          transition-all duration-300
                          hover:-translate-y-2 hover:scale-105 hover:brightness-110"
          >
            <IoMdMail />
            Book a free call
          </a>
        </div>

        <p className="mt-7 text-muted text-center italic font-semibold">
          &quot;Clarity beats cleverness. Systems beat effort. Every. Single.
          Time.&quot;
        </p>
      </div>
    </section>
  );
};

export default BottomSection;
