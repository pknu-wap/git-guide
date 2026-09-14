import {
  GuideHeader,
  Callout,
  StepTitle,
  CommandBlock,
  ConceptGrid,
  Example,
  GuideQuestion,
  FlowSteps,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
} from '../components/Guide'
export default function ConflictGuide() {
  return (
    <GuidePage><GuideHeader title="충돌 해결하기" duration="약 15분">같은 파일의 같은 줄을 서로 다르게 수정하면 Git이 어느 내용을 남길지 결정하지 못할 수 있습니다. 두 브랜치에서 충돌을 직접 만들고, 변경 의도를 살려 합치는 과정을 GitHub Desktop으로 연습해봅시다.</GuideHeader><Callout id="conflict-preparation" title="시작 전 준비사항"><p>GitHub Desktop에서 <strong>File → New Repository</strong>로 README를 포함한 별도 연습 레포지토리를 만드세요. 에디터도 준비합니다. 이 실습은 내 컴퓨터에서 진행할 수 있으며 Publish할 필요가 없습니다.</p></Callout><GuideBody reading><section>
          <StepTitle number={1}>공통 시작점 만들기</StepTitle>
          <p>새 레포지토리에서 <strong>Current Branch → New Branch</strong>로 <code>practice/base</code>를 만드세요. README 내용을 아래 한 줄로 바꾸고 저장한 뒤 Commit합니다.</p>
          <CommandBlock>모임: 금요일</CommandBlock>
          <p>이 Commit을 공통 시작점으로 두 브랜치를 만들겠습니다. 브랜치를 바꾸기 전에는 매번 변경을 Commit해 <strong>Changes</strong>가 비어 있는지 확인하세요.</p>
        </section><section>
          <StepTitle number={2}>같은 줄을 다르게 수정하기</StepTitle>
          <ConceptGrid><div><h3>A · 장소 추가</h3><p><code>practice/base</code>에서 <code>practice/place</code>를 만듭니다. README를 아래처럼 수정하고 Commit하세요.</p><CommandBlock>모임: 금요일, 동아리방</CommandBlock></div><div><h3>B · 시간 추가</h3><p><code>practice/base</code>로 돌아온 뒤 <code>practice/time</code>을 만듭니다. README를 아래처럼 수정하고 Commit하세요.</p><CommandBlock>모임: 금요일, 오후 7시</CommandBlock></div></ConceptGrid>
          <p><strong>B 브랜치도 반드시 practice/base에서 만드세요.</strong> A에서 바로 만들면 A의 변경을 이미 포함하므로 이 예시의 충돌을 재현할 수 없습니다. 한 사람이 두 팀원의 작업을 번갈아 하는 연습입니다.</p>
        </section><section>
          <StepTitle number={3}>두 브랜치 합치기</StepTitle>
          <p>현재 브랜치가 <code>practice/time</code>인지 확인하고 <strong>Current Branch → Choose a branch to merge into practice/time</strong>을 선택하세요. 가져올 브랜치는 <code>practice/place</code>입니다.</p>
          <p><strong>Merge practice/place into practice/time</strong>으로 병합을 시작하면 README 충돌을 확인할 수 있습니다. 현재 브랜치에 다른 브랜치의 변경을 가져오는 방향을 기억하세요.</p>
          <Example>practice/place의 장소 정보 → practice/time의 시간 정보와 합치기</Example>
        </section><section>
          <StepTitle number={4}>충돌 표시 읽고 내용 정리하기</StepTitle>
          <p>충돌한 README를 에디터에서 열면 다음과 비슷한 표시가 나타납니다. 설정에 따라 브랜치 이름이나 공통 조상 내용이 추가로 표시될 수 있습니다.</p>
          <CommandBlock>{`<<<<<<< HEAD
모임: 금요일, 오후 7시
=======
모임: 금요일, 동아리방
>>>>>>> practice/place`}</CommandBlock>
          <ul>
            <li><code>HEAD</code> 쪽은 현재 브랜치인 <code>practice/time</code>의 내용입니다.</li>
            <li>구분선 아래는 가져오는 <code>practice/place</code>의 내용입니다.</li>
            <li>팀원과 변경 이유를 확인하고 최종 내용을 직접 작성합니다. 이 예시는 시간과 장소를 모두 남깁니다.</li>
          </ul>
          <CommandBlock>모임: 금요일, 오후 7시, 동아리방</CommandBlock>
          <p>충돌 표시를 모두 제거하고 저장하세요. 에디터의 <strong>Accept Current / Incoming / Both</strong>는 편집을 돕는 기능입니다. Both를 선택해도 두 줄을 하나의 올바른 문장으로 정리하는 작업이 필요할 수 있습니다.</p>
        </section><section>
          <StepTitle number={5}>결과 확인하고 병합 완료하기</StepTitle>
          <p>GitHub Desktop으로 돌아와 모든 충돌 파일이 해결됐는지 확인하고 <strong>Continue merge</strong>로 병합을 완료하세요. <strong>History</strong>에서 병합 Commit과 README의 최종 내용을 확인합니다.</p>
          <p>실제 코드 충돌이라면 화면 실행이나 테스트까지 확인하세요. 충돌 표시가 사라졌다는 사실만으로 프로그램이 정상 동작한다고 판단할 수는 없습니다.</p>
          <GuideQuestion summary="해결 방향을 모르겠다면?"><p>병합 완료 전에는 GitHub Desktop의 <strong>Abort merge</strong>로 이번 병합을 중단하고 팀원과 논의하세요. 충돌 해결 중 편집한 내용이 필요하면 별도로 복사해두세요. 터미널에서 시작한 일반 Merge는 <code>git merge --abort</code>로 중단할 수 있습니다.</p></GuideQuestion>
        </section><section>
          <StepTitle number={6}>실제 PR에 적용하기</StepTitle>
          <p>PR에서 기준 브랜치와 충돌이 생겼다면, 먼저 진행 중인 작업을 Commit하거나 Stash해두고 아래 순서로 해결하세요. 기준 브랜치 이름은 팀에 맞게 바꿉니다.</p>
          <FlowSteps label="PR 충돌 해결 순서"><li><strong>기준 브랜치</strong><span>develop 선택 → Fetch·Pull</span></li><li><strong>작업 브랜치</strong><span>돌아와 develop을 Merge</span></li><li><strong>충돌 해결</strong><span>파일 수정 → 검사 → 병합 완료</span></li><li><strong>Push</strong><span>기존 PR 갱신 → 리뷰</span></li></FlowSteps>
          <p>기준 브랜치를 작업 브랜치로 가져와 충돌을 해결한 뒤, 작업 브랜치를 Push합니다. 기준 브랜치에 작업을 최종 반영하는 것은 PR 리뷰 후 별도로 진행하세요.</p>
          <GuideQuestion summary="이미지 파일이나 삭제된 파일에서 충돌한다면?"><p>이미지 같은 바이너리 파일은 텍스트처럼 합칠 수 없으므로 남길 버전을 팀원과 결정하세요. 한쪽에서 삭제하고 다른 쪽에서 수정한 파일은 파일을 유지할지 삭제할지 결정해야 합니다.</p></GuideQuestion>
          <ReadingLinks>공식 문서: <a href="https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop" target="_blank" rel="noopener noreferrer">GitHub Desktop에서 브랜치 합치기</a>· <a href="https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line" target="_blank" rel="noopener noreferrer">충돌 표시와 해결 방법</a></ReadingLinks>
        </section></GuideBody><GuideNavigation><a href="?guide=review">← 이전 가이드: PR 리뷰 주고받기</a><ButtonLink href="?guide=undo" spacing="navigation">다음 가이드: 실수한 변경 되돌리기 →</ButtonLink></GuideNavigation></GuidePage>
  )
}
