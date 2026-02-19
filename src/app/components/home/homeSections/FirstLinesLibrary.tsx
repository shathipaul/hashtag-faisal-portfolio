const FirstLinesLibrary = () => {
  return (
    <section className="py-20">
      <div className="container max-auto px-6">
        <div className="text-center">
          <span className="eyebrow bg-mutedBlue text-blue">
            Proof of Concept
          </span>
          <h2>The First-Lines Library</h2>
          [cite_start]
          <p className="mb-10">
            Short, texting-style copy that earns replies[cite: 20, 106].
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-7">
          <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] italic mb-5 relative">
            <span className="eyebrow !text-xs bg-mutedPurple py-1 px-2">
              THE HIRING ANGLE
            </span>
            <br />
            <br />
            [cite_start]&quot;Noticed you&apos;re hiring AEs—guessing follow-ups
            are stretched. Want a polite, human backup?&quot; [cite: 194]
          </div>
          <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] italic mb-5 relative">
            <span className="eyebrow !text-xs bg-mutedOrange py-1 px-2">
              THE META PLAY
            </span>
            <br />
            <br />
            [cite_start]&quot;No templates here. One short email, one clear
            point, one easy yes/no. That&apos;s the play.&quot; [cite: 196]
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstLinesLibrary;
