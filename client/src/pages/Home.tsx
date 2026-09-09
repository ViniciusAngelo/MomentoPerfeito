import {
  ArrowDown,
  ArrowUpRight,
  CakeSlice,
  Camera,
  Check,
  ChevronRight,
  Gift,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Palette,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    number: "01",
    icon: Gift,
    title: "Personalizados",
    description: "Peças pensadas para celebrar a sua história com identidade, beleza e intenção.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Lembrancinhas",
    description: "Pequenos detalhes que guardam grandes memórias e fazem cada convidado se sentir especial.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Presentes",
    description: "Composições delicadas para presentear com afeto, cuidado e um toque só seu.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Decoração",
    description: "Elementos artesanais que transformam ambientes em cenários acolhedores e inesquecíveis.",
  },
];

const galleryItems = [
  { label: "Detalhes que encantam", className: "gallery-tall", tone: "gallery-sand" },
  { label: "Feito para celebrar", className: "gallery-wide", tone: "gallery-rose" },
  { label: "Amor em cada escolha", className: "gallery-square", tone: "gallery-cream" },
  { label: "Memórias personalizadas", className: "gallery-wide gallery-offset", tone: "gallery-olive" },
];

const reasons = [
  "Carinho em cada etapa",
  "Personalização de verdade",
  "Atenção aos detalhes",
  "Exclusividade para o seu momento",
];

function FlowerMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={className} fill="none">
      <path d="M50 94C50 67 48 43 34 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M49 65C35 64 23 57 16 48M48 52C59 50 68 43 73 34M48 75C38 76 29 72 23 66" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 48C19 40 26 37 34 40C29 46 23 49 16 48ZM73 34C74 26 69 21 61 21C63 28 67 32 73 34ZM23 66C27 58 34 57 42 61C37 67 30 68 23 66Z" fill="currentColor" opacity=".55" />
      <circle cx="34" cy="20" r="2" fill="currentColor" />
      <circle cx="35" cy="14" r="3" fill="currentColor" opacity=".5" />
      <circle cx="29" cy="16" r="2.4" fill="currentColor" opacity=".65" />
      <circle cx="40" cy="17" r="2.4" fill="currentColor" opacity=".65" />
    </svg>
  );
}

