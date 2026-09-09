import {
  ArrowDown,
  ArrowUpRight,
  CakeSlice,
  Camera,
  Check,
  ChevronRight,
  CircleDot,
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

/** Edite livremente os serviços nesta lista para adaptar o catálogo do ateliê. */
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

/** Substitua os src por fotos reais em client/public/images quando quiser atualizar a galeria. */
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
    <div className={`gallery-placeholder ${className} ${tone} group relative overflow-hidden rounded-[1.6rem]`}>
      <div className="absolute inset-0 opacity-75 transition duration-500 group-hover:scale-105">
        <div className="gallery-orb gallery-orb-one" />
        <div className="gallery-orb gallery-orb-two" />
        <div className="gallery-line" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between text-[#fdf7ef]/80">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em]">Galeria</span>
          <Camera size={17} strokeWidth={1.4} />
        </div>
        <div>
          <p className="max-w-[12rem] font-display text-2xl leading-none tracking-[-0.03em] text-white/95 sm:text-3xl">{label}</p>
          <div className="mt-4 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#fdf7ef]/75">
            <span>Substitua por sua foto</span>
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
    <div className="min-h-screen overflow-hidden bg-[#fbf8f3] text-[#463121]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="Voltar ao início" className="flex items-center gap-3">
            <BrandLogo variant="mark" className="rounded-full mix-blend-multiply" />
            <span className="hidden text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#6e4c2d] sm:block">Ateliê Momento Perfeito</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-[#76583c] transition hover:text-[#a47b45]">
                {item.label}
              </a>
            ))}
            <WhatsAppButton className="ml-1 px-4 py-2.5 text-xs" />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-full border border-[#d7c4ae] p-2 text-[#76583c] transition hover:bg-[#f3e9dc] md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <nav className="mx-4 rounded-2xl border border-[#eadbc9] bg-[#fffaf5]/95 p-4 shadow-[0_18px_45px_rgba(79,52,29,0.12)] backdrop-blur-md md:hidden" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#eadbc9] px-3 py-3.5 text-sm font-semibold text-[#76583c] last:border-b-0">
                {item.label}
                <ChevronRight size={15} />
              </a>
            ))}
            <WhatsAppButton className="mt-3 w-full" />
          </nav>
        ) : null}
      </header>

      <main>
        <section id="inicio" className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#f3e8db] px-5 pb-16 pt-28 sm:min-h-[760px] sm:px-8 lg:min-h-[810px] lg:px-12">
          <div className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle_at_10%_15%,rgba(255,255,255,.62),transparent_28%),radial-gradient(circle_at_90%_12%,rgba(213,179,139,.3),transparent_30%),radial-gradient(circle_at_70%_100%,rgba(255,255,255,.66),transparent_36%)]" />
          <div className="absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full border border-[#d5b88e]/50 sm:h-96 sm:w-96" />
          <div className="absolute -right-3 top-28 -z-10 h-64 w-64 rounded-full border border-[#d5b88e]/30 sm:h-80 sm:w-80" />
          <FlowerMark className="absolute -bottom-3 -left-8 h-56 w-56 rotate-[-10deg] text-[#c6a271]/40 sm:h-72 sm:w-72" />
          <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-[#b78d53] shadow-[0_0_0_7px_rgba(183,141,83,.18)]" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
            <div className="max-w-2xl">
              <div className="mb-8 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#9e7542]">
                <span className="h-px w-12 bg-[#b58b55]" />
                Cerimonial & eventos
              </div>
              <h1 className="font-display max-w-[11ch] text-[4.2rem] leading-[0.87] tracking-[-0.06em] text-[#4a3321] sm:text-[6rem] lg:text-[7rem]">
                Momentos <em className="text-[#a37643]">feitos</em> à mão.
              </h1>
              <p className="mt-7 max-w-md text-lg leading-8 text-[#765c43] sm:text-xl">
                Personalizados, presentes e detalhes que transformam celebrações em memórias para guardar.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <WhatsAppButton />
                <a href="#sobre" className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#80613f] transition hover:text-[#a37643]">
                  Conheça o ateliê
                  <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-1" />
                </a>
              </div>
              <div className="mt-12 flex items-center gap-4 border-t border-[#d7c1a6] pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#92704b]">
                <MapPin size={15} strokeWidth={1.5} />
                <span>Porto Feliz — SP</span>
                <span className="h-1 w-1 rounded-full bg-[#b58b55]" />
                <span>By Elvira Santos</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[510px] lg:mx-0 lg:ml-auto">
              <div className="absolute -left-7 top-14 h-52 w-52 rounded-full bg-[#ead7c0]/60 blur-3xl sm:-left-10 sm:h-72 sm:w-72" />
              <div className="relative mx-auto max-w-[350px] sm:max-w-[410px] lg:max-w-[455px]">
                <div className="absolute -inset-5 rounded-[50%] border border-[#caa875]/55 [transform:rotate(8deg)] sm:-inset-7" />
                <div className="absolute -inset-1 rounded-[50%] border border-[#fdf9f1]/80 [transform:rotate(-4deg)]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_44%_44%/42%_42%_56%_56%] bg-[#ddc3a4] shadow-[0_28px_65px_rgba(111,74,38,0.2)]">
                  <img src="/logo.png" alt="Logo oficial do Ateliê Momento Perfeito" className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#8d6338]/20 to-transparent" />
                </div>
                <div className="absolute -bottom-8 -left-4 flex items-center gap-3 rounded-full border border-[#ead9c2] bg-[#fbf5ed]/90 px-4 py-3 shadow-[0_15px_30px_rgba(108,71,35,0.12)] backdrop-blur-sm sm:-left-8">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b58b55] text-[#fff9ef]"><Heart size={15} fill="currentColor" /></div>
                  <div>
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#a37744]">Feito com</p>
                    <p className="font-display text-lg leading-none text-[#5a3e28]">carinho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="relative bg-[#fbf8f3] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div className="relative pl-12 sm:pl-20">
              <FlowerMark className="absolute -left-2 top-0 h-48 w-48 text-[#ba8f57] sm:-left-3 sm:h-64 sm:w-64" />
              <p className="relative pt-36 font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[#4c3523] sm:pt-48 sm:text-5xl">Um toque de <em className="text-[#a37643]">afeto</em><br />em cada detalhe.</p>
              <div className="mt-7 flex items-center gap-3 text-[#b58b55]"><span className="h-px w-14 bg-current" /><span className="h-1.5 w-1.5 rounded-full bg-current" /><span className="h-px w-14 bg-current" /></div>
            </div>
            <div className="max-w-2xl lg:pt-9">
              <SectionHeading eyebrow="Sobre o ateliê" title="Tudo começa com uma intenção bonita." description="O Ateliê Momento Perfeito nasceu do desejo de transformar ideias em experiências que ficam na memória." />
              <div className="mt-8 space-y-5 text-base leading-8 text-[#796653]">
                <p>À frente de cada criação está <strong className="font-semibold text-[#5b3f27]">Elvira Santos</strong>, que coloca olhar sensível, escuta e cuidado em tudo o que faz. Do primeiro rascunho ao acabamento final, cada peça é pensada para ter significado.</p>
                <p>Em Porto Feliz, o ateliê cria para celebrações grandes e pequenos gestos — sempre com delicadeza, personalidade e a alegria de fazer à mão.</p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                {["Criado em Porto Feliz", "Artesanal", "Sob medida"].map((tag) => <span key={tag} className="rounded-full border border-[#dfccb6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#997347]">{tag}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="relative bg-[#4c3626] px-5 py-24 text-[#fffaf3] sm:px-8 sm:py-32 lg:px-12">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full border border-[#d6b98d]/20" />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full border border-[#d6b98d]/15" />
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading eyebrow="O que fazemos" title="Para celebrar do seu jeito." description="Serviços pensados para dar forma ao que você imaginou — com beleza, cuidado e a identidade do seu momento." light />
              <p className="max-w-xs text-sm leading-6 text-[#cdb9a3] lg:pb-1">Cada projeto é único. Vamos conversar sobre o que você tem em mente?</p>
            </div>
            <div className="mt-16 grid gap-0 border-y border-[#cdb9a3]/25 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ number, icon: Icon, title, description }) => (
                <article key={number} className="group border-b border-[#cdb9a3]/25 py-8 sm:px-7 sm:py-10 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                  <div className="flex items-center justify-between text-[#caa875]"><span className="font-display text-3xl">{number}</span><Icon size={25} strokeWidth={1.2} className="transition duration-200 group-hover:scale-110 group-hover:text-[#f0d8b0]" /></div>
                  <h3 className="mt-14 font-display text-3xl tracking-[-0.025em] text-[#fffaf3]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#cdb9a3]">{description}</p>
                  <a href="#contato" className="mt-7 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#dfc39a] transition hover:text-white">Saiba mais <ArrowUpRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-[#f5eee6] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Galeria de inspirações" title="Feito para o seu momento." />
              <p className="max-w-xs text-sm leading-6 text-[#806b57] sm:pb-1">Em breve, um álbum com os trabalhos mais especiais do ateliê.</p>
            </div>
            <div className="mt-14 grid auto-rows-[180px] gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4 lg:auto-rows-[250px]">
              {galleryItems.map((item) => <GalleryPlaceholder key={item.label} {...item} />)}
            </div>
            <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b764c]"><CircleDot size={13} /> Substitua os espaços pelas fotos dos seus trabalhos</div>
          </div>
        </section>

        <section className="relative bg-[#fbf8f3] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.85fr] lg:gap-24">
            <div>
              <SectionHeading eyebrow="Por que escolher o Momento Perfeito" title="O que torna cada criação especial?" description="Mais do que fazer bonito, a gente acredita em fazer sentido." />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => <div key={reason} className="flex items-center gap-3 border-t border-[#e2d2c0] pt-4 text-sm font-semibold text-[#64472d]"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ecdfcf] text-[#a37643]"><Check size={14} strokeWidth={2.2} /></span>{reason}</div>)}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#ead8c3] p-8 sm:p-12">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#b58b55]/35" />
              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border border-[#b58b55]/25" />
              <div className="relative">
                <CakeSlice className="mb-10 text-[#a37643]" size={34} strokeWidth={1.2} />
                <p className="font-display text-[2.9rem] leading-[0.95] tracking-[-0.04em] text-[#4c3523] sm:text-5xl">Seu momento merece ser <em className="text-[#a37643]">perfeito</em>.</p>
                <p className="mt-7 max-w-sm text-sm leading-6 text-[#785d42]">Da ideia ao último detalhe, criamos com presença para que você possa viver a celebração com leveza.</p>
                <div className="mt-9 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#956e42]"><span className="h-px w-10 bg-[#b58b55]" /> Elvira Santos</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-[#7b5735] px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_12%_30%,#f8ead5_0_1px,transparent_1px),radial-gradient(circle_at_72%_70%,#f8ead5_0_1px,transparent_1px)] [background-size:34px_34px,46px_46px]" />
          <FlowerMark className="absolute -right-4 top-4 h-64 w-64 rotate-[180deg] text-[#e8cc9e]/25 sm:h-80 sm:w-80" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#e4c795]">Vamos criar juntos?</p>
            <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.05em] text-[#fffaf3] sm:text-7xl">O próximo momento<br /><em className="text-[#e5c38a]">começa aqui.</em></h2>
            <p className="mx-auto mt-7 max-w-md text-base leading-7 text-[#e0cbb0]">Conte para a Elvira o que você está imaginando. Será um prazer transformar sua ideia em algo único.</p>
            <WhatsAppButton variant="light" className="mt-9 px-6 py-3.5" />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0cbb0]"><span className="inline-flex items-center gap-2"><MapPin size={14} /> Porto Feliz — SP</span><span className="hidden h-1 w-1 rounded-full bg-[#d6b98d] sm:block" /><span>(15) 99685-5481</span></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3d2c20] px-5 py-12 text-[#e4d2ba] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3"><BrandLogo variant="mark" className="rounded-full mix-blend-screen opacity-90" /><div><p className="font-display text-2xl leading-none text-[#f5e8d6]">Momento Perfeito</p><p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#bfa27f]">By Elvira Santos</p></div></div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#ae957b]">Detalhes artesanais para celebrar o que realmente importa.</p>
          </div>
          <div className="flex flex-col gap-4 text-sm sm:items-end"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#d7bd9c] transition hover:text-white"><Instagram size={16} /> Acompanhe no Instagram</a><a href="https://wa.me/5515996855481" target="_blank" rel="noreferrer" className="text-[#ae957b] transition hover:text-[#f5e8d6]">(15) 99685-5481</a></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#82664d]/40 pt-5 text-[0.66rem] uppercase tracking-[0.12em] text-[#8f755e] sm:flex-row sm:items-center sm:justify-between"><span>Porto Feliz — SP</span><span>© {new Date().getFullYear()} Ateliê Momento Perfeito</span></div>
      </footer>
    </div>
  );
}
