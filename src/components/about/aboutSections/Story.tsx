const StorySection = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-[60px] text-left">
        <div>
          <h2 className="text-[2.8rem] font-black tracking-[-0.04em] mb-5">
            The Problem.
          </h2>

          <p className="text-lg text-muted mb-5">
            In 2025, anyone with a laptop and a credit card can send 10,000
            emails a day. The result? A digital graveyard of low-relevance noise
            that burns domain reputations and kills buyer trust.
          </p>

          <p className="text-lg text-muted mb-5">
            Most agencies solve this by turning up the volume. We think
            that&apos;s lazy. We believe that{" "}
            <span className="font-bold">
              Better Conversations &gt; More Emails.
            </span>
          </p>

          <div
            className="relative p-[40px] rounded-[32px] 
                bg-[#f8fafc] border border-slate-200"
          >
            <div
              className="absolute left-0 top-[20%] h-[60%] w-[6px] 
                  bg-orange rounded-r-[4px]"
            ></div>

            <p className="m-0 font-extrabold text-primary">
              &quot;If we can&apos;t describe your prospect&apos;s pain better
              than they can, we don&apos;t start the machine.&quot;
            </p>
          </div>
        </div>

        {/* Right Column  */}
        <div>
          <h2 className="text-[2.8rem] font-black tracking-[-0.04em] mb-5">
            The Solution.
          </h2>

          <p className="text-lg text-muted mb-5">
            We built the <span className="font-bold">Humanoid Paradigm</span>.
            It’s a hybrid model that uses machine precision for data analytics
            and deliverability, but keeps a human operator in the loop for tonal
            nuance and empathy.
          </p>

          <p className="text-lg text-muted mb-5">
            We don&apos;t sell marketing. We sell{" "}
            <span className="font-bold">Leverage</span>. We build systems that
            allow owners to stop managing inboxes and start managing their
            growth.
          </p>

          <div
            className="relative p-[40px] rounded-[32px] 
                bg-[#f8fafc] border border-slate-200"
          >
            <div
              className="absolute left-0 top-[20%] h-[60%] w-[6px] 
                  bg-green rounded-r-[4px]"
            ></div>

            <p className="m-0 font-extrabold text-primary">
              &quot;Systems eat effort. We give you the system so you can
              reclaim your time.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
