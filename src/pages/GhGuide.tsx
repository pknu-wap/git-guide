import {
  GuideHeader,
  Callout,
  StepTitle,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
  GuideScreenshot,
} from "../components/Guide";
import CommandBlock from "../components/CopyableCommandBlock";
export default function GhGuide() {
  return (
    <GuidePage>
      <GuideHeader title="GitHub CLI 사용하기">
        GitHub CLI는 터미널에서 GitHub의 기능을 사용하는 공식 도구입니다.{" "}
        <code>gh</code>명령어로 이슈를 확인하고 Pull Request를 만들어봅시다.
        앞에서 배운 GitHub Desktop과 함께 사용할 수 있습니다.
      </GuideHeader>
      <Callout id="why-github-cli" title="왜 GitHub CLI를 사용하나요?">
        <p>
          꼭 사용하지 않아도 됩니다. 하지만 이슈 생성, PR 작성, 검사 결과
          확인처럼 자주 하는 작업을 빠르게 실행하고, 반복 작업은 스크립트로
          자동화할 수 있습니다. 특히 AI를 사용해서 개발할 때 유용합니다.
        </p>
      </Callout>
      <GuideBody reading>
        <section>
          <StepTitle number={1}>gh 설치하기</StepTitle>
          <p>
            GitHub CLI 공식 사이트에서 운영체제에 맞는 설치 안내를 따라 gh를
            설치하세요.
          </p>
          <ButtonLink href="https://cli.github.com" external>
            GitHub CLI 공식 사이트
          </ButtonLink>
          <p>
            설치 후 터미널(Git Bash를 권장합니다)을 새로 열고 버전이 출력되는지
            확인합니다.
          </p>
          <CommandBlock>gh --version</CommandBlock>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}gh.png`}
            width={1140}
            height={640}
            alt="터미널에서 gh --version 명령어를 실행해 GitHub CLI 버전이 출력된 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <p>
            <code>git</code>은 Commit·브랜치·Push 같은 코드 이력 관리를,{" "}
            <code>gh</code>는 이슈·PR 같은 GitHub 기능을 담당합니다.
          </p>
        </section>
        <section>
          <StepTitle number={2}>GitHub 계정으로 로그인</StepTitle>
          <CommandBlock>gh auth login</CommandBlock>
          <ul>
            <li>
              사용할 서비스는 <strong>GitHub.com</strong>, Git 통신 방식은{" "}
              <strong>HTTPS</strong>를 선택하세요.
            </li>
            <li>
              Git 인증에도 GitHub 자격 증명을 사용할지 물으면{" "}
              <strong>Yes</strong>를 선택하세요.
            </li>
            <li>
              <strong>Login with a web browser</strong>를 선택하고, 터미널에
              표시된 일회용 코드를 브라우저에 입력해 로그인을 완료하세요.
            </li>
          </ul>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}gh_login.png`}
            width={1138}
            height={802}
            alt="터미널에서 gh auth login으로 GitHub.com과 HTTPS, 웹 브라우저 로그인을 선택하고 Authentication complete와 로그인된 계정을 확인한 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <CommandBlock>gh auth status</CommandBlock>
          <p>로그인된 계정이 자신이 사용하는 계정인지 확인하세요.</p>
        </section>
        <section>
          <StepTitle number={3}>팀 레포지토리에서 시작하기</StepTitle>
          <p>
            GitHub Desktop에서 팀 레포지토리를 선택하고{" "}
            <strong>Repository → Open in Terminal (Ctrl + `)</strong>을
            누르세요.
          </p>
          <p>연결된 레포지토리를 확인하고 브라우저에서 열어보세요.</p>
          <CommandBlock>{`gh browse`}</CommandBlock>
        </section>
        <section>
          <StepTitle number={4}>gh로 할 수 있는 일</StepTitle>
          <p>
            gh를 사용하면 터미널에서 이슈와 PR을 관리할 수 있습니다. AI에게
            부탁할 때도 어떤 작업을 원하는지 구체적으로 설명하면 됩니다.
          </p>
          <h3>이슈 확인하거나 만들기</h3>
          <p>
            열린 이슈 목록과 상세 내용을 확인하고, 버그나 새로운 작업을 이슈로
            등록할 수 있습니다.
          </p>
          <p>
            AI 요청 예시: "열린 이슈를 확인하고, 로그인과 관련된 이슈를
            요약해줘."
          </p>
          <h3>작업한 내용으로 PR 만들기</h3>
          <p>
            작업 브랜치를 Push한 뒤, 변경 내용을 정리해 PR을 만들 수 있습니다.
            변경 목적, 테스트 결과, 관련 이슈를 함께 적으면 팀원이 리뷰하기
            편합니다.
          </p>
          <p>
            AI 요청 예시: "현재 브랜치에서 main으로 보내는 PR을 만들어줘. 변경
            내용과 테스트 결과를 본문에 정리해줘."
          </p>
          <h3>PR 진행 상황 확인하기</h3>
          <p>
            PR 목록과 변경된 코드, 리뷰 상태, 자동 검사 결과를 확인할 수
            있습니다. 필요한 경우 해당 PR을 브라우저로 열어 팀원과 의견을
            주고받을 수도 있습니다.
          </p>
          <p>
            AI 요청 예시: "내 PR의 리뷰 상태와 자동 검사 결과를 확인하고, 아직
            처리할 일을 정리해줘."
          </p>
          <ReadingLinks>
            참고 자료:{" "}
            <a
              href="https://cli.github.com/manual/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub CLI 공식 매뉴얼
            </a>
          </ReadingLinks>
        </section>
        <section>
          <StepTitle number={5}>IDE에서 터미널 사용하기</StepTitle>
          <p>
            Zed, vscode, IntelliJ IDEA 등 대부분의 IDE에서는 내장 터미널을 열 수
            있습니다. 별도의 터미널 창을 열지 않고도 코드를 편집하는 화면에서
            바로 명령어를 실행할 수 있어 편리합니다.
          </p>
          <p>
            다음은 세 IDE를 사용해 codex로 git과 gh 명령어를 사용하도록 하는
            예시 이미지입니다.
          </p>
          <h3>Zed</h3>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}zed.png`}
            width={3164}
            height={2068}
            alt="Zed에서 코드 편집기 아래에 내장 터미널을 연 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <h3>VS Code</h3>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}vscode.png`}
            width={3164}
            height={2068}
            alt="vscode에서 코드 편집기 아래의 Terminal 패널을 연 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <h3>IntelliJ IDEA</h3>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}intellij.png`}
            width={3164}
            height={2070}
            alt="IntelliJ IDEA에서 코드 편집기 아래의 Terminal 창을 연 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
        </section>
      </GuideBody>
      <GuideNavigation>
        <a href="?guide=gitignore">← 이전 가이드: .gitignore 사용하기</a>
      </GuideNavigation>
    </GuidePage>
  );
}
