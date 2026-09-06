import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FisioAdmin | Gestión clínica para fisioterapeutas',
  description: 'Organiza pacientes, citas, expedientes, tratamientos, progreso y finanzas en una sola plataforma diseñada para fisioterapia.',
  icons: { icon: '/brand-icon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
