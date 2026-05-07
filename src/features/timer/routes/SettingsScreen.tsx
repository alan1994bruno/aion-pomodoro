import { Alert } from '@/lib/alert';
import { useTaskContext } from '../store';
import { useEffect, useRef } from 'react';
import { Heading } from '@/components/ui/Heading';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SaveIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function SettingsScreen() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('timer');

  useEffect(() => {
    document.title = t('timer.settings') + ' - Aion Pomodoro';
  }, [t]);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Alert.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push(t('timer.enterNumbersAllFields'));
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push(t('timer.enterBetween1And99'));
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push(t('timer.enterBetween1And30'));
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push(t('timer.enterBetween1And60'));
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        Alert.error(error);
      });
      return;
    }

    dispatch({
      type: 'CHANGE_SETTINGS',
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    Alert.success(t('timer.settingsSave'));
  }

  return (
    <>
      <Heading>{t('timer.settings')}</Heading>

      <p style={{ textAlign: 'center' }}>{t('timer.changeSettingTimeFocus')}</p>

      <form onSubmit={handleSaveSettings} action='' className='form'>
        <div className='formRow'>
          <Input
            id='workTime'
            labelText={t('timer.workTime')}
            ref={workTimeInput}
            defaultValue={state.config.workTime}
            type='number'
          />
        </div>
        <div className='formRow'>
          <Input
            id='shortBreakTime'
            labelText={t('timer.shortBreakTime')}
            ref={shortBreakTimeInput}
            defaultValue={state.config.shortBreakTime}
            type='number'
          />
        </div>
        <div className='formRow'>
          <Input
            id='longBreakTime'
            labelText={t('timer.longBreakTime')}
            ref={longBreakTimeInput}
            defaultValue={state.config.longBreakTime}
            type='number'
          />
        </div>
        <div className='formRow'>
          <Button
            aria-label={t('timer.saveSettings')}
            title={t('timer.saveSettings')}
          >
            <SaveIcon />
          </Button>
        </div>
      </form>
    </>
  );
}
