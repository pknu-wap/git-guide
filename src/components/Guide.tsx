import type { ReactNode } from "react";
import ExternalLink from "./ExternalLink";
import Icon from "./Icon";
import "./guide.css";

type ContentProps = { children: ReactNode };

export function GuidePage({ children }: ContentProps) {
  return (
    <div className="guide-page mx-auto max-w-[1100px] px-12 py-16 max-[768px]:px-6 max-[768px]:py-10">
      {children}
    </div>
  );
}

export function GuideHeader({
  title,
  children,
}: ContentProps & {
  title: string;
}) {
  return (
    <section aria-labelledby="page-title">
      <h1
        id="page-title"
        className="mb-4 text-[44px] leading-[1.35] tracking-[-0.04em] break-keep text-(--forest) max-[768px]:text-[36px]"
      >
        {title}
      </h1>
      <p className="mt-8 max-w-[672px] text-[20px] break-keep text-(--muted)">
        {children}
      </p>
    </section>
  );
}

export function GuideBody({
  children,
  reading = false,
}: ContentProps & { reading?: boolean }) {
  return (
    <div
      className={`guide-body text-(--muted) [&_li::marker]:text-(--forest) ${reading ? "max-w-[850px]" : ""}`}
    >
      {children}
    </div>
  );
}

export function LessonGrid({ children }: ContentProps) {
  return (
    <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start gap-12 [@media(width<=1100px)]:grid-cols-1">
      {children}
    </div>
  );
}

export function StepTitle({
  number,
  id,
  children,
}: ContentProps & { number: number; id?: string }) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 text-[28px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[26px]"
    >
      <span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[16px] text-white">
        {number}
      </span>
      {children}
    </h2>
  );
}

export function Callout({
  id,
  title,
  kind = "preparation",
  children,
}: ContentProps & {
  id: string;
  title: string;
  kind?: "preparation" | "note";
}) {
  const Heading = kind === "preparation" ? "h2" : "h3";
  return (
    <aside
      aria-labelledby={id}
      className="guide-block flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&_p]:text-(--muted)"
    >
      <Icon name="info" className="mt-[5px] size-5 text-(--forest)" />
      <div className="guide-card-content min-w-0">
        <Heading id={id} className="text-[18px] text-(--forest)">
          {title}
        </Heading>
        {children}
      </div>
    </aside>
  );
}

export function CommandBlock({ children }: ContentProps) {
  return (
    <pre className="rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere">
      <code className="p-0">{children}</code>
    </pre>
  );
}

export function GuideQuestion({
  summary,
  children,
}: ContentProps & { summary: string }) {
  return (
    <details className="guide-block rounded-[6px] border border-(--border) bg-white px-5 py-4">
      <summary className="cursor-pointer font-semibold text-(--forest) focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-(--forest) focus-visible:outline-offset-[5px]">
        {summary}
      </summary>
      {children}
    </details>
  );
}

export function ConceptGrid({ children }: ContentProps) {
  return (
    <div className="guide-block guide-concepts grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 [&>div]:rounded-[6px] [&>div]:border [&>div]:border-(--border) [&>div]:bg-white [&>div]:p-6 [&_h3]:text-[20px] [&_h3]:text-(--forest)">
      {children}
    </div>
  );
}

export function FlowSteps({
  label,
  children,
}: ContentProps & { label: string }) {
  return (
    <ol
      aria-label={label}
      className="guide-block grid auto-cols-fr grid-flow-col list-none rounded-[6px] border border-(--border) bg-white p-0 [&_li]:p-4 [&_li+li]:border-l [&_li+li]:border-(--border) [&_strong]:block [&_strong]:text-(--forest) [&_span]:block [&_span]:text-[16px] max-[768px]:grid-flow-row max-[768px]:grid-cols-2 max-[768px]:[&_li:nth-child(3)]:border-l-0 max-[768px]:[&_li:nth-child(n+3)]:border-t max-[768px]:[&_li:nth-child(n+3)]:border-(--border)"
    >
      {children}
    </ol>
  );
}

export function Example({ children }: ContentProps) {
  return (
    <p className="guide-block rounded-[6px] bg-(--pale-green) p-4 text-(--forest)">
      {children}
    </p>
  );
}

export function ReadingLinks({ children }: ContentProps) {
  return <p className="guide-block text-[16px]">{children}</p>;
}

export function GuideScreenshot({
  src,
  width,
  height,
  alt,
  loading,
  reference,
  placement = "sticky",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  loading?: "lazy" | "eager";
  reference?: ReactNode;
  placement?: "sticky" | "inline";
}) {
  return (
    <figure
      className={`guide-block top-24 min-w-0 [@media(width<=1100px)]:row-start-1 ${placement === "sticky" ? "sticky [@media(width<=1100px)]:static" : "static"}`}
    >
      <ExternalLink href={src} className="block rounded-[4px]">
        <img
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading={loading}
          className="block h-auto w-full rounded-[4px]"
        />
      </ExternalLink>
      {reference && (
        <figcaption className="mt-4 text-right text-[16px] [&_a]:text-(--forest) [&_a]:no-underline">
          {reference}
        </figcaption>
      )}
    </figure>
  );
}

export function GuideTable({
  label,
  children,
}: ContentProps & { label: string }) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={label}
      className="guide-block overflow-x-auto focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-(--forest) focus-visible:outline-offset-[5px]"
    >
      <table className="w-full min-w-[520px] border-collapse bg-white [&_th]:border [&_th]:border-(--border) [&_th]:bg-(--pale-green) [&_th]:p-4 [&_th]:text-left [&_th]:align-top [&_th]:text-(--forest) [&_td]:border [&_td]:border-(--border) [&_td]:p-4 [&_td]:text-left [&_td]:align-top">
        {children}
      </table>
    </div>
  );
}

export function ButtonLink({
  href,
  external = false,
  children,
}: ContentProps & {
  href: string;
  external?: boolean;
}) {
  const Link = external ? ExternalLink : "a";
  return (
    <Link
      href={href}
      className="inline-block shrink-0 rounded-[6px] bg-(--forest) px-6 py-3 text-center font-bold text-white no-underline hover:bg-[#28543d] hover:text-white max-[768px]:w-full"
    >
      {children}
    </Link>
  );
}

export function GuideNavigation({ children }: ContentProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6">
      {children}
    </div>
  );
}
