import type { Project } from '../types';

type ProjectYears = Pick<Project, 'year' | 'years'>;

export function projectYears(project: ProjectYears): number[] {
  return [...new Set(project.years ?? [project.year])].sort((a, b) => a - b);
}

export function projectYearLabel(project: ProjectYears): string {
  return projectYears(project).join('–');
}
