import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CV from "./CV_Mohamed_Benboubaker";

const PrintCV = () => {
  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "CV_Mohamed_Benboubaker",
  });

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div ref={cvRef}>
        <CV />
      </div>
      <button
        onClick={handlePrint}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
      >
        Download CV as PDF
      </button>
    </div>
  );
};

export default PrintCV;
