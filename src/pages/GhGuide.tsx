export default function GhGuide() {
  return (
    <div className="mx-auto max-w-[1100px] px-12 py-16 max-[768px]:px-6 max-[768px]:py-10">
      <section className="mb-12" aria-labelledby="page-title">
        <h1 id="page-title">GitHub CLI(gh) 사용하기</h1>
        <div className="flex gap-4 border-b border-(--border) pb-8 text-[12px] text-(--muted) [&_span]:flex [&_span]:items-center [&_span]:gap-[6px] [&_svg]:size-[14px]"><span>대상: 팀장 · 팀원</span><span>소요 시간: 약 10분</span></div>
        <p className="mt-8 max-w-[672px] text-[18px] break-keep text-(--muted) max-[768px]:text-[16px]">GitHub CLI는 터미널에서 GitHub의 기능을 사용하는 공식 도구입니다. <code>gh</code> 명령어로 이슈를 확인하고 Pull Request를 만들어봅시다. 앞에서 배운 GitHub Desktop과 함께 사용할 수 있습니다.</p>
      </section>
      <aside className="mb-12 flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&>svg]:mt-[5px] [&>svg]:size-5 [&>svg]:text-(--forest) [&>div]:min-w-0 [&_h2]:mb-1 [&_h2]:text-[15px] [&_h2]:text-(--forest) [&_h3]:mb-1 [&_h3]:text-[15px] [&_h3]:text-(--forest) [&_p]:text-(--muted)" aria-labelledby="gh-preparation">
        <div><h2 id="gh-preparation">시작 전 준비사항</h2><p>팀 레포지토리에 접근할 수 있는 GitHub 계정과 터미널을 준비하세요. GitHub Desktop에 로그인했어도 gh에서는 별도로 로그인해야 합니다. 명령어는 한 줄씩 입력하고 Enter를 누르세요.</p></div>
      </aside>

      <div className="text-(--muted) [&_section+section]:mt-12 [&_ul]:mt-4 [&_ul]:mb-0 [&_ul]:pl-[18px] [&_ul_li+li]:mt-4 [&_li::marker]:text-(--forest) max-w-[850px] [&_section>p+p]:mt-4">
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">1</span>gh 설치하기</h2>
          <p>운영체제에 맞는 명령어를 실행하세요. macOS 명령어는 Homebrew가 설치되어 있어야 합니다.</p>
          <div className="my-6 grid grid-cols-2 gap-6 max-[768px]:grid-cols-1 [&>div]:rounded-[6px] [&>div]:border [&>div]:border-(--border) [&>div]:bg-white [&>div]:p-6 [&_h3]:mb-2 [&_h3]:text-[16px] [&_h3]:text-(--forest)">
            <div><h3>macOS · Homebrew</h3><pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>brew install gh</code></pre></div>
            <div><h3>Windows · PowerShell</h3><pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>winget install --id GitHub.cli</code></pre></div>
          </div>
          <p>Linux 또는 다른 설치 방법은 <a href="https://github.com/cli/cli#installation" target="_blank" rel="noopener noreferrer">공식 설치 안내</a>를 참고하세요. 설치 후 터미널을 새로 열고 버전이 출력되는지 확인합니다.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>gh --version</code></pre>
          <p><code>git</code>은 Commit·브랜치·Push 같은 코드 이력 관리를, <code>gh</code>는 이슈·PR 같은 GitHub 기능을 담당합니다. 터미널에서 Git도 사용하려면 <code>git --version</code>으로 설치를 확인하세요.</p>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">2</span>GitHub 계정으로 로그인</h2>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>gh auth login</code></pre>
          <ul>
            <li>사용할 서비스는 <strong>GitHub.com</strong>, Git 통신 방식은 <strong>HTTPS</strong>를 선택하세요.</li>
            <li>Git 인증에도 GitHub 자격 증명을 사용할지 물으면 <strong>Yes</strong>를 선택하세요.</li>
            <li><strong>Login with a web browser</strong>를 선택하고, 터미널에 표시된 일회용 코드를 브라우저에 입력해 로그인을 완료하세요.</li>
          </ul>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>gh auth status</code></pre>
          <p>로그인된 계정이 팀에서 사용하는 계정인지 확인하세요.</p>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">3</span>팀 레포지토리에서 시작하기</h2>
          <p>이미 복제했다면 GitHub Desktop에서 팀 레포지토리를 선택하고 <strong>Repository → Open in Terminal</strong>을 누르세요. 운영체제와 설정에 따라 터미널 메뉴 이름이 다를 수 있습니다.</p>
          <p>아직 복제하지 않았다면 아래 명령어로 가져올 수 있습니다. <code>team-repo</code>는 실제 팀 레포지토리 이름으로 바꾸세요.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`gh repo clone pknu-wap/team-repo
cd team-repo`}</code></pre>
          <p>이후 예시는 모두 팀 레포지토리 폴더 안에서 실행합니다. 연결된 레포지토리를 확인하고 브라우저에서도 열어보세요.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`gh repo view
gh repo view --web`}</code></pre>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">4</span>이슈 확인하고 만들기</h2>
          <p>열린 이슈 목록을 확인한 뒤, 작업할 이슈의 내용을 읽으세요. 아래의 <code>1</code>은 실제 이슈 번호로 바꿉니다.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`gh issue list
gh issue view 1`}</code></pre>
          <p>새 작업은 아래 명령어로 이슈를 만듭니다. 안내에 따라 제목과 본문을 작성하고 제출하세요. 팀의 이슈 양식을 브라우저에서 작성하려면 <code>gh issue create --web</code>을 사용하세요.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>gh issue create</code></pre>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">5</span>작업한 브랜치로 PR 만들기</h2>
          <p>앞 가이드처럼 GitHub Desktop에서 작업 브랜치를 만들고, 수정 → Commit → Push까지 진행하세요. 터미널에서 <code>git branch --show-current</code>로 현재 브랜치를 확인합니다.</p>
          <p>아래 예시는 <code>docs/readme-setup</code>을 <code>develop</code>에 합치는 PR을 만듭니다. 두 브랜치 이름은 팀의 실제 기준 브랜치와 Push한 작업 브랜치로 바꾸세요.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>gh pr create --base develop --head docs/readme-setup</code></pre>
          <p>제목과 본문에 변경 목적, 수정 내용, 테스트 결과를 적고 제출하세요. 관련 이슈는 <code>관련 이슈: #1</code>처럼 본문에 남깁니다. 이미 같은 작업으로 PR을 만들었다면 새로 만들지 않고 다음 단계에서 확인하세요.</p>
          <p className="mt-6 text-[13px]">옵션 자세히 보기: <a href="https://cli.github.com/manual/gh_pr_create" target="_blank" rel="noopener noreferrer">gh pr create 공식 문서</a></p>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">6</span>PR 상태와 변경 내용 확인하기</h2>
          <p>PR 목록과 나에게 관련된 PR 상태를 확인하세요.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`gh pr list
gh pr status`}</code></pre>
          <p>아래의 <code>2</code>는 확인할 PR 번호로 바꿉니다. PR 내용, 변경 코드, 자동 검사 결과를 차례로 볼 수 있습니다.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`gh pr view 2
gh pr diff 2
gh pr checks 2
gh pr view 2 --web`}</code></pre>
          <p>자동 검사가 설정되지 않은 PR에는 검사 결과가 없을 수 있습니다. 마지막 명령어로 브라우저를 열어 팀원에게 리뷰를 요청하고, 승인과 필요한 검사를 확인한 뒤 팀 규칙에 따라 Merge하세요. 이후 GitHub Desktop에서 기준 브랜치로 돌아와 Fetch·Pull합니다.</p>
          <details className="mt-4 rounded-[6px] border border-(--border) bg-white px-5 py-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-(--forest) [&_summary]:focus-visible:outline-[3px] [&_summary]:focus-visible:outline-solid [&_summary]:focus-visible:outline-(--forest) [&_summary]:focus-visible:outline-offset-[5px] [&_p]:mt-3"><summary>명령어가 기억나지 않나요?</summary><p><code>gh --help</code>로 전체 명령어를, <code>gh pr --help</code>로 PR 명령어를 확인하세요. 특정 명령어는 <code>gh pr create --help</code>처럼 도움말을 볼 수 있습니다.</p></details>
          <details className="mt-4 rounded-[6px] border border-(--border) bg-white px-5 py-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-(--forest) [&_summary]:focus-visible:outline-[3px] [&_summary]:focus-visible:outline-solid [&_summary]:focus-visible:outline-(--forest) [&_summary]:focus-visible:outline-offset-[5px] [&_p]:mt-3"><summary>레포지토리를 찾을 수 없다고 나오나요?</summary><p>터미널이 팀 레포지토리 폴더에 있는지, <code>gh auth status</code>에 올바른 계정이 표시되는지 확인하세요. 팀의 접근 권한도 필요합니다. 다른 폴더에서 조회하려면 <code>gh issue list --repo pknu-wap/team-repo</code>처럼 레포지토리를 직접 지정할 수 있습니다.</p></details>
          <p className="mt-6 text-[13px]">더 알아보기: <a href="https://cli.github.com/manual/" target="_blank" rel="noopener noreferrer">GitHub CLI 공식 매뉴얼</a> · <a href="https://cli.github.com/manual/gh_auth_login" target="_blank" rel="noopener noreferrer">로그인 안내</a></p>
        </section>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 [&>a]:mt-0">
        <a href="?guide=develop">← 이전 가이드: Git으로 함께 개발하기</a>
        <a className="mt-4 inline-block shrink-0 rounded-[6px] bg-(--forest) px-6 py-3 text-center font-bold text-white no-underline hover:bg-[#28543d] hover:text-white max-[768px]:w-full" href="?guide=conflict">다음 가이드: 충돌 해결하기 →</a>
      </div>
    </div>
  )
}
