import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle
              className="h-8 w-8 text-primary shrink-0"
              aria-hidden="true"
            />
            <h1 className="text-2xl font-bold text-foreground">
              {t('not_found_title')}
            </h1>
          </div>

          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
            {t('not_found_desc')}
          </p>

          <a
            href={import.meta.env.BASE_URL}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold py-2.5 px-4 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t('not_found_home')}
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