function GalleryPlaceholder({ label, className, tone }: (typeof galleryItems)[number]) {
  return (
    <div className={`gallery-placeholder ${className} ${tone} group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}>
      <div className="absolute inset-0 opacity-75 transition duration-500 group-hover:scale-105">
        <div className="gallery-orb gallery-orb-one" />
        <div className="gallery-orb gallery-orb-two" />
        <div className="gallery-line" />
      </div>
      <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between">
        <div className="flex items-center justify-between text-[#fdf7ef]/80">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em]">Galeria</span>
          <Camera size={18} strokeWidth={1.4} />
        </div>
        <div>
          <p className="max-w-[14rem] font-display text-2xl font-medium leading-tight text-white/95 sm:text-3xl">{label}</p>
          <div className="mt-4 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#fdf7ef]/80 transition-transform group-hover:translate-x-1">
            <span>Ver detalhes</span>
            <ChevronRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf6f0] text-[#463121] selection:bg-[#dfc39a] selection:text-[#3d2c20]">
      {/* Header Fixo com Glassmorphism */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#faf6f0]/80 backdrop-blur-md border-b border-[#e8d8c5]/50 transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="Voltar ao início" className="flex items-center gap-3 group">
            <BrandLogo variant="mark" className="rounded-full mix-blend-multiply transition-transform group-hover:scale-105" />
            <span className="hidden text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#6e4c2d] sm:block">Ateliê Momento Perfeito</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76583c] transition hover:text-[#a47b45]">
                {item.label}
              </a>
            ))}
            <WhatsAppButton className="ml-2 px-5 py-2.5 text-xs shadow-sm hover:shadow-md transition-all" />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-full border border-[#d7c4ae] p-2 text-[#76583c] transition hover:bg-[#f3e9dc] md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen ? (
          <nav className="mx-4 mb-4 rounded-2xl border border-[#eadbc9] bg-[#fffaf5]/98 p-5 shadow-xl backdrop-blur-md md:hidden" aria-label="Navegação mobile">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#76583c] hover:bg-[#f3e9dc]/50 transition">
                  {item.label}
                  <ChevronRight size={15} />
                </a>
              ))}
            </div>
            <WhatsAppButton className="mt-4 w-full justify-center" />
          </nav>
        ) : null}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-b from-[#f5ebd8]/60 to-[#faf6f0] px-5 py-16 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_10%_15%,rgba(255,255,255,.8),transparent_30%),radial-gradient(circle_at_90%_12%,rgba(213,179,139,.25),transparent_35%)]" />
          <FlowerMark className="absolute -bottom-6 -left-10 h-64 w-64 rotate-[-10deg] text-[#c6a271]/30 sm:h-80 sm:w-80 pointer-events-none" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="max-w-2xl lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d2ba9c]/40 bg-[#fff9f0]/80 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#b58b55] animate-pulse" />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9e7542]">Cerimonial & Eventos</span>
              </div>
              
              <h1 className="font-display text-[3.8rem] font-normal leading-[0.92] tracking-[-0.04em] text-[#4a3321] sm:text-[5.5rem] lg:text-[6.2rem]">
                Momentos <em className="italic font-normal text-[#a37643]">feitos</em> à mão.
              </h1>
              
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#765c43] sm:text-xl">
                Personalizados, presentes e detalhes artesanais que transformam celebrações em memórias inesquecíveis.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton className="shadow-lg shadow-[#b58b55]/15 hover:shadow-xl hover:shadow-[#b58b55]/25 transition-all" />
                <a href="#sobre" className="group inline-flex items-center gap-2 rounded-full border border-[#d5c3af] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#80613f] transition hover:bg-[#f1e4d3]/50">
                  Conheça o ateliê
                  <ArrowDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                </a>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-[#e2cfbb] pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#92704b]">
                <span className="flex items-center gap-1.5"><MapPin size={15} strokeWidth={1.8} className="text-[#b58b55]" /> Porto Feliz — SP</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#b58b55]/40" />
                <span>By Elvira Santos</span>
              </div>
            </div>

            {/* Foto Hero em Arco Orgânico */}
            <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[180px_180px_40px_40px] border-4 border-[#fffdfa] bg-[#e3cfb7] shadow-[0_25px_50px_-12px_rgba(80,50,20,0.18)]">
                <img src="/logo.png" alt="Logo oficial do Ateliê Momento Perfeito" className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a3321]/30 via-transparent to-transparent" />
              </div>

              {/* Tag de Destaque Flutuante */}
              <div className="absolute -bottom-6 -left-2 flex items-center gap-3.5 rounded-2xl border border-[#ebdccb] bg-[#fffdfa]/95 p-4 shadow-xl backdrop-blur-md sm:-left-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b58b55] text-[#fff9ef] shadow-inner">
                  <Heart size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#a37744]">Atendimento Exclusivo</p>
                  <p className="font-display text-lg font-medium text-[#5a3e28]">Feito com carinho</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="relative bg-[#faf6f0] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-[#eaddcd] p-10 sm:p-14 text-center">
                <FlowerMark className="mx-auto h-40 w-40 text-[#ba8f57]/80" />
                <p className="mt-6 font-display text-3xl font-medium leading-snug text-[#4c3523] sm:text-4xl">
                  Um toque de <em className="italic text-[#a37643]">afeto</em> em cada detalhe.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <SectionHeading 
                eyebrow="Sobre o ateliê" 
                title="Tudo começa com uma intenção bonita." 
                description="O Ateliê Momento Perfeito nasceu do desejo de transformar ideias em experiências artesanais inesquecíveis." 
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#796653]">
                <p>
                  À frente de cada criação está <strong className="font-semibold text-[#5b3f27]">Elvira Santos</strong>, que coloca olhar sensível, escuta e cuidado em tudo o que faz. Do primeiro rascunho ao acabamento final, cada peça é pensada para carregar significado puro.
                </p>
                <p>
                  Em Porto Feliz, o ateliê cria para celebrações marcantes e pequenos gestos do dia a dia — sempre com delicadeza, personalidade e a arte de fazer com as mãos.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Criado em Porto Feliz", "Processo 100% Artesanal", "Projetos Sob Medida"].map((tag) => (
                  <span key={tag} className="rounded-full border border-[#d0bc9f]/60 bg-[#f3ebd9]/40 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#8c673d]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="relative bg-[#463121] px-5 py-24 text-[#fffaf3] sm:px-8 sm:py-32 lg:px-12">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHeading 
                eyebrow="O que fazemos" 
                title="Para celebrar do seu jeito." 
                description="Serviços desenvolvidos para dar forma aos seus sonhos com delicadeza, sofisticação e a identidade do seu evento." 
                light 
              />
              <p className="max-w-xs text-sm text-[#cdb9a3]">Cada projeto é único. Vamos conversar sobre o que você deseja criar?</p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ number, icon: Icon, title, description }) => (
                <article key={number} className="group relative rounded-2xl border border-[#cdb9a3]/15 bg-[#543b2a]/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#caa875]/40 hover:bg-[#543b2a]/80">
                  <div className="flex items-center justify-between text-[#caa875]">
                    <span className="font-display text-2xl font-light">{number}</span>
                    <Icon size={24} strokeWidth={1.3} className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#f0d8b0]" />
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-medium tracking-tight text-[#fffaf3]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#cdb9a3]">{description}</p>
                  <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#dfc39a] transition hover:text-white">
                    Saiba mais <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>



        {/* Razões / Diferenciais */}
        <section className="relative border-t border-[#e8d8c5]/60 bg-[#f5ebd8]/30 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading 
                eyebrow="Por que o Momento Perfeito" 
                title="O que torna cada criação especial?" 
                description="Mais do que um acabamento bonito, acreditamos no valor sentimental de cada peça." 
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-3.5 rounded-xl border border-[#e2d2c0]/60 bg-[#fffdfa] p-4 shadow-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1e3d3] text-[#a37643]">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-semibold text-[#5c422b]">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#e0ccb6] p-8 sm:p-12 lg:col-span-5">
              <CakeSlice className="mb-8 text-[#a37643]" size={36} strokeWidth={1.2} />
              <p className="font-display text-4xl font-medium leading-tight text-[#4c3523]">
                Seu momento merece ser <em className="italic text-[#a37643]">perfeito</em>.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#785d42]">
                Da escolha dos materiais até a entrega final, trabalhamos com carinho absoluto para que você viva sua celebração com leveza.
              </p>
              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#956e42]">
                <span className="h-px w-8 bg-[#b58b55]" /> Elvira Santos
              </div>
            </div>
          </div>
        </section>

        {/* CTA Contato */}
        <section id="contato" className="relative overflow-hidden bg-[#7b5735] px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
          <FlowerMark className="absolute -right-8 -top-8 h-80 w-80 rotate-180 text-[#e8cc9e]/15 pointer-events-none" />
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#e4c795]">Vamos criar juntos?</p>
            <h2 className="font-display text-5xl font-normal leading-tight text-[#fffaf3] sm:text-7xl">
              O seu próximo momento <br /><em className="italic font-normal text-[#e5c38a]">começa aqui.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#e0cbb0]">
              Entre em contato diretamente no WhatsApp com a Elvira. Será um prazer transformar suas ideias em algo inesquecível.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton variant="light" className="px-8 py-4 text-sm shadow-xl" />
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.16em] text-[#e0cbb0]">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Porto Feliz — SP</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#d6b98d] sm:block" />
              <span>(15) 99685-5481</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#322319] px-5 py-12 text-[#e4d2ba] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo variant="mark" className="rounded-full mix-blend-screen opacity-90" />
              <div>
                <p className="font-display text-xl text-[#f5e8d6]">Momento Perfeito</p>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#bfa27f]">By Elvira Santos</p>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-xs text-[#ae957b]">Detalhes artesanais e personalizados feitos sob medida para você.</p>
          </div>

          <div className="flex flex-col gap-3 text-sm sm:items-end">
            <a href="https://www.instagram.com/momento_perfeito_by_elvira?stkn=bnRyOXA0YWw2dHU2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#d7bd9c] transition hover:text-white">
              <Instagram size={16} /> Instagram
            </a>
            <a href="https://wa.me/5515996855481" target="_blank" rel="noreferrer" className="text-xs text-[#ae957b] transition hover:text-white">
              (15) 99685-5481
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-[#82664d]/30 pt-6 text-[0.65rem] uppercase tracking-[0.14em] text-[#8f755e] sm:flex-row sm:items-center sm:justify-between">
          <span>Porto Feliz — SP</span>
          <span>© {new Date().getFullYear()} Ateliê Momento Perfeito</span>
        </div>
      </footer>
    </div>
  );
}