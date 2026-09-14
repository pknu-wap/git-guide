import type { ReactNode } from 'react'
import './App.css'

function ExternalLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
}

function Icon({ name }: { name: 'folder' | 'branch' | 'user' | 'clock' | 'info' }) {
  const paths = {
    folder: 'M3 7V5a2 2 0 0 1 2-2h5l2 4h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm9 5v6m-3-3h6',
    branch: 'M6 6v12m12-12v3a6 6 0 0 1-6 6H6M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
    user: 'M20 21v-2a7 7 0 0 0-14 0v2M13 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    clock: 'M12 8v4l3 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
    info: 'M12 11v6m0-10h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#content">본문으로 바로가기</a>
      <aside className="sidebar">
        <nav aria-label="학습 목차">
          <p className="nav-label">Chapter 1. 시작하기</p>
          <a className="nav-active" href="#lesson"><Icon name="folder" />(팀장) 팀의 레포지토리 만들기</a>
          <a href="#configuration"><Icon name="branch" />템플릿과 공개 범위</a>
          <a href="#add-people"><Icon name="user" />팀원 추가</a>
          <p className="nav-label resources">참고 자료</p>
          <ExternalLink href="https://github.com/pknu-wap">GitHub Organization <span aria-hidden="true">↗</span></ExternalLink>
        </nav>
      </aside>

      <main id="content">
        <header className="topbar">
          <nav className="breadcrumb" aria-label="현재 위치">
            <span>Chapter 1</span><span aria-hidden="true">›</span><span className="current">(팀장) 팀의 레포지토리 만들기</span>
          </nav>
          <ExternalLink href="https://github.com" className="github-link">GitHub <span aria-hidden="true">↗</span></ExternalLink>
        </header>

        <div className="page">
          <section className="hero" aria-labelledby="page-title">
            <span className="chapter">CHAPTER 1</span>
            <h1 id="page-title">(팀장) 팀의 레포지토리 만들기</h1>
            <div className="metadata"><span><Icon name="user" />대상: 팀장</span><span><Icon name="clock" />소요 시간: 약 5분</span></div>
            <p className="intro">레포지토리(Repository)는 팀의 코드와 변경 이력이 담기는 공동의 저장소입니다. 팀장은 프로젝트 시작 시 레포지토리를 생성하고, 생성된 URL을 팀원들에게 공유합니다.</p>
          </section>

          <aside className="preparation" aria-labelledby="preparation-title">
            <Icon name="info" />
            <div><h2 id="preparation-title">시작 전 준비사항</h2><p>pknu-wap 조직에 초대되어야 합니다. 만약 초대되어 있지 않다면 임원진에게 문의해주세요.</p></div>
          </aside>

          <div className="lesson-grid">
            <div className="instructions">
              <section id="lesson">
                <h2 className="step-title"><span className="step-number">1</span>기본 정보 설정 (General)</h2>
                <p><ExternalLink href="https://github.com/new">github.com/new</ExternalLink>에 접속하여 레포지토리 만들기를 시작하세요.</p>
                <ExternalLink href="https://github.com/new" className="button">GitHub에서 레포지토리 만들기</ExternalLink>
                <ul>
                  <li><strong>Owner:</strong> 반드시 <code>pknu-wap</code> 조직을 선택해야 합니다.</li>
                  <li><strong>Repository Name:</strong> 팀별로 고유한 이름을 정하세요.</li>
                  <li><strong>Description:</strong> 프로젝트의 성격을 간단히 기술합니다.</li>
                </ul>
              </section>
              <section id="configuration">
                <h2 className="step-title"><span className="step-number">2</span>환경 설정 (Configuration)</h2>
                <ul>
                  <li><strong>Visibility:</strong> <code>Public</code>을 선택하세요. 누구나 레포지토리를 볼 수 있으며, 쓰기에는 권한이 필요합니다.</li>
                  <li><strong>Template:</strong> <code>pknu-wap/project-template</code>을 선택하여 초기 구조를 가져옵니다.</li>
                  <li><strong>Include all branches:</strong> <code>On</code>으로 설정하세요. 템플릿의 모든 브랜치를 가져옵니다.</li>
                </ul>
              </section>
              <section>
                <h2 className="step-title"><span className="step-number">3</span>레포지토리 생성 완료</h2>
                <p>조직, 팀의 레포지토리 이름과 설정을 확인한 후 <strong>Create repository</strong> 버튼을 누릅니다. 생성된 레포지토리에 템플릿 파일과 브랜치가 있는지 확인하고 URL을 팀원에게 공유하세요.</p>
                <aside className="preparation note" aria-labelledby="repository-structure-title">
                  <Icon name="info" />
                  <div>
                    <h3 id="repository-structure-title">팀당 레포지토리가 하나일 필요는 없습니다.</h3>
                    <p>프로젝트 구성에 따라 여러 레포지토리를 만들 수 있습니다. 웹 프로젝트의 경우 프론트엔드와 백엔드 레포지토리를 분리하는 것을 권장합니다. 더 자세한 내용은 <strong>모노레포(Monorepo)</strong>와 <strong>폴리레포(Polyrepo)</strong>를 검색해보세요.</p>
                  </div>
                </aside>
              </section>
            </div>
            <figure className="screenshot">
              <ExternalLink href={`${import.meta.env.BASE_URL}create_repository.jpg`} className="image-link">
                <img src={`${import.meta.env.BASE_URL}create_repository.jpg`} width="1548" height="1390" alt="GitHub 레포지토리 생성 화면: pknu-wap 조직, waps-server 이름, Public 공개 범위와 project-template 설정. 새 탭에서 원본 이미지 보기." />
              </ExternalLink>
              <figcaption><span>레포지토리 생성 설정 예시</span><ExternalLink href="https://github.com/pknu-wap/project-template">템플릿 원본 보기 <span aria-hidden="true">→</span></ExternalLink></figcaption>
            </figure>
          </div>

          <section id="add-people" className="team-section" aria-labelledby="add-people-title">
            <div className="instructions">
              <h2 id="add-people-title" className="step-title"><span className="step-number">4</span>팀원 추가</h2>
              <p>레포지토리의 접근 권한 관리 화면에서 <strong>Add people</strong>을 눌러 팀원을 추가하세요.</p>
              <ul>
                <li><strong>Add people:</strong> 팀원의 GitHub 계정을 검색하고 선택하여 추가하세요.</li>
                <li><strong>Role:</strong> 팀원의 권한을 <code>Admin</code>으로 설정하세요.</li>
                <li><strong>확인:</strong> 모든 팀원을 추가한 뒤, 목록에서 각 팀원의 권한이 이미지처럼 <code>Role: admin</code>으로 표시되는지 확인하세요.</li>
              </ul>
            </div>
            <figure className="screenshot">
              <ExternalLink href={`${import.meta.env.BASE_URL}add_people.png`} className="image-link">
                <img src={`${import.meta.env.BASE_URL}add_people.png`} width="1892" height="736" loading="lazy" alt="GitHub Manage access 화면: Add people 버튼과 팀원들의 Role: admin 권한 설정. 새 탭에서 원본 이미지 보기." />
              </ExternalLink>
              <figcaption><span>팀원 추가 및 Admin 권한 설정 예시</span></figcaption>
            </figure>
            <aside className="preparation note" aria-labelledby="pending-invite-title">
              <Icon name="info" />
              <div>
              <h3 id="pending-invite-title">주의: Pending Invite가 표시되는 경우</h3>
              <p>별도의 절차 없이 팀원이 팀에 추가되어야 합니다. 아래처럼 <strong>Pending Invite</strong>가 표시된다면 해당 팀원이 <strong>pknu-wap</strong> 조직에 초대되지 않은 것이니 임원진에게 문의해주세요.</p>
              <figure className="screenshot">
                <ExternalLink href={`${import.meta.env.BASE_URL}pending_invite.png`} className="image-link">
                  <img src={`${import.meta.env.BASE_URL}pending_invite.png`} width="1864" height="166" loading="lazy" alt="팀원 목록에 Pending Invite와 Awaiting response가 표시된 초대 대기 화면. 새 탭에서 원본 이미지 보기." />
                </ExternalLink>
                <figcaption><span>Pending Invite 표시 예시</span></figcaption>
              </figure>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
