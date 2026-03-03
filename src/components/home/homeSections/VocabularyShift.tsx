const VocabularyShift = () => {
  return (
    <section className="py-12 md:py-16 xl:py-20">
      <div className="container px-6 mx-auto">
        <h2 className="text-center">The Vocabulary Shift</h2>
        <div className="overflow-x-auto mt-10 rounded-xl border-2 border-[#edf2f7]">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="w-1/2 text-left px-5 bg-[#f8fafc] text-primary text-lg md:text-xl font-bold py-4">
                  Corporate Speak (The &quot;Don&apos;t&quot;)
                </th>
                <th className="text-left px-5 bg-[#f8fafc] text-primary text-lg md:text-xl font-bold py-4">
                  Humanoid Speak (The &quot;Do&quot;)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  &quot;Kindly advise at your earliest convenience&quot;
                </td>

                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  <span className="text-green font-extrabold bg-mutedGreen py-1 px-4 rounded-[50px]">
                    ✓
                  </span>{" "}
                  &quot;Clear next steps:&quot;
                </td>
              </tr>
              <tr>
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  &quot;Per my last email&quot;
                </td>

                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  <span className="text-green font-extrabold bg-mutedGreen py-1 px-4 rounded-[50px]">
                    ✓
                  </span>{" "}
                  &quot;Keeping it simple:&quot;
                </td>
              </tr>
              <tr>
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  &quot;We synergize performance&quot;
                </td>

                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  <span className="text-green font-extrabold bg-mutedGreen py-1 px-4 rounded-[50px]">
                    ✓
                  </span>{" "}
                  &quot;Here&apos;s what matters:&quot;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default VocabularyShift;
