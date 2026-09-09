# Ateliê Momento Perfeito

Landing page responsiva do **Ateliê Momento Perfeito**, da Elvira Santos, em Porto Feliz — SP. O projeto foi criado com React, Vite, Tailwind CSS e Lucide Icons, seguindo a identidade visual da logo fornecida: champagne, areia, dourado envelhecido, marrom editorial e elementos botânicos delicados.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Google Fonts: Playfair Display + DM Sans

## Estrutura principal

```text
momento-perfeito/
├── client/
│   ├── public/
│   │   ├── logo.png
│   │   ├── robots.txt
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BrandLogo.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
├── vercel.json
├── vite.config.ts
└── README.md
```

> O scaffold WebDev mantém o frontend dentro de `client/`, enquanto os comandos do projeto continuam sendo executados na raiz. O `vercel.json` já aponta o resultado final para `dist/public`.

## Rodar localmente

Pré-requisitos: Node.js 20+ e pnpm.

```bash
pnpm install
pnpm dev
```

Abra o endereço mostrado pelo Vite, normalmente `http://localhost:3000`.

Para validar o build de produção:

```bash
pnpm exec tsc --noEmit
pnpm run build
```

## Onde editar

- **Logo:** substitua `client/public/logo.png` mantendo o mesmo nome, ou ajuste o `src` em `client/src/components/BrandLogo.tsx`. A logo original foi mantida sem alterações.
- **Serviços:** edite o array `services` no início de `client/src/pages/Home.tsx`.
- **Galeria:** edite o array `galleryItems` no início de `client/src/pages/Home.tsx`. Os blocos atuais são placeholders visuais; para usar fotos, coloque os arquivos em `client/public/images/` e troque o componente `GalleryPlaceholder` por imagens com `src="/images/nome-da-foto.jpg"`.
- **Textos institucionais:** altere diretamente as seções `Sobre`, `Diferenciais` e `Chamada final` em `client/src/pages/Home.tsx`.
- **WhatsApp:** o número e a mensagem automática ficam centralizados nas constantes `WHATSAPP_NUMBER` e `WHATSAPP_MESSAGE` em `client/src/components/WhatsAppButton.tsx`.
- **Cores e tipografia:** os tokens globais e estilos especiais ficam em `client/src/index.css`.
- **SEO:** título, description, Open Graph e favicon ficam em `client/index.html`.

Mensagem automática configurada:

> Olá, Elvira! Conheci o Ateliê Momento Perfeito pelo site e gostaria de saber mais.

O link utilizado é `https://wa.me/5515996855481`.

## Publicar no GitHub

Dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "feat: cria landing page do Atelie Momento Perfeito"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/momento-perfeito.git
git push -u origin main
```

Troque `SEU_USUARIO` pelo seu usuário do GitHub e crie previamente um repositório vazio chamado `momento-perfeito`.

## Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e entre com sua conta GitHub.
2. Clique em **Add New Project** e importe o repositório `momento-perfeito`.
3. Mantenha o **Root Directory** na raiz do repositório, onde estão `package.json` e `vercel.json`.
4. A configuração versionada em `vercel.json` já define:
   - Build Command: `pnpm run build`
   - Output Directory: `dist/public`
   - Rewrite para que a landing page funcione corretamente em qualquer rota.
5. Clique em **Deploy**.

Depois do primeiro deploy, cada `git push` na branch principal gera uma nova publicação automaticamente.

## Observações

- A página é estática e não utiliza backend ou banco de dados.
- O botão do WhatsApp abre uma nova conversa em uma nova aba.
- A seção de localização informa Porto Feliz — SP sem inventar um endereço específico.
- O link do Instagram é um placeholder para o perfil oficial. Substitua a URL no rodapé de `client/src/pages/Home.tsx` quando o endereço do perfil estiver definido.
