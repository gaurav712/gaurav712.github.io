import personalProjects from "./personal";
import corporateProjects from "./corporate";
import { IProjectsData } from "../types";

export const projectTypes = ["Personal", "Professional"];

export const projects: IProjectsData = {
  Personal: personalProjects,
  Professional: corporateProjects,
};
