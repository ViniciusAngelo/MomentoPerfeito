import {
  ArrowDown,
  ArrowUpRight,
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
import { WhatsAppButton } from "@/components/WhatsAppButton";

const navItems = [
  { label: "O Ateliê", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    number: "01",
    icon: Gift,
    title: "Personalizados para Festas",
    description:
      "Caixas decoradas, papelaria fina e detalhes exclusivos para compor a mesa principal do seu evento.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Lembrancinhas Afetuosas",
    description:
      "Mimos delicados e cheios de significado para casamentos, batizados, aniversários e maternidade.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Presentes Especiais",
    description:
      "Kits e composições artesanais sob medida para homenagear e surpreender quem você ama.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Itens de Decoração",
    description:
      "Peças decorativas feitas à mão para trazer aconchego ao ambiente e à celebração.",
  },
];

const differentials = [
  "Atendimento direto com a artesã",
  "Produção 100% personalizada",
  "Acabamento rigoroso e cuidadoso",
  "Materiais e texturas selecionados",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf6f0] text-[#3d2c20] selection:bg-[#d8c0a3] selection:text-[#2d1f15] antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e5d8c8]/80 bg-[#faf6f0]/95 shadow-[0_8px_30px_rgba(61,44,32,0.05)] backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6">
          <a href="#inicio" aria-label="Ateliê Momento Perfeito" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c8b4] bg-[#f1e8dc] shadow-[inset_0_0_0_4px_#faf6f0] transition-transform duration-300 group-hover:rotate-6">
              <BrandLogo variant="mark" className="h-7 w-7 rounded-full mix-blend-multiply" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#614530] transition-colors group-hover:text-[#312015]">
              Momento Perfeito
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#735843] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#916e4b] after:transition-all after:duration-300 hover:text-[#3d2c20] hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton className="!bg-[#3e2c20] !text-[#faf6f0] [&_*]:!text-[#faf6f0] [&_*]:!fill-[#faf6f0] hover:!bg-[#573e2e] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] rounded-full shadow-[0_8px_18px_rgba(62,44,32,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(62,44,32,0.22)] active:translate-y-0" />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((curr) => !curr)}
            className="rounded-full border border-[#d8c8b4] p-2 text-[#614530] transition-all hover:bg-[#f1e8dc] active:scale-90 md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#e5d8c8] bg-[#faf6f0] px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[#e5d8c8]/70 py-3 text-sm font-semibold text-[#614530] last:border-0"
                >
                  {item.label}
                  <ChevronRight size={16} className="text-[#916e4b]" />
                </a>
              ))}
              <WhatsAppButton className="mt-4 w-full justify-center !bg-[#3e2c20] !text-[#faf6f0] [&_*]:!text-[#faf6f0] [&_*]:!fill-[#faf6f0] hover:!bg-[#573e2e] py-3 rounded-full" />
            </div>
          </nav>
        )}
      </header>

      <main className="pt-[76px]">
        <section id="inicio" className="relative isolate mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
          <div className="pointer-events-none absolute -right-40 -top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[#f2ebd2]/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-64 w-64 rounded-full bg-[#e8d4be]/30 blur-3xl" />

          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#916e4b]">
                <span className="h-px w-10 bg-[#b89670]" />
                Ateliê de Festas & Eventos
              </div>

              <h1 className="max-w-3xl font-display text-[2.8rem] font-normal leading-[1.08] tracking-[-0.025em] text-[#312015] sm:text-6xl lg:text-[4.65rem]">
                Detalhes artesanais feitos para <em className="font-display italic text-[#8f683d]">eternizar</em> celebrações.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-[1.8] text-[#685341] sm:text-lg">
                No Ateliê Momento Perfeito, transformamos papelaria, lembrancinhas e presentes em memórias físicas. Tudo feito à mão em Porto Feliz, com o cuidado que sua festa merece.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <WhatsAppButton className="!bg-[#3e2c20] !text-[#faf6f0] [&_*]:!text-[#faf6f0] [&_*]:!fill-[#faf6f0] hover:!bg-[#573e2e] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] rounded-full shadow-[0_10px_22px_rgba(62,44,32,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(62,44,32,0.24)] active:translate-y-0" />
                <a href="#sobre" className="group inline-flex items-center gap-2 border-b border-[#b89670] px-1 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#614530] transition-colors hover:border-[#3d2c20] hover:text-[#312015]">
                  Conheça o Ateliê
                  <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>

              <div className="mt-14 flex items-center gap-3 text-xs font-medium text-[#826953]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e8dc] text-[#916e4b]"><MapPin size={14} /></span>
                <span>Porto Feliz, SP <span className="mx-1 text-[#c5ad93]">—</span> Atendimento sob encomenda</span>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#d8c8b4]/50 rotate-3" />
              <div className="group relative mx-auto max-w-sm rounded-[1.5rem] border border-[#d8c8b4] bg-[#f1e8dc] p-3 shadow-[0_22px_55px_rgba(83,58,37,0.13)] transition-transform duration-500 hover:-translate-y-1">
                <div className="overflow-hidden rounded-[1.05rem]">
                  <img src="/logo.png" alt="Ateliê Momento Perfeito - Elvira Santos" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="flex items-end justify-between px-2 pb-1 pt-5">
                  <div>
                    <p className="font-display text-xl text-[#312015]">By Elvira Santos</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#7c6653]">Criação artesanal</p>
                  </div>
                  <Sparkles size={18} className="mb-1 text-[#916e4b]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-[#e5d8c8] bg-[#f2ebd2]/35 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#916e4b]">História & Propósito</span>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#312015] sm:text-5xl">Cada encomenda é tratada como única.</h2>
            <p className="mt-7 text-base leading-[1.9] text-[#685341] sm:text-lg">
              À frente do ateliê, <strong className="font-semibold text-[#312015]">Elvira Santos</strong> acompanha cada projeto do rascunho ao acabamento final. Acreditamos que festas e homenagens ganham vida nos pequenos detalhes — na escolha dos papéis, nas fitas, nas texturas e no carinho colocado em cada dobra.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Porto Feliz - SP", "Produção Sob Medida", "Feito à Mão"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#d8c8b4] bg-[#faf6f0] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#614530] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b89670]">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#916e4b]">O que preparamos</span>
                <h2 className="mt-3 font-display text-3xl text-[#312015] sm:text-5xl">Catálogo de Serviços</h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[#826953] sm:text-right">Peças pensadas para combinar com a sua história, seu estilo e o seu momento.</p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {services.map(({ number, icon: Icon, title, description }) => (
                <div key={number} className="group relative rounded-2xl border border-[#e5d8c8] bg-[#fdfaf6] p-7 shadow-[0_8px_24px_rgba(83,58,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb295] hover:shadow-[0_16px_34px_rgba(83,58,37,0.10)] sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl text-[#b89670]/70">{number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e8dc] text-[#614530] transition-colors group-hover:bg-[#3e2c20] group-hover:text-[#f8f5f0]"><Icon size={18} /></span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl text-[#312015]">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#685341]">{description}</p>
                  <a href="https://wa.me/5515996855481" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#916e4b] transition-colors hover:text-[#312015]">
                    Encomendar <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="border-y border-[#e5d8c8] bg-[#efe6d8]/45 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
              <div className="lg:col-span-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#916e4b]">Por que encomendar conosco</span>
                <h2 className="mt-3 font-display text-3xl leading-tight text-[#312015] sm:text-5xl">Trabalho focado na sua necessidade.</h2>
                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  {differentials.map((diff) => (
                    <div key={diff} className="group flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#916e4b] text-[#faf6f0] shadow-sm transition-transform duration-300 group-hover:scale-110"><Check size={12} strokeWidth={3} /></span>
                      <span className="text-sm font-medium leading-relaxed text-[#4a392c]">{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#d8c8b4] bg-[#faf6f0] p-8 shadow-[0_16px_36px_rgba(83,58,37,0.08)] lg:col-span-6 lg:p-10">
                <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#f2ebd2]" />
                <h3 className="relative font-display text-2xl text-[#312015] sm:text-3xl">Como funciona o pedido?</h3>
                <ol className="relative mt-7 space-y-5 text-sm leading-relaxed text-[#685341]">
                  <li className="flex gap-4"><strong className="font-display text-xl text-[#916e4b]">1.</strong><span>Você entra em contato via WhatsApp e nos conta sobre o evento.</span></li>
                  <li className="flex gap-4"><strong className="font-display text-xl text-[#916e4b]">2.</strong><span>Definimos o tema, as peças, quantidades e prazos de entrega.</span></li>
                  <li className="flex gap-4"><strong className="font-display text-xl text-[#916e4b]">3.</strong><span>Produzimos e finalizamos tudo manualmente para retirada/envio.</span></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-[#3e2c20] px-6 py-24 text-[#faf6f0] sm:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89670]/20" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#d8b896]">Fale com a Artesã</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[#faf6f0] sm:text-6xl">Vamos planejar sua encomenda?</h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#d0bead] sm:text-base">Envie uma mensagem no WhatsApp com a data do seu evento e o que você precisa.</p>
            <div className="mt-9 flex justify-center">
              <WhatsAppButton className="!bg-[#faf6f0] !text-[#3e2c20] [&_*]:!text-[#3e2c20] [&_*]:!fill-[#3e2c20] hover:!bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_12px_25px_rgba(0,0,0,0.18)] rounded-full" />
            </div>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#b8a390]"><span className="flex items-center gap-1.5"><MapPin size={14} /> Porto Feliz — SP</span><span>Telefone: (15) 99685-5481</span></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#312015] bg-[#2d1f15] px-6 py-9 text-[#a38e7c]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} Ateliê Momento Perfeito — By Elvira Santos</p>
          <a href="https://www.instagram.com/momento_perfeito_by_elvira" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-xs text-[#d0bead] transition-colors hover:text-white"><Instagram size={14} className="transition-transform duration-300 group-hover:scale-110" /> Instagram</a>
        </div>
      </footer>
    </div>
  );
}
