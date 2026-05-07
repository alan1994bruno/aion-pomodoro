import type { TaskModel } from './TaskModel';
import type { TaskStateModel } from './TaskStateModel';

export type TaskActionsWithPayload =
  | {
      type: 'START_TASK';
      payload: TaskModel;
    }
  | {
      type: 'COUNT_DOWN';
      payload: { secondsRemaining: number };
    }
  | {
      type: 'CHANGE_SETTINGS';
      payload: TaskStateModel['config'];
    };

export type TaskActionsWithoutPayload =
  | {
      type: 'RESET_STATE';
    }
  | {
      type: 'INTERRUPT_TASK';
    }
  | {
      type: 'COMPLETE_TASK';
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
