const SecondaryButton = () => {
  return (
    <a
      target="_blank"
      href={
        "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-t5ESqE34Q97sS5yunZLXkoZbaoOIZxzhfUfwe_6iG93621vkoVi8Ola36Q18wJhH_R4xm1ro"
      }
      className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-purple transition duration-500 ease-out border-2 border-purple rounded-[10px] shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-purple group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center uppercase w-full h-full text-purple text-[14px] transition-all duration-300 transform group-hover:translate-x-full ease">
        Let&apos;s go
      </span>
      <span className="relative invisible">Let&apos;s go</span>
    </a>
  );
};

export default SecondaryButton;
