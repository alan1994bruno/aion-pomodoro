import { useTranslation } from 'react-i18next';
import { useTaskContext } from '../../store';
import { getNextCycle, getNextCycleType } from '../../util';
import styles from './Cycles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'decanso curto',
    longBreakTime: 'descanso longo',
  };

  const { t } = useTranslation('timer');

  return (
    <div className={styles.cycles}>
      <span>{t('timer.cycles')}</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`${t('timer.cycleIndicator')} ${cycleDescriptionMap[nextCycleType]}`}
              title={`${t('timer.cycleIndicator')} ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
