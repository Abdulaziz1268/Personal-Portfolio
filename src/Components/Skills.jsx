import SkillsCard from "./Cards/SkillsCard"

const frontendTechnologies = [
  { name: "HTML/CSS", percent: 95 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 80 },
  { name: "React Native", percent: 75 },
  { name: "Tailwind CSS", percent: 85 },
]
const backendTechnologies = [
  { name: "Node.js", percent: 75 },
  { name: "Express.js", percent: 80 },
  { name: "MongoDB", percent: 70 },
  { name: "Mongoose", percent: 75 },
  { name: "Socket.IO", percent: 70 },
]
const tools = [
  { name: "Git & GitHub", percent: 80 },
  { name: "Zustand", percent: 65 },
]

const additionalSkills = [
  "REST APIs",
  "Responsive Design",
  "Agile Methodology",
  "Problem Solving",
]

export default function Skills() {
  return (
    <div
      className="flex flex-col items-center justify-center py-15 bg-gray-50 dark:bg-gray-950 w-screen"
      id="skills"
    >
      <div className="flex justify-center mb-10">
        <p className="text-gray-900 dark:text-gray-100 font-bold text-4xl">
          Skills & Technologies
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <SkillsCard tittle="Frontend" tech={frontendTechnologies} />
        <SkillsCard tittle="Backend" tech={backendTechnologies} />
        <SkillsCard
          tittle="Tools & Others"
          tech={tools}
          additional={additionalSkills}
        />
      </div>
    </div>
  )
}
