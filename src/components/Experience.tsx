// src/components/Experience.tsx
import React from "react";

const Experience = () => (
  <section id="experience" className="py-20 bg-white">
    <div className="mt-16 p-8 border">
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "#00589A" }}
        >
          Professional Experience{" "}
        </h2>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-800 mb-2">
          IT Support Specialist
        </h4>
        <p className="text-cyan-600 font-medium mb-3">
          Supermarket Chain • 1 Year
        </p>
        <ul className="text-slate-600 space-y-2">
          <li>• Assembled and configured Point of Sale (POS) systems</li>
          <li>
            • Established and managed network infrastructure across 3 branches
          </li>
          <li>
            • Defined and configured network devices for seamless inter-branch
            connectivity
          </li>
          <li>
            • Provided technical support and troubleshooting for hardware and
            software issues
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
