import { Routes, Route, BrowserRouter } from 'react-router';
import { HistoryScreen } from './features/timer/routes/HistoryScreen';
import { HomeScreen } from './features/timer/routes/HomeScreen';
import { ContainerScreen } from './components/layout/ContainerScreen/ContainerScreen';
import { SettingsScreen } from './features/timer/routes/SettingsScreen';
import { AboutScreen } from './features/misc/routes/AboutScreen';
import { NotFoundScreen } from './features/misc/routes/NotFoundScreen';

export function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContainerScreen />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/history' element={<HistoryScreen />} />
            <Route path='/settings/' element={<SettingsScreen />} />
            <Route path='/about/' element={<AboutScreen />} />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
