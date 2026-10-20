/**
 * EXPERIENCE & LEARNING DATA STRUCTURE
 * Lakshana G S Portfolio
 * 
 * Verified industry experience and structured learning history.
 */

const experienceData = {
  featured: {
    id: "infosys-springboard",
    year: "2026",
    organization: "INFOSYS SPRINGBOARD",
    program: "Virtual Internship 7.0 (Cohort B1)",
    role: "Virtual Intern",
    track: "Agentic AI for Safety Monitoring with Construction Risk Analytics",
    period: "June 29, 2026 – August 31, 2026",
    project: "ConstructIQ AI",
    description: "Selected for Infosys Springboard Virtual Internship 7.0 (Cohort B1), where I engineered ConstructIQ AI — an agentic construction intelligence platform leveraging autonomous multi-agent AI for onsite safety monitoring, regulatory compliance, material estimation, and risk analytics.",
    tags: ["AGENTIC AI", "RISK ANALYTICS", "SAFETY MONITORING", "LLM AGENTS"],
    projectAnchor: "#project-constructiq",
    certificateUrl: "assets/certificates/InfosysSpringBoard7.0.pdf",
    hasCertificate: true,
    verificationUrl: "https://verify.onwingspan.com"
  },
  learning: [
    {
      id: "google-developers-aiml",
      organization: "Google for Developers",
      program: "AI–ML Virtual Internship",
      period: "Jul – Sep 2025",
      certificateUrl: "assets/certificates/Google_AI_ML_Certificate.pdf",
      hasCertificate: true
    },
    {
      id: "kct-aws-data-engineering",
      organization: "KCT / AWS Academy",
      program: "Data Engineering Virtual Internship",
      period: "Oct – Dec 2025",
      certificateUrl: "assets/certificates/AWS_Data_Engineering_Certificate.pdf",
      hasCertificate: true
    },
    {
      id: "aicte-eduskills-java-full-stack",
      organization: "AICTE / EduSkills",
      program: "Java Full Stack Developer Virtual Internship",
      period: "Jun – Aug 2026",
      certificateUrl: "assets/certificates/Java_Full_Stack_Certificate.pdf",
      hasCertificate: true
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { experienceData };
}
