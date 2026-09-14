import {
  GuideHeader,
  Callout,
  StepTitle,
  ConceptGrid,
  FlowSteps,
  Example,
  GuideQuestion,
  GuideBody,
  ButtonLink,
  GuidePage,
  GuideScreenshot,
} from '../components/Guide'
export default function DevelopmentGuide() {
  return (
    <GuidePage><GuideHeader title="Git으로 함께 개발하기" audience="팀장 · 팀원" duration="약 15분">코드를 수정하고, 변경 이력을 남기고, 팀원의 작업과 합치는 과정을 알아봅시다.</GuideHeader><Callout id="development-preparation" title="시작 전 준비사항"><p>앞 가이드에서 팀의 레포지토리를 복제하고 GitHub Desktop에서 열어두세요. 팀에서 작업을 합치는 Default 브랜치가 무엇인지 확인합니다.</p></Callout><GuideBody reading><section>
          <StepTitle number={1}>Git과 GitHub 이해하기</StepTitle>
          <p><strong>Git</strong>은 파일의 변경 이력을 기록하고 여러 작업을 합치는 버전 관리 도구입니다. <strong>GitHub</strong>는 레포지토리를 온라인에서 공유하고 코드 리뷰를 진행하는 서비스이며, <strong>GitHub Desktop</strong>은 Git 작업을 버튼으로 실행하는 앱입니다.</p>
          <ConceptGrid><div><h3>내 컴퓨터 · Git</h3><p>파일을 수정하고 Commit을 만드는 곳입니다. 인터넷 연결 없이도 변경 이력을 기록할 수 있습니다.</p></div><div><h3>원격 · GitHub</h3><p>Push와 Pull을 사용하여 팀원들과 Commit을 공유하는 곳입니다.</p></div></ConceptGrid>
          <FlowSteps label="변경 사항이 공유되는 순서"><li><strong>파일 수정</strong><span>작업 폴더</span></li><li><strong>Add</strong><span>어떤 파일을 커밋할지 선택</span></li><li><strong>Commit</strong><span>내 컴퓨터에 변경사항 기록</span></li><li><strong>Push</strong><span>원격에 업로드</span></li></FlowSteps>
          <p>에디터에서 파일을 저장해도 Commit이 생기지는 않습니다. Commit을 만들어도 Push하기 전까지는 내 컴퓨터에만 남아 있습니다.</p>
        </section><section>
          <StepTitle number={2}>Issue로 할 일 정리하기</StepTitle>
          <p><strong>이슈(Issue)</strong>는 구현할 기능이나 수정할 버그처럼 할 일을 기록하고 논의하는 공간입니다. 코드를 수정하기 전에 이슈로 작업 목적과 범위를 공유하면 팀원이 무엇을 진행하는지 알 수 있고, 중복 작업도 줄일 수 있습니다.</p>
          <ul>
            <li>기존 이슈에 같은 작업이 있는지 먼저 확인하세요.</li>
            <li>제목은 <strong>카카오 로그인 기능 구현</strong>처럼 할 일이 드러나도록 작성하세요.</li>
            <li>본문에는 <strong>해결할 문제</strong>, <strong>제안 내용</strong>, <strong>완료 기준</strong>을 적고, 참고 자료가 있다면 함께 첨부하세요.</li>
            <li>팀원과 담당자와 작업 범위를 정한 뒤, 작업 브랜치를 만들어 개발을 시작하세요.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}issue.png`} width={1860} height={1268} alt="GitHub의 카카오 로그인 기능 구현 이슈 #1: 해결할 문제, 제안 내용, 완료 기준 체크리스트와 추가 정보가 작성된 화면. 새 탭에서 원본 이미지 보기." loading="lazy" caption="작업 목적과 완료 기준을 정리한 이슈 예시" placement="inline" />
          <Example>예시: #1 카카오 로그인 기능 구현 이슈 작성 → feat/kakao-login 브랜치에서 작업 → PR 본문에 #1을 적어 관련 이슈 공유</Example>
        </section><section>
          <StepTitle number={3}>Fetch · Pull로 최신 코드 가져오기</StepTitle>
          <p>작업을 시작하기 전에 <strong>Current Branch</strong>에서 Default 브랜치를 선택하세요. <strong>Fetch origin</strong>으로 원격의 새 Commit을 확인하고, 받을 변경이 있다면 <strong>Pull origin</strong>을 눌러 현재 로컬 브랜치에 반영합니다.</p>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}fetch.png`} width={918} height={98} alt="GitHub Desktop의 Current Branch가 main으로 선택되어 있고 Fetch origin 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Default 브랜치를 확인하고 Fetch origin으로 최신 이력 가져오기" placement="inline" />
          <dl className="my-6 [&>div]:grid [&>div]:grid-cols-[80px_1fr] [&>div]:gap-4 [&>div]:border-b [&>div]:border-(--border) [&>div]:py-4 [&_dt]:font-bold [&_dt]:text-(--forest) [&_dd]:m-0">
            <div><dt>Fetch</dt><dd>원격의 최신 이력을 가져옵니다. 현재 작업 중인 파일에 변경을 합치지는 않습니다.</dd></div>
            <div><dt>Pull</dt><dd>원격의 변경을 가져와 현재 브랜치에 통합합니다. 같은 부분을 다르게 수정했다면 충돌이 생길 수 있습니다.</dd></div>
        </dl>
        <p>아직 Commit하지 않은 작업이 있다면 먼저 Commit하거나 Stash로 잠시 보관한 뒤 브랜치를 바꾸거나 Pull하세요.</p>
          <Callout id="pull-before-work" title="왜 Pull을 먼저 해야 하나요?" kind="note"><p>내가 작업하지 않는 동안 팀원이 올린 변경이 있을 수 있습니다. 작업을 시작하기 전에 Pull하면 최신 코드를 기준으로 새 브랜치를 만들고 작업할 수 있어, 이미 바뀐 코드를 다시 수정하거나 같은 작업을 중복하는 일을 줄일 수 있습니다.</p></Callout>
        </section><section>
          <StepTitle number={4}>Branch로 작업 공간 나누기</StepTitle>
          <p><strong>브랜치(Branch)</strong>는 변경 이력의 갈래입니다. Default 브랜치에서 새 브랜치를 만들면 팀의 기준 코드를 바로 바꾸지 않고 작업할 수 있습니다.</p>
          <ul>
            <li>최신 상태의 Default 브랜치에서 <strong>Current Branch → New Branch</strong>를 선택하세요.</li>
            <li><code>feat/kakao-login</code>처럼 목적이 드러나는 이름을 사용합니다.</li>
            <li>생성 후 <strong>Current Branch</strong>가 새 브랜치인지 확인하고 파일 수정을 시작하세요.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}branch.png`} width={2144} height={1544} alt="GitHub Desktop의 Create a Branch 화면: main을 기준으로 feat/kakao-login 브랜치 이름을 입력하고 Create Branch 버튼으로 생성하는 예시. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Default 브랜치에서 feat/kakao-login 작업 브랜치 만들기 예시" placement="inline" />
          <Callout id="why-create-branch" title="브랜치를 왜 만드나요?" kind="note"><p>여러 사람이 Default 브랜치에서 바로 작업하면 아직 완성하지 않은 기능이나 오류가 팀의 공통 코드에 섞일 수 있습니다. 작업별로 브랜치를 만들면 각자 변경을 독립적으로 기록하고, 테스트와 코드 리뷰를 거친 뒤 Default 브랜치에 합칠 수 있습니다. 예를 들어 카카오 로그인 기능을 개발하는 동안에도 다른 팀원은 별도 브랜치에서 다른 기능을 작업할 수 있습니다.</p></Callout>
          </section><section>
          <StepTitle number={5}>변경 사항을 확인하고 Commit 만들기</StepTitle>
          <p>실제로 필요한 기능을 구현하세요. GitHub Desktop의 <strong>Changes</strong>에서 변경된 파일을 누르면 이전 내용과의 차이인 <strong>Diff</strong>를 볼 수 있습니다.</p>
          <ul>
            <li>추가·삭제한 내용을 읽고 의도한 변경인지 확인하세요.</li>
            <li>파일 옆 체크박스로 이번 Commit에 포함할 변경만 선택하세요. 이 과정을 <strong>Add</strong>라고 합니다.</li>
            <li><strong>Commit message</strong>에 <code>feat: 카카오 로그인 구현</code>처럼 무엇을 변경했는지 적으세요. 더 자세한 설명은 <strong>Description</strong>에 넣습니다.</li>
            <li><strong>Commit to feat/kakao-login</strong>을 눌러 커밋을 만드세요. 서로 관련된 변경을 한 Commit으로 묶으면 나중에 이해하기 쉽습니다.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}changes.png`} width={2144} height={1544} alt="GitHub Desktop의 Changes 화면: test.txt의 추가된 내용을 Diff로 확인하고 feat/kakao-login 브랜치에 Commit하는 예시. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Changes에서 변경된 파일을 확인하고 Commit 만들기 예시" placement="inline" />
        </section><section>
          <StepTitle number={6}>Push로 팀원에게 공유하기</StepTitle>
          <p><strong>Push</strong>는 내 컴퓨터에서 만든 Commit을 원격 브랜치로 공유합니다. 새 브랜치를 처음 공유할 때는 <strong>Publish branch</strong>를, 이후에는 <strong>Push origin</strong>을 누르세요.</p>
          <p>GitHub에서 해당 브랜치를 선택하고 Commit과 파일 변경이 보이는지 확인합니다. Push는 현재 작업 브랜치를 공유하는 동작이며, Default 브랜치에 합치는 작업은 별도로 진행합니다.</p>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}publish_branch.png`} width={900} height={102} alt="GitHub Desktop에서 Current Branch가 feat/kakao-login으로 선택되어 있고 Publish branch 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Publish branch로 새 작업 브랜치를 원격에 처음 공유하기" placement="inline" />
        </section><section>
          <StepTitle number={7}>Pull Request로 리뷰받고 Merge하기</StepTitle>
          <p><strong>Pull Request(PR)</strong>는 GitHub에서 내 브랜치의 변경을 다른 브랜치에 합치자고 제안하는 기능입니다. <strong>Merge</strong>는 두 브랜치의 변경 이력을 통합하는 Git 작업입니다.</p>
          <ul>
            <li>GitHub Desktop의 <strong>Preview Pull Request</strong>로 변경을 확인하고 <strong>Create Pull Request</strong>로 GitHub에서 PR 작성을 진행하세요.</li>
            <li><strong>base</strong>는 변경을 받을 Default 브랜치, <strong>compare</strong>는 내 작업 브랜치입니다. 예시에서는 base가 <code>main</code>, compare가 <code>feat/kakao-login</code>입니다.</li>
            <li>변경 목적, 수정 내용, 확인한 내용을 적고 팀원에게 리뷰를 요청하세요.</li>
            <li>피드백은 같은 브랜치에서 수정 → Commit → Push하면 기존 PR에 반영됩니다.</li>
            <li>리뷰와 필요한 검사가 끝나면 팀의 규칙에 따라 PR을 Merge하세요. 이후 로컬 Default 브랜치로 돌아와 Fetch·Pull로 결과를 가져옵니다.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}pull_request.png`} width={1778} height={1650} alt="GitHub의 카카오 로그인 구현 Pull Request 화면: feat/kakao-login에서 main으로 병합을 제안하고 변경 내용, 관련 이슈, 검증 결과와 리뷰 참고 사항을 작성한 예시. 새 탭에서 원본 이미지 보기." loading="lazy" caption="변경 내용과 검증 결과를 정리한 Pull Request 예시" placement="inline" />
        </section><section>
          <StepTitle number={8}>충돌 해결과 변경 이력 확인</StepTitle>
          <p><strong>충돌(Conflict)</strong>은 Git이 변경을 자동으로 합칠 수 없는 상태입니다. 두 사람이 같은 부분을 다르게 고친 경우 등이 해당합니다.</p>
          <ul>
            <li>충돌한 파일을 열고 양쪽 변경의 의도를 팀원과 확인하세요. 필요한 코드를 합치고 충돌 표시를 정리합니다.</li>
            <li>수정 결과를 실행하거나 테스트한 뒤, GitHub Desktop의 안내에 따라 병합을 완료하고 Push하세요.</li>
          </ul>
          <p><strong>History</strong>에서는 Commit별 작성자, 메시지와 Diff를 확인할 수 있습니다. 이미 공유한 Commit을 취소해야 한다면 <strong>Revert</strong>로 반대 변경을 담은 새 Commit을 만드는 방법이 있습니다. 이후 변경에 따라 충돌이 생길 수 있으니 결과를 확인하세요.</p>
          <GuideQuestion summary="잠시 다른 작업을 해야 한다면?"><p><strong>Stash</strong>는 아직 Commit하지 않은 변경을 잠시 보관하는 기능입니다. 다른 작업을 마친 뒤 복원할 수 있으며, 복원 과정에서 충돌이 생길 수도 있습니다.</p></GuideQuestion>
          <GuideQuestion summary="추적하지 않을 파일은 어떻게 정하나요?"><p><code>.gitignore</code>에 빌드 결과물이나 로컬 설정 파일의 패턴을 적으면 아직 추적하지 않는 파일을 Git이 무시합니다. 이미 Commit한 파일에는 소급 적용되지 않습니다. 비밀번호나 API 키는 Commit에 포함하지 마세요.</p></GuideQuestion>
        </section></GuideBody><ButtonLink href="?guide=clone" spacing="standalone">← 이전 가이드: 팀의 레포지토리 복제하기</ButtonLink></GuidePage>
  )
}
