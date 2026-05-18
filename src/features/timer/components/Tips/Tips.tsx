import { useTranslation } from 'react-i18next';
import { useTaskContext } from '../../store';
import { getNextCycle, getNextCycleType } from '../../util';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  const { t } = useTranslation('timer');

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        {t('timer.focusFor')} {state.config.workTime}min
      </span>
    ),
    shortBreakTime: (
      <span>
        {t('timer.restFor')} {state.config.shortBreakTime}min
      </span>
    ),
    longBreakTime: <span>{t('timer.longRest')}</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        {t('timer.nextCycle')} <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        {t('timer.nextInstance')} {state.config.shortBreakTime}min
      </span>
    ),
    longBreakTime: <span>{t('timer.nextInstanceLong')}</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
