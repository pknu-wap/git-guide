import {
  GuideHeader,
  Callout,
  StepTitle,
  FlowSteps,
  ReadingLinks,
  ConceptGrid,
  Example,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
} from "../components/Guide";
export default function GitLabFlowGuide() {
  return (
    <GuidePage>
      <GuideHeader title="GitLab Flow 이해하기">
        여러 기능을 어디에 모으고, 언제 배포할까요? GitLab Flow는 이슈와 작업
        브랜치, 코드 리뷰, 배포 흐름을 연결하는 브랜치 전략입니다. 팀의 배포
        방식에 맞춰 적용하는 방법을 알아봅시다.
      </GuideHeader>
      <Callout id="flow-preparation" title="꼭 GitLab Flow를 사용해야 하나요?">
        <p>
          GitLab Flow 말고도 Git Flow, GitHub Flow 등 다양한 전략이 있습니다.
          팀에 맞는 전략을 찾아보세요.
        </p>
      </Callout>
      <GuideBody reading>
        <section>
          <StepTitle number={1}>기본 흐름 이해하기</StepTitle>
          <p>
            <code>main</code>에서 작업 브랜치를 만들고, 리뷰와 검사를 거쳐 다시{" "}
            <code>main</code>에 합칩니다. 이슈에는 작업 목적을, PR에는 실제
            변경과 확인 결과를 남깁니다.
          </p>
          <FlowSteps label="GitLab Flow의 기본 작업 순서">
            <li>
              <strong>이슈</strong>
              <span>할 일과 완료 기준</span>
            </li>
            <li>
              <strong>feat 브랜치</strong>
              <span>main에서 분기</span>
            </li>
            <li>
              <strong>풀 리퀘스트 (PR)</strong>
              <span>코드 리뷰</span>
            </li>
            <li>
              <strong>main 브랜치</strong>
              <span>검증한 작업 통합</span>
            </li>
          </FlowSteps>
          <ReadingLinks>
            참고 자료:{" "}
            <a
              href="https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab Flow 공식 소개
            </a>
          </ReadingLinks>
        </section>
        <section>
          <StepTitle number={2}>작업과 배포 브랜치 구분하기</StepTitle>
          <ConceptGrid>
            <div>
              <h3>feat 브랜치 · 짧게 유지</h3>
              <p>
                feat은 feature(기능)의 줄임말로, <code>feat/kakao-login</code>,{" "}
                <code>feat/fix-login-error</code>처럼 한 작업을 위한 공간입니다.
                main에서 분기하고 PR 후 다시 main으로 합칩니다.
              </p>
            </div>
            <div>
              <h3>main · 변경 통합</h3>
              <p>
                리뷰와 검사를 마친 작업을 모읍니다. 새 작업은 최신 main에서
                시작하고, main이 정상 동작하도록 관리합니다.
              </p>
            </div>
          </ConceptGrid>
          <p>
            개발 완료와 운영 배포 시점이 다르다면 <code>production</code>,{" "}
            <code>staging</code> 같은 환경 브랜치를 둘 수 있습니다. 이
            가이드에서는 feat, main, production 브랜치만을 사용합니다.
          </p>
        </section>
        <section>
          <StepTitle number={3}>기능 하나를 main에 합치기</StepTitle>
          <p>
            예를 들어 카카오 로그인 기능 이슈를 만들었다면 다음 순서로
            진행합니다.
          </p>
          <ul>
            <li>
              GitHub Desktop에서 <code>main</code>을 선택하고 Pull 합니다.
            </li>
            <li>
              <code>feat/kakao-login</code>을 만들고 수정 → 커밋 → 푸시합니다.
            </li>
            <li>
              PR의 <strong>base</strong>를 <code>main</code>,{" "}
              <strong>compare</strong>를 <code>feat/kakao-login</code>으로
              지정합니다.
            </li>
            <li>팀원이 PR을 리뷰한 후 수정합니다.</li>
            <li>
              PR을 머지한 뒤 <code>main</code> 브랜치로 전환해 Pull합니다.
            </li>
          </ul>
        </section>
        <section>
          <StepTitle number={4}>환경별로 배포하기</StepTitle>
          <p>화살표는 변경을 다음 브랜치로 전달하는 방향입니다.</p>
          <FlowSteps label="환경 브랜치 예시: feat에서 main, production 순서로 반영">
            <li>
              <strong>feat/kakao-login 브랜치→</strong>
              <span>기능 개발</span>
            </li>
            <li>
              <strong>main 브랜치→</strong>
              <span>리뷰한 기능 합치기</span>
            </li>
            <li>
              <strong>production 브랜치</strong>
              <span>배포 서버</span>
            </li>
          </FlowSteps>
          <ul>
            <li>
              <strong>실제 배포:</strong> 브랜치를 <code>production</code>{" "}
              브랜치에 머지하는 것만으로 서버가 바뀌지는 않습니다. 브랜치에
              연결된 CI/CD나 팀의 수동 배포 절차가 필요합니다.
            </li>
          </ul>
          <ReadingLinks>
            참고 자료:{" "}
            <a
              href="https://docs.gitlab.com/user/project/repository/branches/strategies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab 브랜치 전략 안내
            </a>
          </ReadingLinks>
        </section>
        <section>
          <StepTitle number={5}>팀의 규칙으로 정리하기</StepTitle>
          <p>
            팀 README 혹은 노션에 아래 항목을 기록해두면 새 팀원도 같은 방식으로
            작업할 수 있습니다.
          </p>
          <ul>
            <li>
              <strong>시작점:</strong> 새 작업은 어떤 브랜치에서 만드는가?
            </li>
            <li>
              <strong>리뷰 조건:</strong> 리뷰는 누가 하고, 어떤 검사를 통과해야
              하는가?
            </li>
            <li>
              <strong>배포 기준:</strong> main 브랜치에 쌓인 기능을 언제
              production 브랜치로 머지하는가?
            </li>
          </ul>
          <Example>
            예시: 이슈 작성 → main 브랜치 pull → feat 브랜치 생성 → PR 작성 →
            팀원 1명의 리뷰와 테스트 통과 → main 브랜치에 머지 → 일정 주기마다
            확인 후 production 브랜치에 머지
          </Example>
        </section>
      </GuideBody>
      <GuideNavigation>
        <a href="?guide=develop">← 이전 가이드: Git으로 함께 개발하기</a>
        <ButtonLink href="?guide=review">
          다음 가이드: PR 리뷰 주고받기 →
        </ButtonLink>
      </GuideNavigation>
    </GuidePage>
  );
}
