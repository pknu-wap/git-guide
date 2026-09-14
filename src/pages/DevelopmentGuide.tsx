import {
  GuideHeader,
  Callout,
  StepTitle,
  ConceptGrid,
  FlowSteps,
  Example,
  GuideQuestion,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuidePage,
} from '../components/Guide'
export default function DevelopmentGuide() {
  return (
    <GuidePage><GuideHeader title="Git으로 함께 개발하기" audience="팀장 · 팀원" duration="약 15분">코드를 수정하고, 변경 이력을 남기고, 팀원의 작업과 합치는 과정을 알아봅시다. GitHub Desktop으로 README에 프로젝트 실행 방법을 추가하는 작은 작업을 따라가며 Git의 핵심 기능을 익힙니다.</GuideHeader><Callout id="development-preparation" title="시작 전 준비사항" icon><p>앞 가이드에서 팀의 레포지토리를 복제하고 GitHub Desktop에서 열어두세요. 팀에서 작업을 모으는 기준 브랜치가 무엇인지 확인합니다. 아래의 <code>develop</code>은 예시이며, 팀에서 <code>main</code>을 사용한다면 해당 브랜치를 선택하세요.</p></Callout><GuideBody reading><section>
          <StepTitle number={1}>Git과 GitHub 이해하기</StepTitle>
          <p><strong>Git</strong>은 파일의 변경 이력을 기록하고 여러 작업을 합치는 버전 관리 도구입니다. <strong>GitHub</strong>는 레포지토리를 온라인에서 공유하고 코드 리뷰를 진행하는 서비스이며, <strong>GitHub Desktop</strong>은 Git 작업을 버튼으로 실행하는 앱입니다.</p>
          <ConceptGrid><div><h3>내 컴퓨터 · Git</h3><p>파일을 수정하고 Commit을 만드는 곳입니다. 인터넷 연결 없이도 변경 이력을 기록할 수 있습니다.</p></div><div><h3>원격 · GitHub</h3><p>Push팀원들과 Commit을 공유하는 곳입니다.</p></div></ConceptGrid>
          <FlowSteps label="변경 사항이 공유되는 순서"><li><strong>파일 수정</strong><span>작업 폴더</span></li><li><strong>변경 선택</strong><span>이번 Commit에 포함</span></li><li><strong>Commit</strong><span>로컬에 이력 기록</span></li><li><strong>Push</strong><span>원격에 업로드</span></li></FlowSteps>
          <p>에디터에서 파일을 저장해도 Commit이 생기지는 않습니다. Commit을 만들어도 Push하기 전까지는 내 컴퓨터에만 남아 있습니다.</p>
        </section><section>
          <StepTitle number={2}>Fetch · Pull로 최신 코드 가져오기</StepTitle>
          <p>작업을 시작하기 전에 <strong>Current Branch</strong>에서 기준 브랜치를 선택하세요. <strong>Fetch origin</strong>으로 원격의 새 Commit을 확인하고, 받을 변경이 있다면 <strong>Pull origin</strong>을 눌러 현재 로컬 브랜치에 반영합니다.</p>
          <dl className="my-6 [&>div]:grid [&>div]:grid-cols-[80px_1fr] [&>div]:gap-4 [&>div]:border-b [&>div]:border-(--border) [&>div]:py-4 [&_dt]:font-bold [&_dt]:text-(--forest) [&_dd]:m-0">
            <div><dt>Fetch</dt><dd>원격의 최신 이력을 가져옵니다. 현재 작업 중인 파일에 변경을 합치지는 않습니다.</dd></div>
            <div><dt>Pull</dt><dd>원격의 변경을 가져와 현재 브랜치에 통합합니다. 같은 부분을 다르게 수정했다면 충돌이 생길 수 있습니다.</dd></div>
          </dl>
          <p>아직 Commit하지 않은 작업이 있다면 먼저 Commit하거나 Stash로 잠시 보관한 뒤 브랜치를 바꾸거나 Pull하세요.</p>
        </section><section>
          <StepTitle number={3}>Branch로 작업 공간 나누기</StepTitle>
          <p><strong>브랜치(Branch)</strong>는 변경 이력의 갈래입니다. 기준 브랜치에서 새 브랜치를 만들면 팀의 기준 코드를 바로 바꾸지 않고 작업할 수 있습니다.</p>
          <ul>
            <li>최신 상태의 기준 브랜치에서 <strong>Current Branch → New Branch</strong>를 선택하세요.</li>
            <li>이번 작업은 <code>docs/readme-setup</code>처럼 목적이 드러나는 이름을 사용합니다.</li>
            <li>생성 후 <strong>Current Branch</strong>가 새 브랜치인지 확인하고 파일 수정을 시작하세요.</li>
          </ul>
          <Example>예시: develop에서 docs/readme-setup을 생성 → README 수정 → 리뷰 후 develop에 합치기</Example>
        </section><section>
          <StepTitle number={4}>Diff를 확인하고 Commit 만들기</StepTitle>
          <p>에디터에서 <code>README.md</code>에 실제 프로젝트 실행 방법을 추가하고 저장하세요. GitHub Desktop의 <strong>Changes</strong>에서 변경된 파일을 누르면 이전 내용과의 차이인 <strong>Diff</strong>를 볼 수 있습니다.</p>
          <ul>
            <li>추가·삭제한 내용을 읽고 의도한 변경인지 확인하세요.</li>
            <li>파일 옆 체크박스로 이번 Commit에 포함할 변경만 선택하세요. 명령줄 Git에서는 <code>git add</code>로 Commit할 내용을 준비하는 과정을 <strong>Staging</strong>이라고 합니다.</li>
            <li><strong>Summary</strong>에 <code>docs: README에 실행 방법 추가</code>처럼 무엇을 바꿨는지 적으세요. 필요한 설명은 <strong>Description</strong>에 넣습니다.</li>
            <li><strong>Commit to docs/readme-setup</strong>을 눌러 이력을 남기세요. 서로 관련된 변경을 한 Commit으로 묶으면 나중에 이해하기 쉽습니다.</li>
          </ul>
        </section><section>
          <StepTitle number={5}>Push로 팀원에게 공유하기</StepTitle>
          <p><strong>Push</strong>는 로컬에서 만든 Commit을 원격 브랜치에 올립니다. 새 브랜치를 처음 공유할 때는 <strong>Publish branch</strong>를, 이후에는 <strong>Push origin</strong>을 누르세요.</p>
          <p>GitHub에서 해당 브랜치를 선택하고 Commit과 파일 변경이 보이는지 확인합니다. Push는 현재 작업 브랜치를 공유하는 동작이며, 기준 브랜치에 합치는 작업은 별도로 진행합니다.</p>
        </section><section>
          <StepTitle number={6}>Pull Request로 리뷰받고 Merge하기</StepTitle>
          <p><strong>Pull Request(PR)</strong>는 GitHub에서 내 브랜치의 변경을 다른 브랜치에 합치자고 제안하는 기능입니다. <strong>Merge</strong>는 두 브랜치의 변경 이력을 통합하는 Git 작업입니다.</p>
          <ul>
            <li>GitHub Desktop의 <strong>Preview Pull Request</strong>로 변경을 확인하고 <strong>Create Pull Request</strong>로 GitHub에서 PR 작성을 진행하세요.</li>
            <li><strong>base</strong>는 변경을 받을 기준 브랜치, <strong>compare</strong>는 내 작업 브랜치입니다. 예시에서는 base가 <code>develop</code>, compare가 <code>docs/readme-setup</code>입니다.</li>
            <li>변경 목적, 수정 내용, 확인한 내용을 적고 팀원에게 리뷰를 요청하세요.</li>
            <li>피드백은 같은 브랜치에서 수정 → Commit → Push하면 기존 PR에 반영됩니다.</li>
            <li>리뷰와 필요한 검사가 끝나면 팀의 규칙에 따라 PR을 Merge하세요. 이후 로컬 기준 브랜치로 돌아와 Fetch·Pull로 결과를 가져옵니다.</li>
          </ul>
          <p>Merge 방식과 승인 조건은 레포지토리 설정에 따라 달라질 수 있습니다.</p>
        </section><section>
          <StepTitle number={7}>충돌 해결과 변경 이력 확인</StepTitle>
          <p><strong>충돌(Conflict)</strong>은 Git이 변경을 자동으로 합칠 수 없는 상태입니다. 두 사람이 같은 부분을 다르게 고친 경우 등이 해당합니다.</p>
          <ul>
            <li>충돌한 파일을 열고 양쪽 변경의 의도를 팀원과 확인하세요. 필요한 코드를 합치고 충돌 표시를 정리합니다.</li>
            <li>수정 결과를 실행하거나 테스트한 뒤, GitHub Desktop의 안내에 따라 병합을 완료하고 Push하세요.</li>
          </ul>
          <p><strong>History</strong>에서는 Commit별 작성자, 메시지와 Diff를 확인할 수 있습니다. 이미 공유한 Commit을 취소해야 한다면 <strong>Revert</strong>로 반대 변경을 담은 새 Commit을 만드는 방법이 있습니다. 이후 변경에 따라 충돌이 생길 수 있으니 결과를 확인하세요.</p>
          <GuideQuestion summary="잠시 다른 작업을 해야 한다면?"><p><strong>Stash</strong>는 아직 Commit하지 않은 변경을 잠시 보관하는 기능입니다. 다른 작업을 마친 뒤 복원할 수 있으며, 복원 과정에서 충돌이 생길 수도 있습니다.</p></GuideQuestion>
          <GuideQuestion summary="추적하지 않을 파일은 어떻게 정하나요?"><p><code>.gitignore</code>에 빌드 결과물이나 로컬 설정 파일의 패턴을 적으면 아직 추적하지 않는 파일을 Git이 무시합니다. 이미 Commit한 파일에는 소급 적용되지 않습니다. 비밀번호나 API 키는 Commit에 포함하지 마세요.</p></GuideQuestion>
        </section><section>
          <StepTitle number={8}>작은 변경 하나로 연습하기</StepTitle>
          <p>README 실행 방법 추가를 직접 해보세요. <strong>기준 브랜치 Pull → 작업 브랜치 생성 → README 수정 → Diff 확인 → Commit → Push → PR → 리뷰와 Merge → 기준 브랜치 Pull</strong>까지 진행하면 협업의 기본 흐름을 한 번 경험한 것입니다.</p>
          <ReadingLinks>더 알아보기: <a href="https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop" target="_blank" rel="noopener noreferrer">Commit과 변경 검토</a>· <a href="https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop" target="_blank" rel="noopener noreferrer">브랜치 관리</a></ReadingLinks>
        </section></GuideBody><ButtonLink href="?guide=clone" spacing="standalone">← 이전 가이드: 팀의 레포지토리 복제하기</ButtonLink></GuidePage>
  )
}
