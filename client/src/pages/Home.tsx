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
    description: "Caixas decoradas, papelaria fina e detalhes exclusivos para compor a mesa principal do seu evento.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Lembrancinhas Afetuosas",
    description: "Mimos delicados e cheios de significado para casamentos, batizados, aniversários e maternidade.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Presentes Especiais",
    description: "Kits e composições artesanais sob medida para homenagear e surpreender quem você ama.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Itens de Decoração",
    description: "Peças decorativas feitas à mão para trazer aconchego ao ambiente e à celebração.",
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
    <div className="min-h-screen bg-[#f8f5f0] text-[#3d2c20] selection:bg-[#d8c0a3] selection:text-[#2d1f15] antialiased">
      {/* Header Fixo - Fundo 100% Sólido para não sobrepor o texto */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#f8f5f0] border-b border-[#e5d8c8] shadow-xs transition-shadow duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" aria-label="Ateliê Momento Perfeito" className="group flex items-center gap-3">
            <BrandLogo variant="mark" className="h-8 w-8 rounded-full mix-blend-multiply transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#614530] transition-colors group-hover:text-[#312015]">
              Momento Perfeito
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-[#735843] transition-colors duration-200 hover:text-[#3d2c20]"
              >
                {item.label}
              </a>
            ))}
            {/* Botão no Header com Microinteração */}
            <WhatsAppButton className="!bg-[#3e2c20] !text-[#f8f5f0] [&_*]:!text-[#f8f5f0] [&_*]:!fill-[#f8f5f0] hover:!bg-[#573e2e] px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 hover:shadow-xs active:scale-95" />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((curr) => !curr)}
            className="p-1 text-[#614530] transition-transform active:scale-90 md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="border-b border-[#e5d8c8] bg-[#f8f5f0] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-medium text-[#614530]"
                >
                  {item.label}
                  <ChevronRight size={16} />
                </a>
              ))}
              <WhatsAppButton className="mt-2 w-full justify-center !bg-[#3e2c20] !text-[#f8f5f0] [&_*]:!text-[#f8f5f0] [&_*]:!fill-[#f8f5f0] hover:!bg-[#573e2e] py-2.5 rounded-full" />
            </div>
          </nav>
        )}
      </header>

      <main className="pt-20">
        {/* Hero / Apresentação Editorial */}
        <section id="inicio" className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#916e4b]">
                Ateliê de Festas & Eventos
              </p>

              <h1 className="font-display mt-4 text-4xl font-normal leading-[1.1] text-[#312015] sm:text-6xl">
                Detalhes artesanais feitos para <em className="italic font-serif text-[#8f683d] transition-colors hover:text-[#6e4e2b]">eternizar</em> celebrações.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#685341] sm:text-lg">
                No Ateliê Momento Perfeito, transformamos papelaria, lembrancinhas e presentes em memórias físicas. Tudo feito à mão em Porto Feliz, com o cuidado que sua festa merece.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton className="!bg-[#3e2c20] !text-[#f8f5f0] [&_*]:!text-[#f8f5f0] [&_*]:!fill-[#f8f5f0] hover:!bg-[#573e2e] px-5 py-3 text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-xs" />
                <a
                  href="#sobre"
                  className="group inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#614530] transition-colors hover:text-[#312015]"
                >
                  Conheça o Ateliê <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>

              <div className="mt-12 flex items-center gap-2 text-xs font-medium text-[#826953]">
                <MapPin size={14} className="text-[#916e4b]" />
                <span>Porto Feliz, SP — Atendimento sob encomenda</span>
              </div>
            </div>

            {/* Imagem do Ateliê com Transição Suave */}
            <div className="lg:col-span-5">
              <div className="group mx-auto max-w-sm rounded-2xl border border-[#e5d8c8] bg-[#f1e8dc]/80 p-3 transition-shadow duration-300 hover:shadow-md">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/logo.png"
                    alt="Ateliê Momento Perfeito - Elvira Santos"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-display text-lg text-[#312015]">By Elvira Santos</p>
                  <p className="text-xs text-[#7c6653]">Criação e confecção artesanal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Ateliê */}
        <section id="sobre" className="border-t border-[#e5d8c8] bg-[#f2ebd2]/20 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#916e4b]">
              História & Propósito
            </span>
            <h2 className="font-display mt-3 text-3xl font-normal text-[#312015] sm:text-4xl">
              Cada encomenda é tratada como única.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#685341] sm:text-lg">
              À frente do ateliê, <strong className="font-semibold text-[#312015]">Elvira Santos</strong> acompanha cada projeto do rascunho ao acabamento final. Acreditamos que festas e homenagens ganham vida nos pequenos detalhes — na escolha dos papéis, nas fitas, nas texturas e no carinho colocado em cada dobra.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {["Porto Feliz - SP", "Produção Sob Medida", "Feito à Mão"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#d8c8b4] bg-[#f8f5f0] px-4 py-1.5 text-xs font-medium text-[#614530] transition-transform duration-200 hover:-translate-y-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços (Animação Suave na Seta de Encomendar) */}
        <section id="servicos" className="border-t border-[#e5d8c8] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#916e4b]">
                O que preparamos
              </span>
              <h2 className="font-display mt-2 text-3xl text-[#312015] sm:text-4xl">
                Catálogo de Serviços
              </h2>
            </div>

            <div className="mt-12 divide-y divide-[#e5d8c8] border-y border-[#e5d8c8]">
              {services.map(({ number, icon: Icon, title, description }) => (
                <div key={number} className="group py-8 transition-colors duration-300 hover:bg-[#f2ebd2]/10">
                  <div className="grid gap-4 sm:grid-cols-12 sm:items-center">
                    <div className="flex items-center gap-4 sm:col-span-4">
                      <span className="font-display text-lg text-[#916e4b]">{number}</span>
                      <Icon size={18} className="text-[#614530] transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="font-display text-xl text-[#312015]">{title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#685341] sm:col-span-6">
                      {description}
                    </p>
                    <div className="sm:col-span-2 sm:text-right">
                      <a
                        href="https://wa.me/5515996855481"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#916e4b] transition-colors hover:text-[#312015]"
                      >
                        Encomendar <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="border-t border-[#e5d8c8] bg-[#efe6d8]/30 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#916e4b]">
                  Por que encomendar conosco
                </span>
                <h2 className="font-display mt-2 text-3xl text-[#312015] sm:text-4xl">
                  Trabalho focado na sua necessidade.
                </h2>
                <div className="mt-8 space-y-4">
                  {differentials.map((diff) => (
                    <div key={diff} className="group flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#916e4b] text-white transition-transform duration-300 group-hover:scale-110">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-[#4a392c] transition-colors group-hover:text-[#312015]">{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#d8c8b4] bg-[#f8f5f0] p-8 shadow-xs lg:col-span-6">
                <h3 className="font-display text-2xl text-[#312015]">Como funciona o pedido?</h3>
                <ol className="mt-6 space-y-4 text-sm text-[#685341]">
                  <li className="flex gap-3">
                    <strong className="text-[#916e4b]">1.</strong>
                    <span>Você entra em contato via WhatsApp e nos conta sobre o evento.</span>
                  </li>
                  <li className="flex gap-3">
                    <strong className="text-[#916e4b]">2.</strong>
                    <span>Definimos o tema, as peças, quantidades e prazos de entrega.</span>
                  </li>
                  <li className="flex gap-3">
                    <strong className="text-[#916e4b]">3.</strong>
                    <span>Produzimos e finalizamos tudo manualmente para retirada/envio.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada para Contato Direto */}
        <section id="contato" className="border-t border-[#e5d8c8] bg-[#3e2c20] px-6 py-20 text-[#f8f5f0]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8b896]">
              Fale com a Artesã
            </span>
            <h2 className="font-display mt-3 text-4xl text-[#f8f5f0] sm:text-5xl">
              Vamos planejar sua encomenda?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-[#d0bead] sm:text-base">
              Envie uma mensagem no WhatsApp com a data do seu evento e o que você precisa.
            </p>

            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                className="!bg-[#f8f5f0] !text-[#3e2c20] [&_*]:!text-[#3e2c20] [&_*]:!fill-[#3e2c20] hover:!bg-[#ffffff] px-6 py-3.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-xs rounded-full"
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#b8a390]">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Porto Feliz — SP</span>
              <span>Telefone: (15) 99685-5481</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Limpo */}
      <footer className="border-t border-[#312015] bg-[#2d1f15] px-6 py-8 text-[#a38e7c]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Ateliê Momento Perfeito — By Elvira Santos
          </p>
          <a
            href="https://www.instagram.com/momento_perfeito_by_elvira"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-[#d0bead] transition-colors hover:text-white"
          >
            <Instagram size={14} className="transition-transform duration-300 group-hover:scale-110" /> Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}