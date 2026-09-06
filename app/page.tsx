import Image from 'next/image';
import {
  ArrowRight, BarChart3, CalendarDays, Check, ChevronRight, ClipboardCheck,
  Activity, Cloud, FileHeart, FileText, HeartPulse, Menu, ReceiptText,
  ShieldCheck, Sparkles, TrendingUp, UserCheck, Users, WalletCards,
} from 'lucide-react';

const features = [
  { icon: FileHeart, eyebrow: 'Historia clínica', title: 'Valoración completa y estructurada', text: 'Antecedentes patológicos y familiares, evaluación del dolor, exploración física, diagnóstico y objetivos terapéuticos.', className: 'feature-large' },
  { icon: ClipboardCheck, eyebrow: 'Cada consulta', title: 'Notas de sesión clínicas', text: 'Documenta cómo llegó el paciente, hallazgos, intervención realizada, respuesta y plan para la siguiente cita.', className: '' },
  { icon: Activity, eyebrow: 'Evolución', title: 'Escalas y medidas personalizadas', text: 'Registra dolor sobre 10, movilidad, fuerza, funcionalidad y cualquier métrica específica de tu tratamiento.', className: '' },
  { icon: FileText, eyebrow: 'Documentos', title: 'Expedientes e informes en PDF', text: 'Genera historias clínicas, informes terapéuticos y recetas profesionales listos para compartir o archivar.', className: 'feature-wide' },
  { icon: ReceiptText, eyebrow: 'Planes', title: 'Recetas con ejercicios detallados', text: 'Incluye diagnóstico, frecuencia, duración, series, repeticiones, instrucciones y precauciones.', className: '' },
  { icon: CalendarDays, eyebrow: 'Agenda', title: 'Calendario y control de asistencia', text: 'Gestiona citas programadas, confirmadas, completadas, canceladas o con inasistencia desde una vista mensual.', className: '' },
  { icon: BarChart3, eyebrow: 'Analítica', title: 'KPIs clínicos y operativos', text: 'Revisa asistencia, sesiones documentadas, cambio promedio de dolor, pacientes atendidos y desempeño por especialista.', className: '' },
  { icon: UserCheck, eyebrow: 'Equipo', title: 'Roles y aprobación de usuarios', text: 'Separa permisos de administradores y terapeutas; aprueba nuevas cuentas antes de permitir el acceso.', className: '' },
  { icon: WalletCards, eyebrow: 'Finanzas', title: 'Ingresos, presupuesto y ticket promedio', text: 'Relaciona las sesiones con tus ingresos y compara el desempeño mensual contra los objetivos de la clínica.', className: 'feature-wide' },
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

function ScreenFrame({ active, title, children }: { active: string; title: string; children: React.ReactNode }) {
  const items = [['Resumen', BarChart3], ['Pacientes', Users], ['Citas', CalendarDays], ['Recetas', FileHeart], ['Progreso', TrendingUp], ['Finanzas', WalletCards]] as const;
  return (
    <div className="screen-frame">
      <div className="screen-bar"><i /><i /><i /><span>app.fisioadmin.mx</span></div>
      <div className="screen-app">
        <aside className="screen-sidebar">
          <div className="screen-brand"><HeartPulse /> <strong>FisioAdmin</strong></div>
          <small>ORGANIZACIÓN</small>
          {items.map(([label, Icon]) => <span className={active === label ? 'selected' : ''} key={label}><Icon />{label}</span>)}
          <div className="screen-profile"><b>FB</b><p><strong>Fernanda B.</strong><small>Fisioterapeuta</small></p></div>
        </aside>
        <div className="screen-main"><div className="screen-top"><strong>{title}</strong><span>FB</span></div>{children}</div>
      </div>
    </div>
  );
}

function PatientScreen() {
  return (
    <ScreenFrame active="Pacientes" title="Expediente">
      <div className="patient-head"><div className="patient-avatar">LH</div><div><small>PACIENTE ACTIVA</small><h3>Lucía Hernández</h3><p>34 años · 55 1234 5678 · Última sesión: hoy</p></div><button>+ Nueva acción</button></div>
      <div className="screen-tabs"><b>Resumen</b><span>Historia clínica</span><span>Citas</span><span>Recetas</span><span>Progreso</span><span>Documentos</span></div>
      <div className="patient-layout">
        <div className="clinical-card"><header><strong>Resumen clínico</strong><span>Editar</span></header><div className="clinical-fields"><p><small>DIAGNÓSTICO</small><b>Síndrome del manguito rotador</b></p><p><small>ALERGIAS</small><b>Ninguna conocida</b></p><p><small>MEDICACIÓN</small><b>Ibuprofeno según necesidad</b></p><p><small>OBJETIVO</small><b>Recuperar movilidad sin dolor</b></p></div></div>
        <div className="pain-card"><small>DOLOR ACTUAL</small><strong>3<span>/10</span></strong><div><i style={{width:'70%'}} /></div><p>↓ 4 puntos desde la valoración</p></div>
        <div className="timeline-card"><header><strong>Actividad reciente</strong><span>Ver todo</span></header>{['Nota de sesión registrada','Progreso actualizado','Receta terapéutica expedida'].map((x,i)=><p key={x}><i className={`dot-${i}`} /><span><b>{x}</b><small>{i===0?'Hoy, 11:45':i===1?'12 sep':'28 ago'}</small></span></p>)}</div>
      </div>
    </ScreenFrame>
  );
}

function CalendarScreen() {
  const days = Array.from({ length: 35 }, (_, i) => i - 1);
  return (
    <ScreenFrame active="Citas" title="Calendario">
      <div className="calendar-toolbar"><div><small>AGENDA CLÍNICA</small><h3>Septiembre 2026</h3></div><div><button>‹</button><button>Hoy</button><button>›</button><b>+ Nueva cita</b></div></div>
      <div className="calendar-grid"><div className="weekdays">{['LUN','MAR','MIÉ','JUE','VIE','SÁB','DOM'].map(x=><span key={x}>{x}</span>)}</div><div className="month-days">{days.map((day,i)=><div className={day===16?'today':''} key={i}><span>{day>0&&day<31?day:''}</span>{day===4&&<em className="event teal">09:00 · Miguel T.</em>}{day===9&&<em className="event blue">11:30 · Sofía R.</em>}{day===16&&<><em className="event teal">09:00 · Lucía H.</em><em className="event orange">12:00 · Ana B.</em></>}{day===23&&<em className="event blue">16:30 · Diego M.</em>}</div>)}</div></div>
      <div className="calendar-legend"><span><i className="teal"/>Confirmada</span><span><i className="blue"/>Programada</span><span><i className="orange"/>Seguimiento</span></div>
    </ScreenFrame>
  );
}

function MetricsScreen() {
  return (
    <ScreenFrame active="Finanzas" title="Métricas y finanzas">
      <div className="metrics-title"><div><small>RENDIMIENTO DE LA CLÍNICA</small><h3>Septiembre 2026</h3></div><button>Este mes⌄</button></div>
      <div className="wide-kpis"><div><small>INGRESOS</small><strong>$84,600</strong><em>↑ 12.4%</em></div><div><small>SESIONES COMPLETADAS</small><strong>126</strong><em>94% asistencia</em></div><div><small>TICKET PROMEDIO</small><strong>$671</strong><em>↑ $38</em></div><div><small>NOTAS DOCUMENTADAS</small><strong>118/126</strong><em>93.6%</em></div></div>
      <div className="analytics-layout"><div className="revenue-chart"><header><strong>Ingresos vs presupuesto</strong><span>MXN</span></header><div className="chart-area"><div className="chart-y"><span>$90k</span><span>$60k</span><span>$30k</span><span>$0</span></div><svg viewBox="0 0 500 180" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#25a596" stopOpacity=".32"/><stop offset="1" stopColor="#25a596" stopOpacity="0"/></linearGradient></defs><path d="M0 145 C70 132,95 100,150 115 S240 68,295 82 S385 38,500 30 L500 180 L0 180Z" fill="url(#fill)"/><path d="M0 145 C70 132,95 100,150 115 S240 68,295 82 S385 38,500 30" fill="none" stroke="#169586" strokeWidth="4"/><path d="M0 125 L500 42" fill="none" stroke="#e9945a" strokeWidth="2" strokeDasharray="8 7"/></svg><div className="chart-x"><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span></div></div></div><div className="specialist-card"><header><strong>Por especialista</strong></header>{[['Fernanda','42','$31,200'],['Belén','38','$28,500'],['Carlos','31','$24,900']].map(([n,s,a],i)=><div key={n}><b>{n}</b><span><i style={{width:`${90-i*12}%`}}/></span><small>{s} sesiones · {a}</small></div>)}</div></div>
    </ScreenFrame>
  );
}

function ProductGallery() {
  return (
    <section className="screens-section" id="pantallas">
      <div className="section-shell">
        <div className="screens-heading"><div><span className="section-kicker light">FISIOADMIN POR DENTRO</span><h2>Una herramienta completa, no una agenda con otro nombre</h2></div><p>Cada pantalla conecta la atención clínica con la operación diaria. Explora el expediente, el calendario y los indicadores que realmente importan.</p></div>
        <div className="screen-stories">
          <article><div className="story-copy"><span>01 · EXPEDIENTE</span><h3>El contexto completo antes de entrar a consulta</h3><p>Historia clínica, diagnóstico, medicamentos, progreso, documentos y actividad reciente dentro del mismo perfil.</p><ul><li><Check/>Valoración y antecedentes estructurados</li><li><Check/>Acciones clínicas desde el expediente</li><li><Check/>PDF clínicos listos para expedir</li></ul></div><PatientScreen /></article>
          <article><div className="story-copy"><span>02 · CALENDARIO</span><h3>Una agenda que también da seguimiento</h3><p>Programa y confirma sesiones, identifica inasistencias y abre la nota clínica desde la misma cita.</p><ul><li><Check/>Vista mensual y detalle por día</li><li><Check/>Estados visibles por color</li><li><Check/>Nota de sesión ligada al paciente</li></ul></div><CalendarScreen /></article>
          <article><div className="story-copy"><span>03 · MÉTRICAS</span><h3>La salud de tu práctica, sin armar reportes aparte</h3><p>Relaciona asistencia, documentación, desempeño clínico e ingresos para entender qué está funcionando.</p><ul><li><Check/>Ingresos contra presupuesto</li><li><Check/>Ticket promedio y asistencia</li><li><Check/>Desempeño por especialista</li></ul></div><MetricsScreen /></article>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal"><a href="#pantallas">La plataforma</a><a href="#funciones">Funciones</a><a href="#seguridad">Seguridad</a><a href="#preguntas">Preguntas</a></nav>
          <a className="nav-cta" href="#pantallas">Ver la plataforma <ArrowRight size={16} /></a>
          <details className="mobile-menu"><summary aria-label="Abrir menú"><Menu size={23} /></summary><nav aria-label="Navegación móvil"><a href="#pantallas">La plataforma</a><a href="#funciones">Funciones</a><a href="#seguridad">Seguridad</a><a href="#preguntas">Preguntas</a></nav></details>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Gestión diseñada para fisioterapia</div>
          <h1>Software para fisioterapeutas que simplifica la administración de tu clínica</h1>
          <p>FisioAdmin reúne expedientes, citas, tratamientos, progreso y finanzas en un solo lugar. Claro desde el primer día y útil en cada sesión.</p>
          <div className="hero-actions"><a className="button button-primary" href="#pantallas">Ver FisioAdmin por dentro <ArrowRight size={18} /></a><a className="text-link" href="#funciones">Explorar funciones <ChevronRight size={17} /></a></div>
          <div className="trust-row" aria-label="Ventajas principales"><span><Cloud size={17} /> Sincronización en la nube</span><span><ShieldCheck size={17} /> Acceso controlado</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><DashboardMockup />
          <div className="floating-card float-patient"><span><Check size={15} /></span><div><strong>Expediente actualizado</strong><small>Hace un momento</small></div></div>
          <div className="floating-card float-progress"><TrendingUp size={20} /><div><strong>Progreso visible</strong><small>Una historia clínica clara</small></div></div>
        </div>
      </section>

      <section className="proof-strip" id="beneficios"><div className="section-shell proof-grid"><p>Una clínica organizada se siente en cada consulta.</p><div><strong>Un solo lugar</strong><span>Adiós a la información dispersa.</span></div><div><strong>Cada paciente visible</strong><span>Contexto completo antes de atender.</span></div><div><strong>Decisiones con datos</strong><span>Métricas clínicas y financieras claras.</span></div></div></section>

      <ProductGallery />

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
