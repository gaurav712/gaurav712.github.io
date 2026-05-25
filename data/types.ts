export interface ITechIcons {
  [key: string]: {
    iconSource: string;
    tooltipText: string;
  };
}

export interface IProject {
  name: string;
  techUsed: string[];
  description: string;
  sourceUrl: string;
  featured?: boolean;
}

export type ProjectWithPeriod = IProject & { period: string };

export interface IProjectsList {
  [key: string]: IProject[];
}

export interface IProjectsData {
  [key: string]: IProjectsList;
}
