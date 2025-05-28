import React from "react";
import { SkillsData } from "@/core/types/skills";

type SkillsTagCloudProps = {
  skillsData: SkillsData;
};

const SkillsTagCloud: React.FC<SkillsTagCloudProps> = ({ skillsData }) => (
  <div className="flex flex-wrap gap-2">
    {(skillsData.list ?? []).map((skill, i) => (
      <span
        key={i}
        className="bg-green-800 text-green-200 px-3 py-1 rounded-full text-sm font-semibold cursor-default select-none
                   hover:bg-green-600 transition"
        title={skill}
      >
        {skill}
      </span>
    ))}
  </div>
);

export default SkillsTagCloud;
