type BrandLogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

/**
 * Logo oficial do Ateliê.
 * Para substituir a logo, mantenha o caminho /logo.png ou troque o src abaixo.
 * O arquivo original fornecido pela cliente está em client/public/logo.png.
 */
export function BrandLogo({ variant = "full", className = "" }: BrandLogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Logo do Ateliê Momento Perfeito — By Elvira Santos"
      className={`${variant === "mark" ? "h-14 w-14 object-cover object-top" : "h-20 w-auto object-contain"} ${className}`}
    />
  );
}
