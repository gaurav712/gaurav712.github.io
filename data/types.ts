export interface ITechIcons {
  [key: string]: {
    iconSource: string;
    tooltipText: string;
  };
}

interface IProject {
  name: string;
  techUsed: string[];
  description: string;
  sourceUrl: string;
}

export interface IProjectsList {
  [key: string]: IProject[];
}
