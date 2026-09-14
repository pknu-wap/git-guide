import { Fragment, useEffect } from 'react'
import './App.css'
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
    <div className="app">
      <a className="skip-link" href="#content">본문으로 바로가기</a>
      <aside className="sidebar">
        <nav aria-label="학습 목차">
          {chapters.map((chapter, index) => (
            <Fragment key={chapter.number}>
              <p className={index === 0 ? 'nav-label' : 'nav-label chapter-label'}>Chapter {chapter.number}. {chapter.title}</p>
              {chapter.pages.map(item => (
                <a key={item.id} className={item.id === page.id ? 'nav-active' : undefined} aria-current={item.id === page.id ? 'page' : undefined} href={`?guide=${item.id}`}>
                  <Icon name="folder" />{item.title}
                </a>
              ))}
            </Fragment>
          ))}
          <p className="nav-label resources">참고 자료</p>
          <ExternalLink href="https://github.com/pknu-wap">GitHub Organization <span aria-hidden="true">↗</span></ExternalLink>
        </nav>
      </aside>

      <main id="content">
        <header className="topbar">
          <nav className="breadcrumb" aria-label="현재 위치">
            <span>Chapter {chapter.number}</span><span aria-hidden="true">›</span><span className="current">{page.title}</span>
          </nav>
          <ExternalLink href="https://github.com/pknu-wap/git-guide" className="github-link">GitHub <span aria-hidden="true">↗</span></ExternalLink>
        </header>
        <Page />
      </main>
    </div>
  )
}
