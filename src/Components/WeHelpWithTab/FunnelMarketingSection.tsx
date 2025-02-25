const FunnelMarketingSection = () => {
    return (
      <div className="py-16 px-6 text-center bg-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E3753] max-w-3xl mx-auto leading-snug">
          Most Direct Mail Providers Focus on only One Stage of the Funnel.<br />
          <span className="text-[#0E3753]">With Postie You Get All 3!</span>
        </h2>
  
        {/* Supporting Text */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Any campaign type can be successful, but you raise the bar when campaigns work together.
          With Postie you can deploy full-funnel marketing, giving you:
        </p>
  
        {/* Features Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-12">
          {/* Higher Converting Audiences */}
          <div className="max-w-sm">
            <img src="/path/to/audience-icon.png" alt="Higher Converting Audiences" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#0E3753]">Higher Converting Audiences</h3>
            <p className="text-gray-600 text-sm mt-2">
              Your campaigns talk and learn from each other. Customers from CRM campaigns can be
              highly qualified seed audiences for a prospecting campaign.
            </p>
          </div>
  
          {/* Integrated Customer Journeys */}
          <div className="max-w-sm">
            <img src="/path/to/journey-icon.png" alt="Integrated Customer Journeys" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#0E3753]">Integrated Customer Journeys</h3>
            <p className="text-gray-600 text-sm mt-2">
              Leverage Postie triggers and automation to build cross-channel marketing journeys.
              Campaigns synchronize email, social, and direct mail activations.
            </p>
          </div>
  
          {/* Ultimate Convenience */}
          <div className="max-w-sm">
            <img src="/path/to/convenience-icon.png" alt="Ultimate Convenience" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#0E3753]">Ultimate Convenience</h3>
            <p className="text-gray-600 text-sm mt-2">
              Manage all your campaigns from one platform. Easily optimize and compare results
              across campaign types.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FunnelMarketingSection;
  