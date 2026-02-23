import PrimaryButton from "@/components/common/PrimaryButton";

const LetThemBook = () => {
  return (
    <section id="contact" className="py-12 md:py-16 xl:py-20">
      <div className="container mx-auto text-center px-6">
        <span className="eyebrow text-center inline-block bg-mutedOrange text-orange">
          Start Growth
        </span>
        <h2>Stop Chasing. Let Them Book You.</h2>

        <p>
          Tell me who you sell to, average deal size, and what
          &quot;qualified&quot; means for you.
        </p>
        <PrimaryButton />
      </div>
    </section>
  );
};

export default LetThemBook;
