import personalProjects from "./personal";
import corporateProjects from "./corporate";
import { IProject, IProjectsData, ProjectWithPeriod } from "../types";

export const projectTypes = ["Personal", "Professional"];

export const projects: IProjectsData = {
  Personal: personalProjects,
  Professional: corporateProjects,
};

export const getFeaturedProjects = (tab: string): ProjectWithPeriod[] =>
  Object.entries(projects[tab]).flatMap(([period, items]) =>
    items
      .filter((item) => item.featured)
      .map((item) => ({ ...item, period }))
  );

export const getTimelineGroups = (
  tab: string
): { period: string; items: IProject[] }[] =>
  Object.entries(projects[tab])
    .map(([period, items]) => ({
      period,
      items: items.filter((item) => !item.featured),
    }))
    .filter((group) => group.items.length > 0);
