import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

const queryClient = new QueryClient();

// Vite reports a relative BASE_URL ('./') when it is built without an absolute
// base. wouter needs an absolute prefix or an empty string — '.' matches
// nothing and would blank the whole page.
const routerBase = /^\.?\/?$/.test(import.meta.env.BASE_URL)
  ? ''
  : import.meta.env.BASE_URL.replace(/\/$/, '');

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function DocumentLanguage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language.startsWith('ko') ? 'ko' : 'en';
    document.documentElement.lang = lang;
    document.title = t('site_title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta_description'));
  }, [t, i18n.language]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DocumentLanguage />
        <WouterRouter base={routerBase}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;