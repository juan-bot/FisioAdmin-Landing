import Image from 'next/image';
import {
  ArrowRight, BarChart3, CalendarDays, Check, ChevronRight, ClipboardCheck,
  Cloud, FileHeart, HeartPulse, Menu, ShieldCheck, Sparkles, TrendingUp,
  Users, WalletCards,
} from 'lucide-react';

const features = [
  { icon: Users, eyebrow: 'Pacientes', title: 'Toda la historia, a la mano', text: 'Consulta datos personales, antecedentes, alergias, medicamentos y evolución desde un expediente ordenado.', className: 'feature-large' },
  { icon: CalendarDays, eyebrow: 'Agenda', title: 'Citas que se entienden de un vistazo', text: 'Organiza tu día, confirma sesiones y revisa el calendario mensual sin perder el contexto.', className: '' },
  { icon: FileHeart, eyebrow: 'Tratamiento', title: 'Recetas clínicas claras', text: 'Documenta ejercicios, series, repeticiones, frecuencia y precauciones para cada paciente.', className: '' },
  { icon: TrendingUp, eyebrow: 'Seguimiento', title: 'El progreso se vuelve visible', text: 'Registra dolor, movilidad, fuerza y funcionalidad; compara la evolución con gráficas fáciles de leer.', className: 'feature-wide' },
  { icon: WalletCards, eyebrow: 'Negocio', title: 'Finanzas sin hojas sueltas', text: 'Sigue ingresos, metas y rendimiento para tomar mejores decisiones sobre tu clínica.', className: '' },
];

const faqs = [
  ['¿Para quién está diseñado?', 'Para fisioterapeutas independientes y clínicas que necesitan ordenar su operación sin usar herramientas dispersas.'],
  ['¿Puedo usarlo desde distintos dispositivos?', 'Sí. FisioAdmin es una aplicación web adaptable que funciona en computadora, tableta y teléfono.'],
  ['¿La información se guarda en la nube?', 'Sí. Los datos se sincronizan en la nube y el acceso se controla con cuentas autorizadas.'],
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="FisioAdmin, inicio">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M8.5 9.5c3.8-3.8 11.2-3.8 15 0M7 15.5c4.8-3.9 13.2-3.9 18 0M10 21.5c3.2-2.1 8.8-2.1 12 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="26" r="2" fill="currentColor" />
        </svg>
      </span>
      <span><strong>Fisio<span>Admin</span></strong><small>Gestión clínica</small></span>
    </a>
  );
}

