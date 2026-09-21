import { useEffect } from "react";
import ExternalLink from "./components/ExternalLink";
import { chapters } from "./guides";

export default function App() {
  const guideId = new URLSearchParams(window.location.search).get("guide");
  const chapter =
    chapters.find((chapter) =>
      chapter.pages.some((page) => page.id === guideId),
    ) ?? chapters[0];
  const page =
    chapter.pages.find((page) => page.id === guideId) ?? chapter.pages[0];
  const Page = page.component;
  useEffect(() => {
    document.title = page.title;
  }, [page.title]);

  return (
    <div>
      <a
        className="fixed -top-[100px] left-4 z-[100] bg-white px-5 py-3 focus:top-3"
        href="#content"
      >
        본문으로 바로가기
      </a>
      <aside className="fixed inset-y-0 left-0 w-[280px] overflow-y-auto border-r border-(--border) bg-white p-5 max-[768px]:static max-[768px]:w-auto max-[768px]:border-r-0 max-[768px]:border-b">
        <p className="mb-6 px-3 text-[24px] leading-[1.4] font-bold tracking-tight text-(--forest)">
          Git Guide
        </p>
        <nav aria-label="학습 목차" className="space-y-5">
          {chapters.map((chapter) => (
            <div key={chapter.number}>
              <p className="mb-2 flex items-center gap-2 px-3 text-[16px] leading-6 font-medium text-(--muted)">
                <span className="font-mono text-(--forest)">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                {chapter.title}
              </p>
              <ul className="list-none">
                {chapter.pages.map((item) => (
                  <li key={item.id}>
                    <a
                      aria-current={item.id === page.id ? "page" : undefined}
                      href={`?guide=${item.id}`}
                      className="block rounded-r-[6px] border-l-2 border-transparent px-3 py-1.5 text-[16px] leading-6 break-keep text-(--muted) no-underline hover:bg-(--pale-green) hover:text-(--forest) aria-[current=page]:border-(--forest) aria-[current=page]:bg-(--pale-green) aria-[current=page]:font-semibold aria-[current=page]:text-(--forest)"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main id="content" className="ml-[280px] min-w-0 max-[768px]:ml-0">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-5 border-b border-(--border) bg-[#fffffff2] px-12 py-4 backdrop-blur-[8px] max-[768px]:px-6">
          <nav
            className="flex flex-wrap items-center gap-2 text-[16px] text-(--muted) [&_a]:no-underline"
            aria-label="현재 위치"
          >
            <span>Chapter {chapter.number}</span>
            <span aria-hidden="true">›</span>
            <span className="text-(--forest) font-medium">{page.title}</span>
          </nav>
          <ExternalLink
            href="https://github.com/pknu-wap/git-guide"
            className="text-[16px] font-medium whitespace-nowrap text-(--forest) no-underline"
          >
            GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </header>
        <Page />
      </main>
    </div>
  );
}
