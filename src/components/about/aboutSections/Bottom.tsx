import PrimaryButton from "@/components/common/PrimaryButton";

const BottomSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-center mb-10">
          Ready to stop being a worker and start being an owner?
        </h3>
        <PrimaryButton />

        <p className="mt-7 text-muted text-center italic font-semibold">
          &quot;Clarity beats cleverness. Systems beat effort. Every. Single.
          Time.&quot;
        </p>
      </div>
    </section>
  );
};

export default BottomSection;