function DashboardMockup() {
  return (
    <div className="product-window" aria-label="Vista previa del panel de FisioAdmin">
      <div className="window-top"><span className="window-logo"><HeartPulse size={17} /></span><span className="window-title">FisioAdmin</span><span className="window-user">JP</span></div>
      <div className="window-body">
        <aside className="window-nav" aria-hidden="true">
          {[BarChart3, Users, CalendarDays, FileHeart, TrendingUp].map((Icon, index) => <span className={index === 0 ? 'active' : ''} key={index}><Icon size={16} /></span>)}
        </aside>
        <div className="window-content">
          <div className="mock-heading"><div><small>MIÉRCOLES, 16 DE SEPTIEMBRE</small><h3>Buen día, Fernanda</h3></div><span>+ Nueva cita</span></div>
          <div className="metric-grid">
            <div><small>Pacientes</small><strong>48</strong><em>+4 este mes</em></div>
            <div><small>Citas hoy</small><strong>6</strong><em>Próxima 10:30</em></div>
            <div><small>Seguimientos</small><strong>12</strong><em>3 por revisar</em></div>
          </div>
          <div className="mock-grid">
            <div className="schedule-card">
              <div className="card-label"><strong>Agenda de hoy</strong><span>Ver calendario</span></div>
              {[
                ['09:00', 'Lucía Hernández', 'Valoración'], ['10:30', 'Miguel Torres', 'Seguimiento'], ['12:00', 'Ana Beltrán', 'Rehabilitación'],
              ].map(([time, name, type], i) => (
                <div className="appointment" key={name}><b>{time}</b><i className={`avatar avatar-${i}`}>{name[0]}</i><span><strong>{name}</strong><small>{type}</small></span><Check size={14} /></div>
              ))}
            </div>
            <div className="progress-card">
              <div className="card-label"><strong>Evolución</strong><span>30 días</span></div>
              <div className="chart-bars" aria-hidden="true">{[38, 48, 43, 64, 58, 74, 82].map((height) => <i key={height} style={{ height: `${height}%` }} />)}</div>
              <p><span>↑ 18%</span> mejoría promedio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal"><a href="#beneficios">Beneficios</a><a href="#funciones">Funciones</a><a href="#seguridad">Seguridad</a><a href="#preguntas">Preguntas</a></nav>
          <a className="nav-cta" href="#producto">Conocer FisioAdmin <ArrowRight size={16} /></a>
          <details className="mobile-menu"><summary aria-label="Abrir menú"><Menu size={23} /></summary><nav aria-label="Navegación móvil"><a href="#beneficios">Beneficios</a><a href="#funciones">Funciones</a><a href="#seguridad">Seguridad</a><a href="#preguntas">Preguntas</a></nav></details>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Gestión diseñada para fisioterapia</div>
          <h1>Más tiempo para tus pacientes. <span>Todo lo demás, en orden.</span></h1>
          <p>FisioAdmin reúne expedientes, citas, tratamientos, progreso y finanzas en un solo lugar. Claro desde el primer día y útil en cada sesión.</p>
          <div className="hero-actions"><a className="button button-primary" href="#producto">Descubrir la plataforma <ArrowRight size={18} /></a><a className="text-link" href="#como-funciona">Ver cómo funciona <ChevronRight size={17} /></a></div>
          <div className="trust-row" aria-label="Ventajas principales"><span><Cloud size={17} /> Sincronización en la nube</span><span><ShieldCheck size={17} /> Acceso controlado</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><DashboardMockup />
          <div className="floating-card float-patient"><span><Check size={15} /></span><div><strong>Expediente actualizado</strong><small>Hace un momento</small></div></div>
          <div className="floating-card float-progress"><TrendingUp size={20} /><div><strong>Progreso visible</strong><small>Una historia clínica clara</small></div></div>
        </div>
      </section>

      <section className="proof-strip" id="beneficios"><div className="section-shell proof-grid"><p>Una clínica organizada se siente en cada consulta.</p><div><strong>Un solo lugar</strong><span>Adiós a la información dispersa.</span></div><div><strong>Cada paciente visible</strong><span>Contexto completo antes de atender.</span></div><div><strong>Decisiones con datos</strong><span>Métricas clínicas y financieras claras.</span></div></div></section>

      <section className="workflow section-shell" id="como-funciona">
        <div className="section-intro"><span className="section-kicker">TU FLUJO, MÁS SIMPLE</span><h2>De la primera cita al alta, sin perder el hilo</h2><p>Cada registro alimenta una visión completa de tu paciente y de tu práctica.</p></div>
        <div className="steps">
          <article><span>01</span><div className="step-icon"><CalendarDays /></div><h3>Organiza la atención</h3><p>Agenda citas, confirma el estado y consulta tu día con claridad.</p></article>
          <article><span>02</span><div className="step-icon"><ClipboardCheck /></div><h3>Documenta la sesión</h3><p>Registra notas, evaluaciones y tratamiento dentro del expediente.</p></article>
          <article><span>03</span><div className="step-icon"><TrendingUp /></div><h3>Mide lo que mejora</h3><p>Sigue la evolución y convierte cada dato en una decisión informada.</p></article>
        </div>
      </section>

      <section className="product-section" id="producto"><div className="section-shell product-layout">
        <div className="photo-wrap"><Image src="/fisioterapia-clinica.png" alt="Fisioterapeuta guiando la movilidad de hombro de una paciente" fill sizes="(max-width: 900px) 100vw, 50vw" /><div className="photo-note"><HeartPulse size={22} /><span><strong>La tecnología acompaña.</strong><small>Tu criterio clínico sigue al centro.</small></span></div></div>
        <div className="product-copy"><span className="section-kicker">HECHO PARA TU CONSULTA</span><h2>Menos administración. Más continuidad clínica.</h2><p>FisioAdmin convierte tareas repetitivas en un flujo natural. Encuentra lo importante rápido, registra sin fricción y retoma cada caso justo donde lo dejaste.</p><ul><li><Check /> Información ordenada por paciente</li><li><Check /> Seguimiento clínico con indicadores visuales</li><li><Check /> Vista operativa y financiera en el mismo sistema</li><li><Check /> Experiencia adaptable a computadora, tableta y móvil</li></ul><a className="text-link strong" href="#funciones">Explorar las funciones <ArrowRight size={17} /></a></div>
      </div></section>

      <section className="features section-shell" id="funciones">
        <div className="section-intro left"><span className="section-kicker">TODO CONECTADO</span><h2>Lo que necesitas para cuidar y hacer crecer tu práctica</h2></div>
        <div className="feature-grid">{features.map(({ icon: Icon, eyebrow, title, text, className }) => <article className={`feature-card ${className}`} key={title}><div className="feature-icon"><Icon /></div><span>{eyebrow}</span><h3>{title}</h3><p>{text}</p><div className="feature-arrow"><ArrowRight size={17} /></div></article>)}</div>
      </section>

      <section className="security" id="seguridad"><div className="section-shell security-inner"><div className="security-badge"><ShieldCheck /></div><div><span className="section-kicker light">INFORMACIÓN PROTEGIDA</span><h2>Acceso para quien debe tenerlo</h2></div><p>Autenticación por cuenta, aprobación de usuarios y datos aislados por terapeuta. La información se sincroniza en la nube para mantener tu operación disponible y ordenada.</p></div></section>

      <section className="faq section-shell" id="preguntas"><div className="section-intro left"><span className="section-kicker">PREGUNTAS FRECUENTES</span><h2>Lo esencial, sin letra pequeña</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta section-shell"><div><span className="section-kicker light">TU CLÍNICA, MÁS CLARA</span><h2>Que administrar no te quite tiempo de atender.</h2><p>Conoce una forma más simple de llevar cada paciente, cada cita y cada avance.</p><a className="button button-light" href="#inicio">Conocer FisioAdmin <ArrowRight size={18} /></a></div><div className="cta-art" aria-hidden="true"><span /><span /><span /><HeartPulse /></div></section>

      <footer><div className="section-shell footer-inner"><Brand /><p>Gestión clínica pensada para fisioterapeutas.</p><a href="#inicio">Volver arriba ↑</a></div></footer>
    </main>
  );
}
