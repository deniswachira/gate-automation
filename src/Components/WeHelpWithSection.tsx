import React from "react";

interface WeHelpWithSectionProps {
  id: string;
  title: string;
  description: string;
  useCases: string[];
  button1Text: string;
  button1Link: string;
  button2Text?: string;
  button2Link?: string;
  imageUrl: string;
  reverse?: boolean;
}

const WeHelpWithSection: React.FC<WeHelpWithSectionProps> = ({
  id,
  title,
  description,
  useCases,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  imageUrl,
  reverse = false,
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col md:flex-row items-center gap-8 px-6 py-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-xl font-semibold text-blue-600">{id}</h2>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-700">{description}</p>

        {/* Popular Use Cases */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg text-gray-900">
            Popular Use Cases
          </h4>
          <ul className="mt-2 text-gray-600 list-disc list-inside">
            {useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={button1Link}
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full"
          >
            {button1Text}
          </a>
          {button2Text && button2Link && (
            <a
              href={button2Link}
              className="px-6 py-2 text-blue-500 font-medium rounded-full border border-blue-500"
            >
              {button2Text} →
            </a>
          )}
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={imageUrl} alt={title} className="max-w-full rounded-lg" />
      </div>
    </section>
  );
};

export default WeHelpWithSection;
