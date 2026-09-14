import ExternalLink from '../components/ExternalLink'
import Icon from '../components/Icon'

export default function CloneGuide() {
  return (
    <div className="mx-auto max-w-[1100px] px-12 py-16 max-[768px]:px-6 max-[768px]:py-10">
      <section className="mb-12" aria-labelledby="page-title">
        <h1 id="page-title">팀의 레포지토리 복제하기</h1>
        <div className="flex gap-4 border-b border-(--border) pb-8 text-[12px] text-(--muted) [&_span]:flex [&_span]:items-center [&_span]:gap-[6px] [&_svg]:size-[14px]"><span><Icon name="user" />대상: 팀장 · 팀원</span><span><Icon name="clock" />소요 시간: 약 5분</span></div>
        <p className="mt-8 max-w-[672px] text-[18px] break-keep text-(--muted) max-[768px]:text-[16px]">팀의 레포지토리를 내 컴퓨터로 가져와 개발을 시작해봅시다. GitHub Desktop의 Clone 기능으로 코드와 변경 이력을 복제할 수 있습니다. 모든 팀원이 각자의 컴퓨터에서 진행하세요.</p>
      </section>
      <aside className="mb-12 flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&>svg]:mt-[5px] [&>svg]:size-5 [&>svg]:text-(--forest) [&>div]:min-w-0 [&_h2]:mb-1 [&_h2]:text-[15px] [&_h2]:text-(--forest) [&_h3]:mb-1 [&_h3]:text-[15px] [&_h3]:text-(--forest) [&_p]:text-(--muted)" aria-labelledby="clone-preparation-title">
        <Icon name="info" />
        <div><h2 id="clone-preparation-title">시작 전 준비사항</h2><p><ExternalLink href="https://desktop.github.com/">GitHub Desktop</ExternalLink>을 설치하고 본인의 GitHub 계정으로 로그인하세요. 팀장이 만든 레포지토리의 이름과 접근 권한을 확인해주세요.</p></div>
      </aside>
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start gap-12 [@media(width<=1100px)]:grid-cols-1">
        <div className="text-(--muted) [&_section+section]:mt-12 [&_ul]:mt-4 [&_ul]:mb-0 [&_ul]:pl-[18px] [&_ul_li+li]:mt-4 [&_li::marker]:text-(--forest)">
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">1</span>복제 화면 열기</h2>
            <p>GitHub Desktop을 실행하고 상단 메뉴에서 <strong>File → Clone Repository…(Ctrl + Shift + O)</strong>를 선택하세요.<strong>Clone a Repository</strong> 창에서 <strong>GitHub.com</strong> 탭을 선택합니다.</p>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">2</span>팀의 레포지토리 선택</h2>
            <p>검색창에 팀의 레포지토리 이름을 입력하고, <code>pknu-wap</code> 아래에 있는 레포지토리를 선택하세요.</p>
            <aside className="flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&>svg]:mt-[5px] [&>svg]:size-5 [&>svg]:text-(--forest) [&>div]:min-w-0 [&_h2]:mb-1 [&_h2]:text-[15px] [&_h2]:text-(--forest) [&_h3]:mb-1 [&_h3]:text-[15px] [&_h3]:text-(--forest) [&_p]:text-(--muted) mt-4 mb-0" aria-labelledby="clone-search-title"><Icon name="info" /><div><h3 id="clone-search-title">레포지토리가 보이지 않나요?</h3><p>목록의 새로고침 버튼을 누르거나 <strong>URL</strong> 탭에 팀장이 공유한 레포지토리 주소를 입력하세요. 계속 접근할 수 없다면 로그인한 계정과 레포지토리 접근 권한을 확인해주세요.</p></div></aside>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">3</span>저장할 폴더 지정</h2>
            <p><strong>Local Path</strong>는 내 컴퓨터에 레포지토리를 저장할 위치입니다. <strong>Choose…</strong>를 눌러 원하는 폴더를 선택하세요.</p>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">4</span>Clone하고 파일 확인</h2>
            <p>레포지토리 이름과 경로를 확인한 뒤 <strong>Clone</strong>을 누르세요. 복제가 끝나면 <strong>Current Repository</strong>에 팀의 레포지토리가 표시되는지 확인하고, 지정한 폴더를 열어 프로젝트 파일을 확인하세요.</p>
          </section>
        </div>
        <figure className="sticky top-24 min-w-0 rounded-[6px] border border-(--border) bg-white p-2 [&_img]:block [&_img]:h-auto [&_img]:w-full [&_img]:rounded-[4px] [@media(width<=1100px)]:static [@media(width<=1100px)]:row-start-1">
          <ExternalLink href={`${import.meta.env.BASE_URL}clone_repository.png`} className="block rounded-[4px]">
            <img src={`${import.meta.env.BASE_URL}clone_repository.png`} width="2144" height="1544" alt="GitHub Desktop의 Clone a Repository 화면: pknu-wap/waps-server 선택, Local Path와 Clone 버튼. 새 탭에서 원본 이미지 보기." />
          </ExternalLink>
          <figcaption><span>레포지토리 복제 설정 예시</span><ExternalLink href="https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop">공식 문서 보기 →</ExternalLink></figcaption>
        </figure>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 [&>a]:mt-0">
        <a href="?guide=create">← 이전 가이드: (팀장) 팀의 레포지토리 만들기</a>
        <a className="mt-4 inline-block shrink-0 rounded-[6px] bg-(--forest) px-6 py-3 text-center font-bold text-white no-underline hover:bg-[#28543d] hover:text-white max-[768px]:w-full" href="?guide=develop">다음 챕터: Git으로 함께 개발하기 →</a>
      </div>
    </div>
  )
}
