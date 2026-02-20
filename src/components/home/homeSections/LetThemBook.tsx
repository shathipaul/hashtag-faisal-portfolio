import { IoMdMail } from "react-icons/io";

const LetThemBook = () => {
  return (
    <section
      id="contact"
      className="py-20  border-t border-[#f1f5f9] text-center"
    >
      <div className="container mx-auto px-6">
        <span className="eyebrow bg-mutedOrange text-orange">Start Growth</span>
        <h2>Stop Chasing. Let Them Book You.</h2>

        <p>
          Tell me who you sell to, average deal size, and what
          &quot;qualified&quot; means for you.
        </p>
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
        {/* <form className="md:flex max-w-[600px] my-5 mx-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 py-5 px-7 rounded-[50px] border-2 border-[#e2e8f0] outline-none transition-all duration-500 font-semibold focus:border-orange"
            required
          />

          <button type="submit" className="btn">
            Send Me The Plan
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default LetThemBook;
