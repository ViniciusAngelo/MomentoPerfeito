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
    description: "Caixas decoradas, papelaria fina e composição de mesa desenvolvidas exclusivamente para o seu evento.",
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
    description: "Kits e composições artesanais sob medida para homenagear e surpreender em momentos marcantes.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Itens de Decoração",
    description: "Peças decorativas feitas à mão que trazem aconchego, sofisticação e charme ao ambiente.",
  },
];

const differentials = [
  "Atendimento exclusivo e direto com a artesã",
  "Design e produção 100% personalizados",
  "Acabamento minucioso e de alto padrão",
  "Curadoria rigorosa de papéis e tecidos",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c221e] selection:bg-[#c5a059]/20 selection:text-[#1c1613]">
      {/* Header Fixo Minimalista */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#e8e2d9]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#inicio" aria-label="Ateliê Momento Perfeito" className="flex items-center gap-3 group">
            <BrandLogo variant="mark" className="h-7 w-7 rounded-full mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#4a3e3d]">
              Momento Perfeito
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[#6e605d] transition-colors hover:text-[#c5a059]"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton className="ml-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1c1613] hover:bg-[#382d27] transition-all rounded-none tracking-widest uppercase" />
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((curr) => !curr)}
            className="p-1 text-[#2c221e] md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="border-b border-[#e8e2d9] bg-[#faf8f5] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-xs font-medium tracking-[0.15em] uppercase text-[#4a3e3d]"
                >
                  {item.label}
                  <ChevronRight size={14} className="text-[#c5a059]" />
                </a>
              ))}
              <WhatsAppButton className="mt-3 w-full justify-center text-white bg-[#1c1613] py-3 text-xs tracking-widest uppercase rounded-none" />
            </div>
          </nav>
        )}
      </header>

      <main className="pt-24">
        {/* Hero Section Editorial */}
        <section id="inicio" className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 border-b border-[#c5a059]/40 pb-2">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#c5a059]">
                  Ateliê de Celebrações
                </span>
              </div>

              <h1 className="font-display mt-6 text-4xl font-normal leading-[1.1] text-[#1c1613] sm:text-6xl lg:text-[4.2rem]">
                A arte de transformar momentos em <em className="italic font-serif font-normal text-[#c5a059]">memórias tangíveis</em>.
              </h1>

              <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-[#5c504c] sm:text-lg">
                Criações artesanais exclusivas desenvolvidas em Porto Feliz. Papelaria fina, lembrancinhas e mimos afetivos feitos sob medida para a sua celebração.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <WhatsAppButton className="px-7 py-4 text-xs font-semibold tracking-widest uppercase text-white bg-[#1c1613] hover:bg-[#382d27] transition-all rounded-none" />
                <a
                  href="#sobre"
                  className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#4a3e3d] transition-colors hover:text-[#c5a059]"
                >
                  O Ateliê <ArrowDown size={13} className="text-[#c5a059]" />
                </a>
              </div>

              <div className="mt-16 flex items-center gap-3 text-[0.7rem] font-medium tracking-wider uppercase text-[#8c7e7a]">
                <MapPin size={13} className="text-[#c5a059]" />
                <span>Porto Feliz, SP — Atendimento Sob Encomenda</span>
              </div>
            </div>

            {/* Foto Hero Sofisticada com Moldura */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 border border-[#c5a059]/30 translate-x-2 translate-y-2 pointer-events-none" />
                <div className="relative bg-[#f2ede4] p-3 border border-[#e8e2d9]">
                  <div className="overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="Ateliê Momento Perfeito - Elvira Santos"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="py-4 text-center">
                    <p className="font-display text-base tracking-wide text-[#1c1613]">By Elvira Santos</p>
                    <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.2em] text-[#8c7e7a]">Design & Confecção Artesanal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Ateliê */}
        <section id="sobre" className="border-t border-[#e8e2d9] bg-[#f5f0e6]/50 px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#c5a059]">
              Nossa Filosofia
            </span>
            <h2 className="font-display mt-4 text-3xl font-normal text-[#1c1613] sm:text-5xl">
              Cuidado absoluto em cada dobra e textura.
            </h2>
            <div className="mx-auto mt-8 h-px w-12 bg-[#c5a059]/60" />
            <p className="mt-8 text-base font-light leading-relaxed text-[#5c504c] sm:text-lg">
              À frente do ateliê, <strong className="font-normal text-[#1c1613]">Elvira Santos</strong> conduz cada projeto com um olhar sensível e apurado. Acreditamos que momentos especiais merecem peças que transmitam carinho, elegância e autenticidade — desde a escolha dos materiais até o laço final.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <span className="border border-[#d8d0c2] bg-[#faf8f5] px-5 py-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#4a3e3d]">
                Ateliê em Porto Feliz
              </span>
              <span className="border border-[#d8d0c2] bg-[#faf8f5] px-5 py-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#4a3e3d]">
                Projetos Exclusivos
              </span>
              <span className="border border-[#d8d0c2] bg-[#faf8f5] px-5 py-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#4a3e3d]">
                Processo Manufaturado
              </span>
            </div>
          </div>
        </section>

        {/* Serviços (Grids Minimalistas de Luxo) */}
        <section id="servicos" className="border-t border-[#e8e2d9] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#c5a059]">
                  O que Criamos
                </span>
                <h2 className="font-display mt-3 text-3xl font-normal text-[#1c1613] sm:text-4xl">
                  Catálogo de Serviços
                </h2>
              </div>
              <p className="max-w-xs text-xs font-light leading-relaxed text-[#8c7e7a]">
                Cada peça é desenhada sob medida para harmonizar com a identidade visual da sua festa.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ number, icon: Icon, title, description }) => (
                <div 
                  key={number} 
                  className="group relative flex flex-col justify-between border border-[#e8e2d9] bg-[#faf8f5] p-8 transition-all duration-500 hover:border-[#c5a059]/60 hover:shadow-lg hover:shadow-[#1c1613]/[0.02]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg text-[#c5a059]">{number}</span>
                      <Icon size={18} strokeWidth={1.2} className="text-[#6e605d] transition-colors group-hover:text-[#c5a059]" />
                    </div>
                    <h3 className="font-display mt-8 text-xl font-normal text-[#1c1613]">{title}</h3>
                    <p className="mt-4 text-xs font-light leading-relaxed text-[#6e605d]">
                      {description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-[#f0ebe1]">
                    <a
                      href="https://wa.me/5515996855481"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#1c1613] transition-colors hover:text-[#c5a059]"
                    >
                      Consultar <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="border-t border-[#e8e2d9] bg-[#f5f0e6]/30 px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#c5a059]">
                  Exclusividade & Cuidado
                </span>
                <h2 className="font-display mt-3 text-3xl font-normal text-[#1c1613] sm:text-4xl">
                  Por que escolher o Ateliê?
                </h2>
                <div className="mt-10 space-y-5">
                  {differentials.map((diff) => (
                    <div key={diff} className="flex items-center gap-4">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[#c5a059] text-[#c5a059]">
                        <Check size={10} strokeWidth={2.5} />
                      </span>
                      <span className="text-xs font-medium tracking-wide uppercase text-[#4a3e3d]">{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#e8e2d9] bg-[#faf8f5] p-10 lg:col-span-6">
                <h3 className="font-display text-2xl font-normal text-[#1c1613]">O Processo Criativo</h3>
                <ol className="mt-8 space-y-6 text-xs font-light text-[#5c504c]">
                  <li className="flex gap-4">
                    <span className="font-display text-base text-[#c5a059]">01.</span>
                    <div>
                      <strong className="font-medium text-[#1c1613]">Primeiro Contato:</strong>
                      <p className="mt-1">Conversamos via WhatsApp para compreender o conceito, paleta e desejos do seu evento.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-base text-[#c5a059]">02.</span>
                    <div>
                      <strong className="font-medium text-[#1c1613]">Definição do Projeto:</strong>
                      <p className="mt-1">Apresentamos propostas de materiais, acabamentos e cronograma de produção.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-base text-[#c5a059]">03.</span>
                    <div>
                      <strong className="font-medium text-[#1c1613]">Confecção & Entrega:</strong>
                      <p className="mt-1">Cada item é confeccionado e embalado artesanalmente com todo o rigor para a data.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada para Contato Sofisticada */}
        <section id="contato" className="border-t border-[#e8e2d9] bg-[#1c1613] px-6 py-24 text-[#faf8f5] sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#c5a059]">
              Atendimento Personalizado
            </span>
            <h2 className="font-display mt-4 text-4xl font-normal text-[#faf8f5] sm:text-5xl">
              Vamos planejar sua encomenda?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-xs font-light leading-relaxed text-[#b8adaa] sm:text-sm">
              Solicite um orçamento exclusivo diretamente com a Elvira Santos.
            </p>

            <div className="mt-10 flex justify-center">
              {/* Botão com Fundo Claro e Texto Escuro de Alto Contraste */}
              <WhatsAppButton
                variant="light"
                className="px-8 py-4 text-xs font-bold tracking-widest uppercase bg-[#faf8f5] text-[#1c1613] hover:bg-[#c5a059] hover:text-[#1c1613] transition-all rounded-none shadow-xl"
              />
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[0.7rem] font-medium tracking-widest uppercase text-[#8c7e7a]">
              <span className="flex items-center gap-2"><MapPin size={13} className="text-[#c5a059]" /> Porto Feliz — SP</span>
              <span>Tel: (15) 99685-5481</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-[#2c221e] bg-[#14100e] px-6 py-10 text-[#8c7e7a]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[0.65rem] tracking-wider uppercase">
            © {new Date().getFullYear()} Ateliê Momento Perfeito — By Elvira Santos
          </p>
          <a
            href="https://www.instagram.com/momento_perfeito_by_elvira"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[0.65rem] tracking-wider uppercase text-[#b8adaa] transition-colors hover:text-[#c5a059]"
          >
            <Instagram size={13} /> Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}