import React from "react";
import { FaRocket, FaMapSigns, FaUserShield, FaInfinity } from "react-icons/fa";
import Image from "next/image";

const styles = {
  section: "py-12 bg-gray-900 sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  textCenter: "text-center sm:text-left",
  heading: "text-3xl font-bold text-white",
  subHeading: "mt-4 text-base font-medium text-gray-400",
  grid: "grid grid-cols-1 px-12 mt-12 sm:mt-16 sm:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-16 xl:gap-x-20",
  icon: "w-10 h-10 mx-auto sm:mx-0 text-blue-500",
  phaseTitle: "mt-6 text-xl font-bold text-white",
  phaseSubtitle:
    "mt-5 text-xs font-medium tracking-wide text-gray-500 uppercase",
  phaseDescription: "mt-3 text-sm font-medium text-gray-400",
};

const roadmapPhases = [
  {
    title: "Phase 1",
    name: "Launch",
    description:
      "Kick off PathvaAI with a robust launch, focusing on user acquisition and initial feedback.",
    icon: <FaRocket strokeWidth={1} className={styles.icon} />,
  },
  {
    title: "Phase 2",
    name: "Expansion",
    description:
      "Expand the feature set and integrate additional travel data sources for a richer user experience.",
    icon: <FaMapSigns className={styles.icon} />,
  },
  {
    title: "Phase 3",
    name: "Security Enhancements",
    description:
      "Implement advanced security measures to ensure user data privacy and platform integrity.",
    icon: <FaUserShield className={styles.icon} />,
  },
  {
    title: "Phase 4",
    name: "Continuous Improvement",
    description:
      "Iterate on user feedback and emerging trends to enhance PathvaAI's capabilities and user satisfaction.",
    icon: <FaInfinity className={styles.icon} />,
  },
];

const Roadmap3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`max-w-md ${styles.textCenter}`}>
          <h2 className={styles.heading}>PathvaAI Roadmap</h2>
          <p className={styles.subHeading}>
            Our journey to revolutionize travel planning
          </p>
        </div>

        <div className={styles.grid}>
          {roadmapPhases.map((phase, index) => (
            <div key={index}>
              {phase.icon}
              <p className={styles.phaseTitle}>{phase.title}</p>
              <p className={styles.phaseSubtitle}>{phase.name}</p>
              <p className={styles.phaseDescription}>{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap3;
