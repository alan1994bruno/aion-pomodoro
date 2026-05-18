import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';
import { TaskContextProvider } from './features/timer/store/TaskContextProvider.tsx';
import { MessagesContainer } from './components/layout/MessagesContainer/MessageContainer.tsx';
import './lib/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContextProvider>
      <MessagesContainer>
        <App />
      </MessagesContainer>
    </TaskContextProvider>
  </StrictMode>,
);
