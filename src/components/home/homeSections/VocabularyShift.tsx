import React from "react";

const VocabularyShift = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center">The Vocabulary Shift</h2>
        <div className="overflow-x-auto mt-10 rounded-xl border-2 border-[#edf2f7]">
          <table className="w-full border-collapse bg-white">
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
                {/* [cite_start] */}
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  <span className="text-green font-extrabold bg-mutedGreen py-1 px-4 rounded-[50px]">
                    ✓
                  </span>{" "}
                  &quot;Clear next steps:&quot;
                  {/* [cite: 104] */}
                </td>
              </tr>
              <tr>
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  &quot;Per my last email&quot;
                </td>
                {/* [cite_start] */}
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  <span className="text-green font-extrabold bg-mutedGreen py-1 px-4 rounded-[50px]">
                    ✓
                  </span>{" "}
                  &quot;Keeping it simple:&quot;
                  {/* [cite: 102] */}
                </td>
              </tr>
              <tr>
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  &quot;We synergize performance&quot;
                </td>
                {/* [cite_start] */}
                <td className="p-5 border-b border-[#f1f5f9] text-muted text-lg font-semibold">
                  <span className="text-green font-extrabold bg-mutedGreen py-1 px-4 rounded-[50px]">
                    ✓
                  </span>{" "}
                  &quot;Here&apos;s what matters:&quot;
                  {/* [cite: 105] */}
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
