import { Fragment, useEffect } from 'react'
import ExternalLink from './components/ExternalLink'
import Icon from './components/Icon'
import { chapters } from './guides'

export default function App() {
  const requestedGuide = new URLSearchParams(window.location.search).get('guide')
  const guideId = requestedGuide === 'untrack' ? 'gitignore' : requestedGuide
  const chapter = chapters.find(chapter => chapter.pages.some(page => page.id === guideId)) ?? chapters[0]
  const page = chapter.pages.find(page => page.id === guideId) ?? chapter.pages[0]
  const Page = page.component
  useEffect(() => { document.title = page.title }, [page.title])

  return (
    <div>
      <a className="fixed -top-[100px] left-4 z-[100] bg-white px-5 py-3 focus:top-3" href="#content">본문으로 바로가기</a>
      <aside className="fixed inset-y-0 left-0 w-[224px] overflow-y-auto border-r border-(--border) bg-white max-[768px]:static max-[768px]:w-auto max-[768px]:border-r-0 max-[768px]:border-b [&_nav]:p-4 max-[768px]:[&_nav]:flex max-[768px]:[&_nav]:flex-wrap max-[768px]:[&_nav]:gap-1 [&_a]:mb-1 [&_a]:flex [&_a]:items-center [&_a]:gap-3 [&_a]:rounded-[6px] [&_a]:px-3 [&_a]:py-2 [&_a]:text-(--muted) [&_a]:no-underline [&_a:hover]:bg-(--pale-green) [&_a:hover]:text-(--forest) [&_a[aria-current=page]]:bg-(--pale-green) [&_a[aria-current=page]]:text-(--forest) [&_a[aria-current=page]]:font-semibold max-[768px]:[&_a]:m-0 max-[768px]:[&_a]:p-2 max-[768px]:[&_a]:text-[13px]">
        <nav aria-label="학습 목차">
          {chapters.map((chapter, index) => (
            <Fragment key={chapter.number}>
              <p className={`px-3 py-2 text-[12px] font-semibold text-(--muted) max-[768px]:w-full ${index === 0 ? '' : 'mt-6'}`}>Chapter {chapter.number}. {chapter.title}</p>
              {chapter.pages.map(item => (
                <a key={item.id} aria-current={item.id === page.id ? 'page' : undefined} href={`?guide=${item.id}`}>
                  <Icon name="folder" />{item.title}
                </a>
              ))}
            </Fragment>
          ))}
        </nav>
      </aside>

      <main id="content" className="ml-[224px] min-w-0 max-[768px]:ml-0">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-5 border-b border-(--border) bg-[#fffffff2] px-12 py-4 backdrop-blur-[8px] max-[768px]:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-[12px] text-(--muted) [&_a]:no-underline" aria-label="현재 위치">
            <span>Chapter {chapter.number}</span><span aria-hidden="true">›</span><span className="text-(--forest) font-medium">{page.title}</span>
          </nav>
          <ExternalLink href="https://github.com/pknu-wap/git-guide" className="text-[13px] font-medium whitespace-nowrap text-(--forest) no-underline">GitHub <span aria-hidden="true">↗</span></ExternalLink>
        </header>
        <Page />
      </main>
    </div>
  )
}
