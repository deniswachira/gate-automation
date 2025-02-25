const CampaignComparison = () => {
    return (
      <div className="bg-[#0E3753] py-16 px-6 text-white">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10">Compare the Campaign Types</h2>
  
        {/* Campaign Types Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
          {/* Prospecting */}
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/path/to/prospecting-icon.png" alt="Prospecting Icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold">Prospecting</h3>
            <p className="text-sm mt-2">
              Attract new prospects, by building lookalike and custom audiences.
            </p>
          </div>
  
          {/* Website Retargeting */}
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/path/to/retargeting-icon.png" alt="Website Retargeting Icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold">Website Retargeting</h3>
            <p className="text-sm mt-2">
              Capture interested customers by retargeting website visitors.
            </p>
          </div>
  
          {/* CRM Reengagement */}
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/path/to/reengagement-icon.png" alt="CRM Reengagement Icon" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold">CRM Reengagement</h3>
            <p className="text-sm mt-2">
              Incentivize repeat purchase & win back lapsed customers.
            </p>
          </div>
        </div>
  
        {/* Comparison Table */}
        <div className="mt-12 max-w-4xl mx-auto">
          <table className="w-full border-collapse">
            <tbody>
              {/* Funnel Stage */}
              <tr className="bg-[#174A6C]">
                <td className="py-3 px-6 font-bold text-left">Funnel Stage</td>
                <td className="py-3 px-6 text-center">✔ Awareness</td>
                <td className="py-3 px-6 text-center">✔ Consideration</td>
                <td className="py-3 px-6 text-center">✔ Retention / Reengagement</td>
              </tr>
  
              {/* Customers */}
              <tr className="bg-[#0E3753]">
                <td className="py-3 px-6 font-bold text-left">Customers</td>
                <td className="py-3 px-6 text-center">New</td>
                <td className="py-3 px-6 text-center">New / Existing</td>
                <td className="py-3 px-6 text-center">Existing</td>
              </tr>
  
              {/* Data Source */}
              <tr className="bg-[#174A6C]">
                <td className="py-3 px-6 font-bold text-left">Data Source</td>
                <td className="py-3 px-6 text-center">✔ 1st / 3rd Party</td>
                <td className="py-3 px-6 text-center">✔ Website Visits</td>
                <td className="py-3 px-6 text-center">✔ 1st Party</td>
              </tr>
  
              {/* Deployment */}
              <tr className="bg-[#0E3753]">
                <td className="py-3 px-6 font-bold text-left">Deployment</td>
                <td className="py-3 px-6 text-center">✔ Scheduled</td>
                <td className="py-3 px-6 text-center">✔ Triggered</td>
                <td className="py-3 px-6 text-center">✔ Scheduled / Triggered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default CampaignComparison;
  