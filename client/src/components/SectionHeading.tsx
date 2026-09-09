type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}>
      <p className={`mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${light ? "text-[#e3cda9]" : "text-[#a47b45]"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl leading-[0.98] tracking-[-0.035em] sm:text-5xl ${light ? "text-[#fffaf3]" : "text-[#463121]"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-xl text-base leading-7 ${align === "center" ? "mx-auto" : ""} ${light ? "text-[#d8c7b5]" : "text-[#796653]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
