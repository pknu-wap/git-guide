import type { ReactNode } from 'react'
import ExternalLink from './ExternalLink'
import Icon from './Icon'

type ContentProps = { children: ReactNode }

export function GuidePage({ children }: ContentProps) {
  return <div className="mx-auto max-w-[1100px] px-12 py-16 max-[768px]:px-6 max-[768px]:py-10">{children}</div>
}

export function GuideHeader({ title, audience, duration, icons = false, children }: ContentProps & {
  title: string; audience: string; duration: string; icons?: boolean
}) {
  return (
    <section className="mb-12" aria-labelledby="page-title">
      <h1 id="page-title" className="mb-4 text-[40px] leading-[1.35] tracking-[-0.04em] break-keep text-(--forest) max-[768px]:text-[32px]">{title}</h1>
      <div className="flex gap-4 border-b border-(--border) pb-8 text-[12px] text-(--muted)">
        <span className="flex items-center gap-[6px]">{icons && <Icon name="user" className="size-[14px]" />}대상: {audience}</span>
        <span className="flex items-center gap-[6px]">{icons && <Icon name="clock" className="size-[14px]" />}소요 시간: {duration}</span>
      </div>
      <p className="mt-8 max-w-[672px] text-[18px] break-keep text-(--muted) max-[768px]:text-[16px]">{children}</p>
    </section>
  )
}

export function GuideBody({ children, reading = false }: ContentProps & { reading?: boolean }) {
  return <div className={`text-(--muted) [&_section+section]:mt-12 [&_ul]:mt-4 [&_ul]:mb-0 [&_ul]:pl-[18px] [&_ul_li+li]:mt-4 [&_li::marker]:text-(--forest) ${reading ? 'max-w-[850px] [&_section>p+p]:mt-4' : ''}`}>{children}</div>
}

export function LessonGrid({ children }: ContentProps) {
  return <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start gap-12 [@media(width<=1100px)]:grid-cols-1">{children}</div>
}

export function StepTitle({ number, id, children }: ContentProps & { number: number; id?: string }) {
  return (
    <h2 id={id} className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]">
      <span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">{number}</span>{children}
    </h2>
  )
}

export function Callout({ id, title, kind = 'preparation', children }: ContentProps & {
  id: string; title: string; kind?: 'preparation' | 'note'
}) {
  const Heading = kind === 'preparation' ? 'h2' : 'h3'
  return (
    <aside aria-labelledby={id} className={`flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&_p]:text-(--muted) ${kind === 'preparation' ? 'mb-12' : 'mt-4 mb-0'}`}>
      <Icon name="info" className="mt-[5px] size-5 text-(--forest)" />
      <div className="min-w-0">
        <Heading id={id} className="mb-1 text-[15px] text-(--forest)">{title}</Heading>
        {children}
      </div>
    </aside>
  )
}

export function CommandBlock({ children }: ContentProps) {
  return <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere"><code className="p-0">{children}</code></pre>
}

export function GuideQuestion({ summary, children }: ContentProps & { summary: string }) {
  return (
    <details className="mt-4 rounded-[6px] border border-(--border) bg-white px-5 py-4 [&_p]:mt-3">
      <summary className="cursor-pointer font-semibold text-(--forest) focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-(--forest) focus-visible:outline-offset-[5px]">{summary}</summary>
      {children}
    </details>
  )
}

export function ConceptGrid({ children }: ContentProps) {
  return <div className="my-6 grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 [&>div]:rounded-[6px] [&>div]:border [&>div]:border-(--border) [&>div]:bg-white [&>div]:p-6 [&_h3]:mb-2 [&_h3]:text-[16px] [&_h3]:text-(--forest)">{children}</div>
}

export function FlowSteps({ label, children }: ContentProps & { label: string }) {
  return <ol aria-label={label} className="my-6 grid list-none grid-cols-4 rounded-[6px] border border-(--border) bg-white p-0 [&_li]:p-4 [&_li+li]:border-l [&_li+li]:border-(--border) [&_strong]:block [&_strong]:text-(--forest) [&_span]:block [&_span]:text-[12px] max-[768px]:grid-cols-2 max-[768px]:[&_li:nth-child(3)]:border-l-0 max-[768px]:[&_li:nth-child(n+3)]:border-t max-[768px]:[&_li:nth-child(n+3)]:border-(--border)">{children}</ol>
}

export function Example({ children }: ContentProps) {
  return <p className="mt-6 rounded-[6px] bg-(--pale-green) p-4 text-(--forest)">{children}</p>
}

export function ReadingLinks({ children }: ContentProps) {
  return <p className="mt-6 text-[13px]">{children}</p>
}

export function GuideScreenshot({ src, width, height, alt, loading, caption, reference, placement = 'sticky' }: {
  src: string; width: number; height: number; alt: string; loading?: 'lazy' | 'eager'
  caption: string; reference?: ReactNode; placement?: 'sticky' | 'inline'
}) {
  return (
    <figure className={`top-24 min-w-0 rounded-[6px] border border-(--border) bg-white p-2 [@media(width<=1100px)]:row-start-1 ${placement === 'sticky' ? 'sticky [@media(width<=1100px)]:static' : 'static mt-6'}`}>
      <ExternalLink href={src} className="block rounded-[4px]">
        <img src={src} width={width} height={height} alt={alt} loading={loading} className="block h-auto w-full rounded-[4px]" />
      </ExternalLink>
      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-(--border) px-2 py-3 text-[12px] [&_a]:text-(--forest) [&_a]:no-underline">
        <span className="text-(--muted) italic">{caption}</span>{reference}
      </figcaption>
    </figure>
  )
}

export function GuideTable({ label, children }: ContentProps & { label: string }) {
  return (
    <div tabIndex={0} role="region" aria-label={label} className="my-6 overflow-x-auto focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-(--forest) focus-visible:outline-offset-[5px]">
      <table className="w-full min-w-[520px] border-collapse bg-white [&_th]:border [&_th]:border-(--border) [&_th]:bg-(--pale-green) [&_th]:p-4 [&_th]:text-left [&_th]:align-top [&_th]:text-(--forest) [&_td]:border [&_td]:border-(--border) [&_td]:p-4 [&_td]:text-left [&_td]:align-top">{children}</table>
    </div>
  )
}

export function ButtonLink({ href, external = false, spacing = 'body', children }: ContentProps & {
  href: string; external?: boolean; spacing?: 'body' | 'standalone' | 'navigation'
}) {
  const Link = external ? ExternalLink : 'a'
  const margin = { body: 'mt-4', standalone: 'mt-12', navigation: 'mt-0' }
  return <Link href={href} className={`inline-block shrink-0 rounded-[6px] bg-(--forest) px-6 py-3 text-center font-bold text-white no-underline hover:bg-[#28543d] hover:text-white max-[768px]:w-full ${margin[spacing]}`}>{children}</Link>
}

export function GuideNavigation({ children }: ContentProps) {
  return <div className="mt-12 flex flex-wrap items-center justify-between gap-6">{children}</div>
}
