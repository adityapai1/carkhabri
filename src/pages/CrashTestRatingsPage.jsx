import React from 'react';

const CrashTestRatingsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Why crash test ratings matter?</h2>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-xl font-bold mb-2">Full article with bullet points</h3>
        <ul className="list-disc pl-5">
          <li>Crash test ratings provide an objective measure of a vehicle's safety</li>
          <li>Higher ratings indicate better protection for occupants in various crash scenarios</li>
          <li>Ratings help consumers make informed decisions when purchasing vehicles</li>
          <li>They encourage manufacturers to improve vehicle safety features and design</li>
          <li>Understanding ratings can potentially save lives in the event of an accident</li>
        </ul>
      </div>
    </div>
  );
};

export default CrashTestRatingsPage;