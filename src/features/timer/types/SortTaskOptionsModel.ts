import type { TaskModel } from './TaskModel';

export interface SortTasksOptions {
  tasks: TaskModel[];
  direction?: 'asc' | 'desc';
  field?: keyof TaskModel;
}
