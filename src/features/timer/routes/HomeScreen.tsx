import { useEffect } from 'react';
import { CountDown } from '../components/CountDown';
import { MainForm } from '../components/MainForm';

export function HomeScreen() {
  useEffect(() => {
    document.title = 'Aion Pomodoro';
  }, []);

  return (
    <>
      <CountDown />
      <MainForm />
    </>
  );
}
