export default function GitLabFlowGuide() {
  return (
    <div className="page development-guide">
      <section className="hero" aria-labelledby="page-title">
        <h1 id="page-title">GitLab Flow 이해하기</h1>
        <div className="metadata"><span>대상: 팀장 · 팀원</span><span>소요 시간: 약 10분</span></div>
        <p className="intro">여러 기능을 어디에 모으고, 언제 배포할까요? GitLab Flow는 이슈와 작업 브랜치, 코드 리뷰, 배포 흐름을 연결하는 브랜치 전략입니다. 팀의 배포 방식에 맞춰 적용하는 방법을 알아봅시다.</p>
      </section>
      <aside className="preparation" aria-labelledby="flow-preparation">
        <div><h2 id="flow-preparation">앞 가이드의 develop과 구분하기</h2><p>앞에서는 팀의 기준 브랜치 예시로 <code>develop</code>을 사용했습니다. 이 페이지는 GitLab Flow의 <code>main</code> 중심 구조를 설명합니다. 팀에서 사용 중인 브랜치는 이름만 바꾸지 말고, 역할과 배포 설정을 함께 합의하세요.</p></div>
      </aside>
      <div className="instructions">
        <section>
          <h2 className="step-title"><span className="step-number">1</span>기본 흐름 이해하기</h2>
          <p><code>main</code>에서 작업 브랜치를 만들고, 리뷰와 검사를 거쳐 다시 <code>main</code>에 합칩니다. 이슈에는 작업 목적을, PR에는 실제 변경과 확인 결과를 남깁니다.</p>
          <ol className="git-flow" aria-label="GitLab Flow의 기본 작업 순서">
            <li><strong>Issue</strong><span>할 일과 완료 기준</span></li>
            <li><strong>작업 브랜치</strong><span>main에서 분기</span></li>
            <li><strong>PR / MR</strong><span>리뷰와 자동 검사</span></li>
            <li><strong>main</strong><span>검증한 작업 통합</span></li>
          </ol>
          <p>GitLab에서는 병합 제안을 <strong>Merge Request(MR)</strong>라고 부릅니다. GitHub에서도 PR을 사용해 같은 브랜치 전략을 적용할 수 있습니다. 여기서는 기존 가이드에 맞춰 GitHub와 PR을 예로 듭니다.</p>
          <p className="reading-links">개념 출처: <a href="https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/" target="_blank" rel="noopener noreferrer">GitLab Flow 공식 소개</a></p>
        </section>
        <section>
          <h2 className="step-title"><span className="step-number">2</span>작업과 배포 브랜치 구분하기</h2>
          <div className="concept-grid">
            <div><h3>작업 브랜치 · 짧게 유지</h3><p><code>feature/login</code>, <code>fix/login-error</code>처럼 한 작업을 위한 공간입니다. main에서 만들고 PR이 합쳐진 뒤 정리합니다.</p></div>
            <div><h3>main · 변경 통합</h3><p>리뷰와 검사를 마친 작업을 모읍니다. 새 작업은 최신 main에서 시작하고, main이 정상 동작하도록 관리합니다.</p></div>
          </div>
          <p>개발 완료와 운영 배포 시점이 다르다면 <code>production</code> 같은 환경 브랜치를 둘 수 있습니다. 사전 검증 환경이 필요할 때는 <code>staging</code>을 추가할 수도 있습니다. 모든 팀이 이 브랜치를 전부 만들 필요는 없습니다.</p>
        </section>
        <section>
          <h2 className="step-title"><span className="step-number">3</span>기능 하나를 main에 합치기</h2>
          <p>예를 들어 로그인 기능 이슈를 만들었다면 다음 순서로 진행합니다.</p>
          <ul>
            <li>GitHub Desktop에서 <code>main</code>을 선택하고 Fetch·Pull합니다.</li>
            <li><code>feature/login</code>을 만들고 수정 → 테스트 → Commit → Push합니다.</li>
            <li>PR의 <strong>base</strong>를 <code>main</code>, <strong>compare</strong>를 <code>feature/login</code>으로 지정합니다.</li>
            <li>관련 이슈, 변경 설명, 테스트 결과를 적고 팀원의 리뷰와 필요한 검사를 확인합니다.</li>
            <li>PR을 Merge한 뒤 main으로 돌아와 Fetch·Pull합니다.</li>
          </ul>
          <p>gh를 사용한다면 Push한 작업 브랜치에서 아래처럼 PR을 만들 수 있습니다. <code>gh</code>는 GitHub용 도구이며, GitLab 서버에서 실행하는 명령어는 아닙니다.</p>
          <pre className="command-block"><code>gh pr create --base main --head feature/login</code></pre>
        </section>
        <section>
          <h2 className="step-title"><span className="step-number">4</span>환경별로 배포하기</h2>
          <p>다음은 <strong>환경 브랜치를 사용하는 팀의 예시</strong>입니다. 화살표는 변경을 다음 브랜치로 전달하는 방향입니다.</p>
          <ol className="git-flow" aria-label="환경 브랜치 예시: feature에서 main, staging, production 순서로 반영">
            <li><strong>feature/login →</strong><span>기능 개발</span></li>
            <li><strong>main →</strong><span>리뷰한 기능 통합</span></li>
            <li><strong>staging →</strong><span>배포 후보 검증</span></li>
            <li><strong>production</strong><span>운영 반영</span></li>
          </ol>
          <ul>
            <li><strong>검증 요청:</strong> base를 <code>staging</code>, compare를 <code>main</code>으로 지정한 PR에서 포함된 변경을 확인합니다.</li>
            <li><strong>운영 반영:</strong> 검증을 마치면 base를 <code>production</code>, compare를 <code>staging</code>으로 지정해 승인 후 반영합니다.</li>
            <li><strong>실제 배포:</strong> 브랜치를 Merge하는 것만으로 서버가 바뀌지는 않습니다. 각 브랜치에 연결된 CI/CD나 팀의 수동 배포 절차가 필요합니다.</li>
          </ul>
          <p>브랜치 간 Merge에는 그 사이의 변경이 함께 들어갑니다. 특정 기능 하나만 배포한다고 생각하지 말고, PR의 전체 Diff와 배포 후보 Commit을 확인하세요. 검증 중 새 변경이 들어오면 영향을 다시 검사합니다.</p>
          <p className="reading-links">환경·버전별 확장: <a href="https://docs.gitlab.com/user/project/repository/branches/strategies/" target="_blank" rel="noopener noreferrer">GitLab 브랜치 전략 안내</a></p>
        </section>
        <section>
          <h2 className="step-title"><span className="step-number">5</span>버그 수정도 다음 배포에 포함하기</h2>
          <p>일반적인 버그는 main에서 <code>fix/login-error</code>를 만들어 수정하고 PR로 main에 합칩니다. 환경 브랜치가 있다면 같은 수정이 staging과 production까지 전달되도록 확인하세요.</p>
          <p>운영 장애로 배포 버전을 먼저 수정해야 한다면, 운영 기준에서 만든 긴급 수정 브랜치로 필요한 변경만 검증해 반영할 수 있습니다. 이때 같은 수정이 main에도 들어가도록 별도 PR로 추적하세요. 운영에만 수정이 남으면 다음 배포에서 문제가 다시 나타날 수 있습니다.</p>
          <details className="git-question"><summary>여러 출시 버전을 동시에 지원한다면?</summary><p><code>stable/v1</code>, <code>stable/v2</code>처럼 버전별 브랜치를 유지하는 방법이 있습니다. 버그가 영향을 주는 버전을 확인하고 필요한 수정만 각 버전에 반영합니다. 이전 버전을 실제로 유지보수해야 할 때 도입하세요.</p></details>
        </section>
        <section>
          <h2 className="step-title"><span className="step-number">6</span>팀의 규칙으로 정리하기</h2>
          <p>팀 README에 아래 항목을 기록해두면 새 팀원도 같은 방식으로 작업할 수 있습니다.</p>
          <ul>
            <li><strong>시작점:</strong> 새 작업은 어떤 브랜치에서 만드는가?</li>
            <li><strong>병합 조건:</strong> 리뷰는 누가 하고, 어떤 검사가 통과해야 하는가?</li>
            <li><strong>배포 기준:</strong> 어떤 브랜치나 Commit을 누가 언제 배포하는가?</li>
            <li><strong>장애 대응:</strong> 긴급 수정은 어디에서 시작하고 어떤 브랜치에 반영하는가?</li>
          </ul>
          <p className="example">작성 예시: main에서 작업 브랜치 생성 → 팀원 1명 리뷰와 테스트 통과 → main에 Merge → 배포 담당자가 후보 Commit 확인 후 배포</p>
          <details className="git-question"><summary>Git Flow와 같은 방식인가요?</summary><p>전통적인 Git Flow는 main과 develop을 나누고 release·hotfix 브랜치를 활용합니다. GitLab Flow는 main 중심으로 기능을 통합하고 배포 요구에 맞게 확장합니다. develop이라는 이름 하나만으로 팀의 전략이 정해지는 것은 아니며, 실제 병합 방향과 브랜치 역할이 중요합니다.</p></details>
        </section>
      </div>
      <div className="guide-navigation">
        <a href="?guide=conflict">← 이전 가이드: 충돌 해결하기</a>
        <a className="button" href="?guide=gitignore">다음 가이드: .gitignore 사용하기 →</a>
      </div>
    </div>
  )
}
