import { useEffect, useState } from 'react';
import { useTaskContext } from '../store';
import type { SortTasksOptions } from '../types';
import { sortTasks } from '../util/sortTasks';
import { Alert } from '@/lib/alert';
import { Heading } from '@/components/ui/Heading';
import { TableTimer } from '../components/TableTimer';
import { ContainerButton } from '../components/ContainerButton';
import { useTranslation } from 'react-i18next';

export function HistoryScreen() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;
  const { t } = useTranslation('timer');
  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    document.title = t('timer.history') + ' - Aion Pomodoro';
  }, [t]);

  useEffect(() => {
    if (!confirmClearHistory) return;

    setConfirmClearHistory(false);

    dispatch({ type: 'RESET_STATE' });
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => {
      Alert.dismiss();
    };
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    Alert.dismiss();
    Alert.confirm(t('timer.heSure'), confirmation => {
      setConfirmClearHistory(confirmation);
    });
  }

  return (
    <>
      <Heading>
        <span>{t('timer.history')}</span>
        {hasTasks && <ContainerButton onClick={handleResetHistory} />}
      </Heading>

      {hasTasks && (
        <TableTimer
          tasks={sortTasksOptions.tasks}
          activeTask={state.activeTask}
          handleSortTasks={handleSortTasks}
        />
      )}

      {!hasTasks && (
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          {t('timer.notTaskCreate')}
        </p>
      )}
    </>
  );
}
