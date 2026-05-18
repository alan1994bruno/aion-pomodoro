import { useTranslation } from 'react-i18next';
import type { SortTasksOptions, TaskModel } from '../../types';
import { formatDate, getTaskStatus } from '../../util';
import styles from './TableTimer.module.css';

interface TableTimerProps {
  tasks: TaskModel[];
  handleSortTasks: ({ field }: Pick<SortTasksOptions, 'field'>) => void;
  activeTask: TaskModel | null;
}

export function TableTimer({
  tasks,
  handleSortTasks,
  activeTask,
}: TableTimerProps) {
  const { t } = useTranslation('timer');
  return (
    <div className={styles.responsiveTable}>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => handleSortTasks({ field: 'name' })}
              className={styles.thSort}
            >
              {t('timer.task')} ↕
            </th>
            <th
              onClick={() => handleSortTasks({ field: 'duration' })}
              className={styles.thSort}
            >
              {t('timer.duration')} ↕
            </th>
            <th
              onClick={() => handleSortTasks({ field: 'startDate' })}
              className={styles.thSort}
            >
              {t('timer.date')} ↕
            </th>
            <th>{t('timer.status')}</th>
            <th>{t('timer.type')}</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => {
            const taskTypeDictionary = {
              workTime: t('timer.workTime'),
              shortBreakTime: t('timer.shortBreakTime'),
              longBreakTime: t('timer.longBreakTime'),
            };

            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.duration}min</td>
                <td>{formatDate(task.startDate)}</td>
                <td>{getTaskStatus(task, activeTask)}</td>
                <td>{taskTypeDictionary[task.type]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
