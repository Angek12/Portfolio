import Reveal from './Reveal'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mb-10 text-center sm:mb-14">
      <p className="mb-2 font-mono text-sm text-cyan-300/80">{`// ${eyebrow}`}</p>
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-white/70">{subtitle}</p>}
    </Reveal>
  )
}
