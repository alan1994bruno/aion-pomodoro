import { createContext, type Dispatch } from 'react';
import type { TaskStateModel } from '../types/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import type { TaskActionModel } from '../types/TaskActionModel';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
