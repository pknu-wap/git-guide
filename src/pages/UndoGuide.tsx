import ExternalLink from '../components/ExternalLink'

export default function UndoGuide() {
  return (
    <div className="mx-auto max-w-[1100px] px-12 py-16 max-[768px]:px-6 max-[768px]:py-10">
      <section className="mb-12" aria-labelledby="page-title">
        <h1 id="page-title">실수한 변경 되돌리기</h1>
        <div className="flex gap-4 border-b border-(--border) pb-8 text-[12px] text-(--muted) [&_span]:flex [&_span]:items-center [&_span]:gap-[6px] [&_svg]:size-[14px]"><span>대상: 팀장 · 팀원</span><span>소요 시간: 약 20분</span></div>
        <p className="mt-8 max-w-[672px] text-[18px] break-keep text-(--muted) max-[768px]:text-[16px]">파일 수정만 취소할지, Commit의 효과를 취소할지, Commit을 다시 구성할지에 따라 도구가 달라집니다. Discard Changes, Revert Changes in Commit, Reset의 차이와 사용 순서를 알아봅시다.</p>
      </section>
      <aside className="mb-12 flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&>svg]:mt-[5px] [&>svg]:size-5 [&>svg]:text-(--forest) [&>div]:min-w-0 [&_h2]:mb-1 [&_h2]:text-[15px] [&_h2]:text-(--forest) [&_h3]:mb-1 [&_h3]:text-[15px] [&_h3]:text-(--forest) [&_p]:text-(--muted)" aria-labelledby="undo-preparation">
        <div><h2 id="undo-preparation">시작 전 준비사항</h2><p>별도 연습 레포지토리의 README로 진행하세요. 현재 브랜치와 Commit·Push 여부를 확인하고, 남길 수정은 파일 복사나 Stash로 보관합니다. Revert와 Reset 실습은 진행 중인 다른 변경이 없는 상태에서 시작하세요.</p></div>
      </aside>
      <div className="text-(--muted) [&_section+section]:mt-12 [&_ul]:mt-4 [&_ul]:mb-0 [&_ul]:pl-[18px] [&_ul_li+li]:mt-4 [&_li::marker]:text-(--forest) max-w-[850px] [&_section>p+p]:mt-4">
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">1</span>현재 상태에 맞는 방법 고르기</h2>
          <p>GitHub Desktop의 <strong>Changes</strong>에서 미커밋 변경을, <strong>History</strong>에서 Commit을 확인하세요. 원격과 비교할 때는 먼저 Fetch하고 GitHub에서도 해당 Commit이 공유됐는지 확인합니다.</p>
          <div className="my-6 overflow-x-auto focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-(--forest) focus-visible:outline-offset-[5px]" tabIndex={0} role="region" aria-label="되돌리기 방법 비교">
            <table className="w-full min-w-[520px] border-collapse bg-white [&_th]:border [&_th]:border-(--border) [&_th]:bg-(--pale-green) [&_th]:p-4 [&_th]:text-left [&_th]:align-top [&_th]:text-(--forest) [&_td]:border [&_td]:border-(--border) [&_td]:p-4 [&_td]:text-left [&_td]:align-top">
              <thead><tr><th scope="col">상황</th><th scope="col">방법</th><th scope="col">결과</th></tr></thead>
              <tbody>
                <tr><td>아직 Commit하지 않은 수정을 버리기</td><td><a href="#discard">Discard Changes</a></td><td>선택한 파일의 미커밋 변경 제거</td></tr>
                <tr><td>이미 Push한 Commit의 효과를 취소하기</td><td><a href="#revert">Revert Changes in Commit</a></td><td>원본 이력을 남기고 반대 변경의 새 Commit 생성</td></tr>
                <tr><td>Push 전 Commit을 다시 구성하기</td><td><a href="#reset">Undo / Reset to commit</a></td><td>현재 브랜치의 끝을 이전 Commit으로 이동</td></tr>
                <tr><td>git add만 취소하고 파일은 유지하기</td><td><a href="#unstage">Unstage</a></td><td>스테이징만 해제</td></tr>
              </tbody>
            </table>
          </div>
          <p>체크박스를 해제해 이번 Commit에서 제외하는 것과 파일 수정을 버리는 것은 다릅니다. 잠시 다른 작업을 해야 한다면 Discard 대신 Stash로 보관하세요.</p>
        </section>
        <section id="discard">
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">2</span>Discard Changes · 미커밋 변경 버리기</h2>
          <p>Commit한 README에 임시 문장을 추가하고 저장하세요. 아직 Commit하지 않은 이 문장만 취소해봅니다.</p>
          <ul>
            <li>GitHub Desktop의 <strong>Changes</strong>에서 README를 선택하고 Diff를 읽습니다.</li>
            <li>파일을 우클릭해 <strong>Discard Changes</strong>를 선택합니다. 여러 파일이라면 선택한 파일 개수를 확인하세요.</li>
            <li>확인 창의 대상 파일을 검토한 뒤 실행합니다. <strong>Discard All Changes</strong>는 다른 파일의 변경까지 대상으로 삼으므로 구분하세요.</li>
            <li>README의 임시 문장이 사라지고 마지막 Commit의 내용으로 돌아왔는지 확인합니다.</li>
          </ul>
          <p>새로 만든 미추적 파일을 Discard하면 그 파일 자체가 제거됩니다. GitHub Desktop은 버린 변경을 휴지통에 보관하므로 휴지통을 비우기 전에는 확인할 수 있지만, 아래 Git 명령어에는 이 동작이 없습니다.</p>
          <details className="mt-4 rounded-[6px] border border-(--border) bg-white px-5 py-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-(--forest) [&_summary]:focus-visible:outline-[3px] [&_summary]:focus-visible:outline-solid [&_summary]:focus-visible:outline-(--forest) [&_summary]:focus-visible:outline-offset-[5px] [&_p]:mt-3"><summary>명령줄에서 같은 파일을 되돌리려면?</summary><p>아래 명령어는 HEAD에 존재하는 README의 스테이징과 작업 파일을 모두 마지막 Commit 상태로 맞춥니다. 이 파일의 미커밋 수정은 버려지므로 먼저 Diff를 확인하세요.</p><pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`git diff -- README.md
git diff --cached -- README.md
git restore --source=HEAD --staged --worktree -- README.md`}</code></pre><p><code>HEAD</code>는 현재 Commit입니다. 단순히 <code>git restore -- README.md</code>만 실행하면 작업 파일을 인덱스의 내용으로 돌리므로 이미 스테이징한 변경은 남습니다.</p></details>
          <p className="mt-6 text-[13px]">공식 문서: <ExternalLink href="https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop">Discard Changes</ExternalLink> · <ExternalLink href="https://git-scm.com/docs/git-restore">git restore</ExternalLink></p>
        </section>
        <section id="revert">
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">3</span>Revert Changes in Commit · 효과 취소하기</h2>
          <p>이미 Commit한 변경, 특히 팀원에게 Push한 변경을 취소할 때 사용합니다. <strong>원래 Commit은 남기고 그 변경을 반대로 적용한 새 Commit을 만듭니다.</strong></p>
          <ul>
            <li><strong>History</strong>에서 내용을 확인하고 <strong>취소할 변경이 들어 있는 Commit</strong>을 선택하세요.</li>
            <li>우클릭해 <strong>Revert Changes in Commit</strong>을 누릅니다.</li>
            <li>생성된 Revert Commit의 Diff와 실행 결과를 확인합니다.</li>
            <li>작업 브랜치를 Push하고, 팀의 기준 브랜치에 반영해야 한다면 PR로 리뷰받습니다.</li>
          </ul>
          <p className="mt-6 rounded-[6px] bg-(--pale-green) p-4 text-(--forest)">기존 이력: A → B(잘못된 변경) → C<br />B를 Revert한 뒤: A → B → C → D(B의 반대 변경)</p>
          <p>되돌아가고 싶은 과거 시점을 선택하는 것이 아닙니다. B를 Revert해도 C의 변경까지 전부 취소되지는 않으며, C가 B에 의존한다면 추가 수정이나 충돌 해결이 필요할 수 있습니다.</p>
          <details className="mt-4 rounded-[6px] border border-(--border) bg-white px-5 py-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-(--forest) [&_summary]:focus-visible:outline-[3px] [&_summary]:focus-visible:outline-solid [&_summary]:focus-visible:outline-(--forest) [&_summary]:focus-visible:outline-offset-[5px] [&_p]:mt-3"><summary>터미널에서 마지막 Commit을 Revert하려면?</summary><p>작업 폴더가 깨끗한 상태에서, 취소할 대상이 마지막 일반 Commit인지 확인한 뒤 실행합니다.</p><pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`git status
git log -1 --oneline
git revert --no-edit HEAD`}</code></pre><p>다른 일반 Commit은 HEAD 대신 그 Commit의 해시를 지정합니다. 충돌이 나면 해결할 파일만 <code>git add</code>한 뒤 <code>git revert --continue</code>로 완료하세요. 진행 중인 Revert를 중단하려면 <code>git revert --abort</code>를 사용합니다. 병합 Commit은 부모 선택이 필요하므로 이 예시를 그대로 적용하지 마세요.</p></details>
          <p>이미 main이나 develop에 합친 변경을 되돌린다면 최신 기준 브랜치에서 새 수정 브랜치를 만들어 진행하세요. 원래 작업 브랜치만 수정해서는 기준 브랜치가 바뀌지 않습니다.</p>
          <p className="mt-6 text-[13px]">공식 문서: <ExternalLink href="https://docs.github.com/en/desktop/managing-commits/reverting-a-commit-in-github-desktop">Revert Changes in Commit</ExternalLink> · <ExternalLink href="https://git-scm.com/docs/git-revert">git revert</ExternalLink></p>
        </section>
        <section id="reset">
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">4</span>Undo / Reset to commit · Push 전 이력 정리하기</h2>
          <p>내용은 유지하면서 Commit을 다시 나누거나 묶고 싶을 때 사용합니다. GitHub Desktop에서 가장 최근의 미Push Commit 하나는 <strong>Changes</strong> 하단의 <strong>Undo</strong>로 취소할 수 있습니다.</p>
          <p>여러 Commit을 되돌릴 때는 <strong>History</strong>에서 <strong>남겨둘 마지막 Commit</strong>을 우클릭하고 <strong>Reset to commit</strong>을 선택하세요.</p>
          <p className="mt-6 rounded-[6px] bg-(--pale-green) p-4 text-(--forest)">A → B → C에서 A로 Reset<br />현재 브랜치 이력: A / B·C의 변경 내용: Changes에 남음</p>
          <p>선택한 A는 남고, 그 이후 Commit의 변경이 작업 폴더로 돌아옵니다. 필요한 내용을 다시 수정하고 선택해 Commit하세요. 버릴 내용만 별도로 Discard할 수도 있습니다.</p>
          <aside className="flex gap-4 rounded-[6px] border-l-4 border-(--forest) bg-white p-6 max-[768px]:p-5 [&>svg]:mt-[5px] [&>svg]:size-5 [&>svg]:text-(--forest) [&>div]:min-w-0 [&_h2]:mb-1 [&_h2]:text-[15px] [&_h2]:text-(--forest) [&_h3]:mb-1 [&_h3]:text-[15px] [&_h3]:text-(--forest) [&_p]:text-(--muted) mt-4 mb-0" aria-labelledby="desktop-reset-title"><div><h3 id="desktop-reset-title">Desktop의 Reset은 파일 수정을 보존합니다</h3><p>GitHub Desktop의 Reset to commit은 <code>git reset --hard</code>와 다릅니다. 마지막으로 Push한 Commit까지를 경계로 미Push Commit을 되돌릴 수 있습니다. 이미 공유한 Commit의 취소는 Revert로 진행하세요.</p></div></aside>
          <p className="mt-6 text-[13px]">공식 문서: <ExternalLink href="https://docs.github.com/en/desktop/managing-commits/undoing-a-commit-in-github-desktop">Undo</ExternalLink> · <ExternalLink href="https://docs.github.com/en/desktop/managing-commits/resetting-to-a-commit-in-github-desktop">Reset to commit</ExternalLink></p>
        </section>
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">5</span>명령줄 Reset · soft, mixed, hard 구분하기</h2>
          <p>명령줄 Reset은 옵션에 따라 스테이징과 실제 파일을 다르게 처리합니다. 아래는 <strong>미커밋 변경이 없고, 마지막 일반 Commit 하나를 아직 Push하지 않은 상태</strong>에서의 비교입니다. 부모 Commit이 있어야 <code>HEAD~1</code>을 사용할 수 있습니다.</p>
          <p>Reset 전 현재 Commit을 가리키는 백업 브랜치를 만들어둘 수 있습니다. 이 브랜치는 <strong>아직 Commit하지 않은 파일 수정까지 보관하지는 않습니다.</strong></p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>{`git status
git log --oneline -5
git branch backup/before-reset`}</code></pre>
          <p>이미 같은 이름의 백업 브랜치가 있다면 다른 이름을 사용하세요. 아래 명령어는 <strong>비교용 대안이므로 하나만 선택</strong>합니다. 연속 실행하면 매번 다른 부모 Commit으로 이동합니다.</p>
          <div className="my-6 overflow-x-auto focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-(--forest) focus-visible:outline-offset-[5px]" tabIndex={0} role="region" aria-label="Reset 옵션별 영향 비교">
            <table className="w-full min-w-[520px] border-collapse bg-white [&_th]:border [&_th]:border-(--border) [&_th]:bg-(--pale-green) [&_th]:p-4 [&_th]:text-left [&_th]:align-top [&_th]:text-(--forest) [&_td]:border [&_td]:border-(--border) [&_td]:p-4 [&_td]:text-left [&_td]:align-top">
              <thead><tr><th scope="col">명령어</th><th scope="col">Commit 위치</th><th scope="col">변경 내용</th></tr></thead>
              <tbody>
                <tr><td><code>git reset --soft HEAD~1</code></td><td>이전 Commit</td><td>파일과 스테이징 유지. 다시 Commit할 수 있음</td></tr>
                <tr><td><code>git reset --mixed HEAD~1</code></td><td>이전 Commit</td><td>파일 유지, 스테이징 해제. 다시 선택해 Commit</td></tr>
                <tr><td><code>git reset --hard HEAD~1</code></td><td>이전 Commit</td><td>인덱스와 작업 파일도 해당 Commit에 맞춤. 되돌리는 변경을 버림</td></tr>
              </tbody>
            </table>
          </div>
          <p><code>--mixed</code>가 기본값입니다. <code>--hard</code>는 추적 파일의 미커밋 수정도 버리고, 대상 Commit에 없는 추적 파일을 제거합니다. 파일 복원을 방해하는 미추적 파일도 삭제될 수 있으므로 필요한 파일을 보관한 별도 연습 레포지토리에서만 실습하세요.</p>
          <p>Reset 자체가 원격 브랜치를 바꾸지는 않습니다. 이미 Push한 이력을 Reset한 뒤 강제 Push하면 팀원의 작업 기준이 달라질 수 있으므로, 공유한 변경을 취소하는 목적이라면 Revert를 사용하세요.</p>
          <p className="mt-6 text-[13px]">공식 문서: <ExternalLink href="https://git-scm.com/docs/git-reset">git reset 옵션</ExternalLink></p>
        </section>
        <section id="unstage">
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">6</span>Unstage · git add만 취소하기</h2>
          <p>파일 수정은 필요하지만 이번 Commit에 넣고 싶지 않다면 스테이징만 해제합니다. 아래 명령어는 브랜치의 Commit 위치나 작업 파일 내용을 바꾸지 않습니다.</p>
          <pre className="my-4 rounded-[6px] border border-(--border) bg-(--pale-green) p-4 whitespace-pre-wrap wrap-anywhere [&_code]:p-0"><code>git restore --staged -- README.md</code></pre>
          <p><code>git reset -- README.md</code>도 HEAD 기준으로 해당 파일의 스테이징을 해제하는 용도로 쓸 수 있습니다. 파일 경로를 지정한 이 형태는 앞에서 설명한 Commit 단위 Reset과 다릅니다.</p>
        </section>
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-[24px] leading-[1.4] break-keep text-[#202923] max-[768px]:text-[22px]"><span className="flex size-8 flex-[0_0_32px] items-center justify-center rounded-full bg-(--forest) text-[14px] text-white">7</span>README로 연습하고 결과 확인하기</h2>
          <ul>
            <li><strong>Discard:</strong> Commit된 README에 임시 문장을 추가하고 저장 → Discard → 문장이 사라지고 이력이 그대로인지 확인합니다.</li>
            <li><strong>Revert:</strong> 같은 문장을 추가해 Commit → 해당 Commit을 Revert → 문장이 사라지고 원본·Revert Commit이 모두 남는지 확인합니다.</li>
            <li><strong>Reset:</strong> 다시 문장을 추가해 새 Commit → Push하지 않고 바로 이전 Commit으로 Reset to commit → 문장은 파일에 남고 변경 목록으로 돌아오는지 확인합니다.</li>
          </ul>
          <p>실제 코드에서는 파일 내용뿐 아니라 실행과 테스트 결과를 확인하세요. 충돌이 생기면 <a href="?guide=conflict">충돌 해결하기</a>를 참고하고, Revert나 수정 Commit을 공유할 때는 팀의 리뷰 절차를 따릅니다.</p>
          <details className="mt-4 rounded-[6px] border border-(--border) bg-white px-5 py-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-(--forest) [&_summary]:focus-visible:outline-[3px] [&_summary]:focus-visible:outline-solid [&_summary]:focus-visible:outline-(--forest) [&_summary]:focus-visible:outline-offset-[5px] [&_p]:mt-3"><summary>Reset 대상을 잘못 골랐다면?</summary><p>추가 Reset을 멈추고 <code>git reflog</code>에서 Reset 전 Commit을 찾으세요. 해당 해시를 확인한 뒤 <code>git branch recover/work COMMIT_HASH</code>로 복구용 브랜치를 만들 수 있습니다. COMMIT_HASH는 찾은 해시로 바꿉니다. reflog는 로컬 기록이며, 미커밋 상태에서 버린 내용의 복구를 보장하지 않습니다.</p></details>
        </section>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 [&>a]:mt-0">
        <a href="?guide=review">← 이전 가이드: PR 리뷰 주고받기</a>
      </div>
    </div>
  )
}
