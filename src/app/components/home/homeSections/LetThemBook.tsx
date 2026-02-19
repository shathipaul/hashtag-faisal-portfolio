import React from "react";

const LetThemBook = () => {
  return (
    <section
      id="contact"
      className="py-20  border-t border-[#f1f5f9] text-center"
    >
      <div className="container mx-auto px-6">
        <span className="eyebrow bg-mutedOrange text-orange">Start Growth</span>
        <h2>Stop Chasing. Let Them Book You.</h2>
        [cite_start]
        <p>
          Tell me who you sell to, average deal size, and what
          &quot;qualified&quot; means for you[cite: 53].
        </p>
        <form className="md:flex max-w-[600px] my-5 mx-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 py-5 px-7 rounded-[50px] border-2 border-[#e2e8f0] outline-none transition-all duration-500 font-semibold focus:border-orange"
            required
          />
          <button type="submit" className="btn">
            Send Me The Plan
          </button>
        </form>
        {/* <div style="margin-top: 40px; color: var(--text-muted); font-size: 1rem">
            &copy; 2026 HASHTAG FAISAL. All Rights Reserved.
            <br />
            [cite_start]
            <em>
              &quot;Write smarter, sound human, measure real results&quot;[cite: 76].
            </em>
          </div> */}
      </div>
    </section>
  );
};

export default LetThemBook;
