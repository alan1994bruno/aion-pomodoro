import { Heading } from '@/components/ui/Heading';
import { Link } from '@/components/ui/Link';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import picture from '../../../assets/picture-aion.webp';

export function AboutScreen() {
  const { t } = useTranslation('misc');

  useEffect(() => {
    document.title = t('misc.understandPomodoroTechnique') + ' - Aion Pomodoro';
  }, [t]);

  return (
    <>
      <Heading>{t('misc.pomodoroTechnique')}</Heading>

      <p>
        {t('misc.pomodoroTechniqueProductivityMethodology')}{' '}
        <strong>Francesco Cirillo</strong>
        {t('misc.blockTimeStops')}
      </p>

      <img src={picture} alt='' />

      <h2>{t('misc.traditionalPomodoroWork')}</h2>
      <ul>
        <li>
          <strong>{t('misc.oneDefineTask')}</strong>
          {t('misc.thatWantAccomplish')}
        </li>
        <li>
          <strong>{t('misc.work25Minutes')}</strong>{' '}
          {t('misc.withoutInterruptions')}
        </li>
        <li>
          <strong>{t('misc.take5MinuteBreak')}</strong>.
        </li>
        <li>
          <strong>{t('misc.afterEvery4Cycles')}</strong>{' '}
          {t('misc.usually15To30minutes')}
        </li>
      </ul>

      <h2>
        {t('misc.butNo')}
        <strong>Aoin Pomodoro</strong> {t('misc.uniqueSelling')}
      </h2>

      <p>{t('misc.appFollowsOriginal')}</p>

      <h3>{t('misc.customTime')}</h3>
      <p>
        {t('misc.canSetFocusTime')}{' '}
        <Link href='/settings/'>{t('misc.pageSettings')}</Link>{' '}
        {t('misc.changeTimeSettings')}
      </p>

      <h3>{t('misc.cyclesSequence')}</h3>
      <p>{t('misc.cycleCompleted')}</p>
      <p>
        <strong>{t('misc.ourStandard')}</strong>
      </p>
      <ul>
        <li>
          {t('misc.cycles')} <strong>{t('misc.odd')}</strong>:{' '}
          {t('misc.workFocus')}
        </li>
        <li>
          {t('misc.cycles')} <strong>{t('misc.even')}</strong>:{' '}
          {t('misc.workBreak')}
        </li>
        <li>
          {t('misc.cycle')} <strong>8</strong>: {t('misc.specialExtendedRest')}
        </li>
      </ul>

      <h3>{t('misc.viewCyles')}</h3>
      <p>{t('misc.justRepresentingCycles')}</p>
      <ul>
        <li>🟡 {t('misc.yellowCycle')}</li>
        <li>🟢 {t('misc.greenCycle')}</li>
        <li>🔵 {t('misc.blueCycle')}</li>
      </ul>

      <p>{t('misc.thatWayYou')}</p>

      <h3>📊 {t('misc.automaticHistory')}</h3>
      <p>
        {t('misc.allCyclesCompleted')}{' '}
        <Link href='/history/'>{t('misc.history')}</Link>
        {t('misc.markCompleteInterrupted')}
      </p>

      <h2>{t('misc.whyAionPomodoro')}</h2>
      <ul>
        <li>✅ {t('misc.stayFocusedClarity')}</li>
        <li>✅ {t('misc.workRestBalance')}</li>
        <li>✅ {t('misc.customizeCyclesTimers')}</li>
        <li>✅ {t('misc.trackHistoryAutomatically')}</li>
      </ul>

      <p>
        <strong>{t('misc.readyFocus')}</strong> {t('misc.letGo')}{' '}
        <Link href='/'>{t('misc.backHomePage')}</Link>{' '}
        {t('misc.startYourPomodoros')} 🍅🚀
      </p>

      <p>
        <em>"{t('misc.totalFocus')}</em> 💪🧘‍♂️
      </p>
    </>
  );
}
