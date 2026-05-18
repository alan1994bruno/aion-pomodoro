import { useEffect, useState, useMemo } from 'react';
import { useTaskContext } from '../store';
import type { SortTasksOptions } from '../types';
import { sortTasks } from '../util/sortTasks';
import { Alert } from '@/lib/alert';
import { Heading } from '@/components/ui/Heading';
import { TableTimer } from '../components/TableTimer';
import { ContainerButton } from '../components/ContainerButton';
import { useTranslation } from 'react-i18next';

type SortConfig = Pick<SortTasksOptions, 'field' | 'direction'>;

export function HistoryScreen() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const { t } = useTranslation('timer');

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'startDate',
    direction: 'desc',
  });

  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      field: sortConfig.field,
      direction: sortConfig.direction,
    });
  }, [state.tasks, sortConfig]);

  useEffect(() => {
    document.title = t('timer.history') + ' - Aion Pomodoro';
  }, [t]);

  useEffect(() => {
    return () => {
      Alert.dismiss();
    };
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    setSortConfig(prev => ({
      field,
      direction:
        prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  }

  function handleResetHistory() {
    Alert.dismiss();

    Alert.confirm(t('timer.heSure'), confirmation => {
      if (confirmation) {
        dispatch({ type: 'RESET_STATE' });
      }
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
          tasks={sortedTasks}
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
