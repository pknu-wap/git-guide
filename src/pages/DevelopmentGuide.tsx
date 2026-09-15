import {
  GuideHeader,
  Callout,
  StepTitle,
  ConceptGrid,
  FlowSteps,
  Example,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
  GuideScreenshot,
} from '../components/Guide'
export default function DevelopmentGuide() {
  return (
    <GuidePage><GuideHeader title="Git으로 함께 개발하기" duration="약 15분">코드를 수정하고, 변경 이력을 남기고, 팀원의 작업과 합치는 과정을 알아봅시다.</GuideHeader><Callout id="development-preparation" title="시작 전 준비사항"><p>GitHub Desktop에서 팀 레포지토리를 열어주세요. 팀에서 작업을 합치는 Default 브랜치가 무엇인지 확인합니다.</p></Callout><GuideBody reading><section>
          <StepTitle number={1}>깃과 깃허브 이해하기</StepTitle>
          <p><strong>깃(Git)</strong>은 파일의 변경 이력을 기록하고 여러 작업을 합치는 버전 관리 도구입니다. <strong>깃허브(GitHub)</strong>는 레포지토리를 온라인에서 공유하고 코드 리뷰를 진행하는 서비스이며, <strong>깃허브 데스크톱(GitHub Desktop)</strong>은 깃이나 깃허브의 기능을 버튼으로 쉽게 사용할 수 있도록 도와주는 프로그램입니다.</p>
          <ConceptGrid><div><h3>내 컴퓨터 · 깃</h3><p>파일을 수정하고 커밋(Commit)을 만드는 곳입니다. 인터넷 연결 없이도 변경 이력을 기록할 수 있습니다.</p></div><div><h3>원격 · 깃허브</h3><p>푸시(Push)와 풀(Pull)을 사용하여 팀원들과 커밋을 공유하는 곳입니다.</p></div></ConceptGrid>
          <FlowSteps label="변경 사항이 공유되는 순서"><li><strong>파일 수정</strong><span>에디터나 IDE로 수정</span></li><li><strong>Add</strong><span>어떤 파일을 커밋할지 선택</span></li><li><strong>커밋(Commit)</strong><span>내 컴퓨터에 변경사항 기록</span></li><li><strong>푸시(Push)</strong><span>원격(깃허브)에 업로드</span></li></FlowSteps>
          <p>파일을 수정할 때 자동으로 커밋이 생기지는 않습니다. 직접 커밋해야합니다. 또한, 커밋을 만들어도 푸시하기 전까지는 내 컴퓨터에만 남아 있습니다.</p>
        </section><section>
          <StepTitle number={2}>이슈로 할 일 정리하기</StepTitle>
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
          <StepTitle number={3}>Pull로 최신 코드 가져오기</StepTitle>
          <p>작업을 시작하기 전에 <strong>Current Branch</strong>에서 Default 브랜치(보통은 main 또는 master)를 선택하세요. <strong>Fetch origin</strong>으로 원격의 새 커밋을 확인하고, 받을 변경이 있다면 <strong>Pull origin</strong>을 눌러 내 컴퓨터의 브랜치에 반영합니다.</p>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}fetch.png`} width={918} height={98} alt="GitHub Desktop의 Current Branch가 main으로 선택되어 있고 Fetch origin 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Default 브랜치를 확인하고 Fetch origin으로 최신 이력 가져오기" placement="inline" />
          <dl className="my-6 [&>div]:grid [&>div]:grid-cols-[80px_1fr] [&>div]:gap-4 [&>div]:border-b [&>div]:border-(--border) [&>div]:py-4 [&_dt]:font-bold [&_dt]:text-(--forest) [&_dd]:m-0">
            <div><dt>Fetch</dt><dd>깃허브의 최신 이력을 가져옵니다. 이력만 가져올 뿐 실제로 파일을 업데이트하지는 않습니다.</dd></div>
            <div><dt>Pull</dt><dd>깃허브의 최신 이력을 가져오고 실제로 파일까지 업데이트합니다. 같은 부분을 다르게 수정했다면 충돌이 발생할 수 있습니다.</dd></div>
        </dl>
        <p>아직 커밋하지 않은 작업이 있다면 먼저 커밋하거나 Stash로 잠시 보관한 뒤 브랜치를 바꾸거나 Pull하세요.</p>
          <Callout id="pull-before-work" title="왜 Pull을 먼저 해야 하나요?" kind="note"><p>내가 작업하지 않는 동안 팀원이 올린 변경이 있을 수 있습니다. 작업을 시작하기 전에 Pull하면 최신 코드를 기준으로 새 브랜치를 만들고 작업할 수 있어, 이미 바뀐 코드를 다시 수정하거나 같은 작업을 중복하는 일을 줄일 수 있습니다.</p></Callout>
        </section><section>
          <StepTitle number={4}>브랜치로 작업 공간 나누기</StepTitle>
          <p><strong>브랜치(Branch)</strong>는 작업 내역을 분기하는 기능입니다. 브랜치별로 서로 다른 파일과 작업 내용을 둘 수 있으며, 브랜치를 바꾸면 내 컴퓨터의 실제 파일도 그 브랜치에 맞게 변경됩니다.</p>
          <ul>
            <li>Default 브랜치(보통은 main 또는 master)에서 Pull한 후 <strong>Current Branch → New Branch</strong>를 선택하세요.</li>
            <li><code>feat/kakao-login</code>처럼 목적이 드러나는 이름을 사용합니다.</li>
            <li>생성 후 <strong>Current Branch</strong>가 새 브랜치인지 확인하고 파일 수정을 시작하세요.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}branch.png`} width={2144} height={1544} alt="GitHub Desktop의 Create a Branch 화면: main을 기준으로 feat/kakao-login 브랜치 이름을 입력하고 Create Branch 버튼으로 생성하는 예시. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Default 브랜치에서 feat/kakao-login 작업 브랜치 만들기 예시" placement="inline" />
          <Callout id="why-create-branch" title="브랜치를 왜 만드나요?" kind="note"><p>여러 사람이 Default 브랜치에서 바로 작업하면 아직 완성하지 않은 기능이나 오류가 팀의 공통 코드에 섞일 수 있습니다. 작업별로 브랜치를 만들면 각자 변경을 독립적으로 기록하고, 테스트와 코드 리뷰를 거친 뒤 Default 브랜치에 합칠 수 있습니다. 예를 들어 카카오 로그인 기능을 개발하는 동안에도 다른 팀원은 별도의 브랜치에서 다른 기능을 작업할 수 있습니다.</p></Callout>
          </section><section>
          <StepTitle number={5}>변경 사항을 확인하고 커밋 만들기</StepTitle>
          <p>실제로 필요한 기능을 구현하세요. GitHub Desktop의 <strong>Changes</strong>에서 변경된 파일을 누르면 이전 내용과의 차이점을 볼 수 있습니다.</p>
          <ul>
            <li>수정한 내용을 읽고 의도한 변경인지 확인하세요.</li>
          <li>파일 옆 체크박스로 이번 Commit에 포함할 변경만 선택하세요. 이 과정을 <strong>Add</strong>라고 합니다.</li>
          <li>오른쪽 변경사항에서 필요한 줄을 체크해서 한 파일의 특정 부분만을 <strong>Add</strong>할 수도 있습니다.</li>
            <li><strong>Commit message</strong>에 <code>feat: 카카오 로그인 구현</code>처럼 무엇을 변경했는지 적으세요. 더 자세한 설명은 <strong>Description</strong>에 넣습니다.</li>
            <li><strong>Commit to feat/kakao-login</strong>을 눌러 커밋을 만드세요. 서로 연관된 작업을 한 커밋으로 묶으면 나중에 이해하기 쉽습니다.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}changes.png`} width={2144} height={1544} alt="GitHub Desktop의 Changes 화면: test.txt의 추가된 내용을 Diff로 확인하고 feat/kakao-login 브랜치에 Commit하는 예시. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Changes에서 변경된 파일을 확인하고 Commit 만들기 예시" placement="inline" />
        </section><section>
          <StepTitle number={6}>푸시로 팀원에게 공유하기</StepTitle>
          <p><strong>푸시(Push)</strong>는 내 컴퓨터에서 만든 커밋을 깃허브로 공유합니다. 새 브랜치를 처음 공유할 때는 <strong>Publish branch</strong>를, 이후에는 <strong>Push origin</strong>을 누르세요.</p>
          <p>푸시 후에 깃허브<strong>(Ctrl + Shift + G)</strong>에서 내 작업 내용을 확인하실 수 있습니다.</p>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}publish_branch.png`} width={900} height={102} alt="GitHub Desktop에서 Current Branch가 feat/kakao-login으로 선택되어 있고 Publish branch 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Publish branch로 새 작업 브랜치를 원격에 처음 공유하기" placement="inline" />
        </section><section>
          <StepTitle number={7}>풀 리퀘스트로 리뷰받고 머지하기</StepTitle>
          <p><strong>풀 리퀘스트(Pull Request, PR)</strong>는 깃허브에서 내 브랜치의 변경을 다른 브랜치에 합치자고 제안하는 기능입니다. <strong>Merge</strong>는 두 브랜치의 변경 이력을 통합하는 Git 작업입니다.</p>
          <ul>
            <li>깃허브 데스크톱의 <strong>Preview Pull Request</strong>로 변경을 확인하고 <strong>Create Pull Request</strong>로 깃허브에서 PR 작성을 진행하세요.</li>
            <li><strong>base</strong>는 변경을 받을 브랜치, <strong>compare</strong>는 내 작업 브랜치입니다. 예시에서는 base가 <code>main</code>, compare가 <code>feat/kakao-login</code>입니다.</li> 팀에 따라 develop 브랜치에 변경 사항을 합치는 경우도 있으니 확인하세요.
            <li>변경 내용, 관련 이슈, 리뷰 받고 싶은 내용 등을 적고 팀원에게 리뷰를 요청하세요.</li>
            <li>피드백 발생 시 같은 브랜치에서 수정 → 커밋 → 푸시하면 기존 PR에 반영됩니다.</li>
            <li>리뷰와 필요한 검사가 끝나면 팀의 규칙에 따라 PR을 머지하세요. 이후 깃허브 데스크톱에서 base 브랜치로 돌아와 Pull로 결과를 가져옵니다.</li>
          </ul>
          <GuideScreenshot src={`${import.meta.env.BASE_URL}pull_request.png`} width={1778} height={1650} alt="GitHub의 카카오 로그인 구현 Pull Request 화면: feat/kakao-login에서 main으로 병합을 제안하고 변경 내용, 관련 이슈, 검증 결과와 리뷰 참고 사항을 작성한 예시. 새 탭에서 원본 이미지 보기." loading="lazy" caption="변경 내용과 검증 결과를 정리한 Pull Request 예시" placement="inline" />
        </section><section>
          <StepTitle number={8}>충돌 해결과 변경 이력 확인</StepTitle>
        <p><strong>충돌(Conflict)</strong>은 깃이 변경을 자동으로 합칠 수 없는 상태입니다. 두 사람이 같은 부분을 다르게 고친 경우 등이 해당합니다.</p>
        <p>해결 방법은 <a href="?guide=conflict">충돌 해결하기</a> 가이드를 참고하세요.</p>
        </section></GuideBody><GuideNavigation><a href="?guide=clone">← 이전 가이드: 팀의 레포지토리 복제하기</a><ButtonLink href="?guide=gitlab-flow" spacing="navigation">다음 가이드: GitLab Flow 이해하기 →</ButtonLink></GuideNavigation></GuidePage>
  )
}
