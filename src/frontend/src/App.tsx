import { LanguageProvider } from './i18n/LanguageProvider';
import LandingPage from './components/landing/LandingPage';

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

export default App;
