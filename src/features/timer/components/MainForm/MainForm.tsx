import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../store';
import { getNextCycle, getNextCycleType } from '../../util';
import type { TaskModel } from '../../types';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/lib/alert';
import { Tips } from '../Tips';
import { Cycles } from '../Cycles';
import { useTranslation } from 'react-i18next';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  const { t } = useTranslation('timer');

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    Alert.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      Alert.warn(t('timer.alertNameInputTask'));
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCyleType],
      type: nextCyleType,
    };

    dispatch({ type: 'START_TASK', payload: newTask });

    Alert.success(t('timer.alertTaskStart'));
  }

  function handleInterruptTask() {
    Alert.dismiss();
    Alert.error(t('timer.aletTaskStop'));
    dispatch({ type: 'INTERRUPT_TASK' });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <Input
          labelText='task'
          id='meuInput'
          type='text'
          placeholder={t('timer.typeSomething')}
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <Button
            aria-label={t('timer.startNewTask')}
            title={t('timer.startNewTask')}
            type='submit'
            key='botao_submit'
          >
            <PlayCircleIcon />
          </Button>
        )}

        {!!state.activeTask && (
          <Button
            aria-label={t('timer.stopCurrentTask')}
            title={t('timer.stopCurrentTask')}
            type='button'
            color='red'
            onClick={handleInterruptTask}
            key='botao_button'
          >
            <StopCircleIcon />
          </Button>
        )}
      </div>
    </form>
  );
}
