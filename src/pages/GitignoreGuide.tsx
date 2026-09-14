import {
  GuideHeader,
  Callout,
  StepTitle,
  ConceptGrid,
  CommandBlock,
  GuideQuestion,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
} from '../components/Guide'
export default function GitignoreGuide() {
  return (
    <GuidePage><GuideHeader title=".gitignore 사용하기" audience="팀장 · 팀원" duration="약 20분">로그, 빌드 결과물, 내 컴퓨터의 설정까지 모두 공유할 필요는 없습니다. .gitignore에 제외할 파일의 규칙을 적어 필요한 코드만 Commit하는 방법과 이미 커밋한 파일에 규칙을 적용하는 방법을 알아봅시다.</GuideHeader><Callout id="gitignore-preparation" title="시작 전 준비사항"><p>복제한 레포지토리를 에디터와 GitHub Desktop에서 열어두세요. 명령어는 레포지토리 최상위 폴더에서 실행합니다. 팀 프로젝트에서는 새 작업 브랜치를 만들고 진행하세요.</p></Callout><GuideBody reading><section>
          <StepTitle number={1}>무엇을 제외할지 정하기</StepTitle>
          <ConceptGrid><div><h3>제외할 파일</h3><p>다시 생성할 수 있는 빌드 결과물, 설치한 의존성 폴더, 실행 로그, 개인 환경 설정 등이 해당합니다.</p></div><div><h3>공유할 파일</h3><p>소스 코드, README, 의존성 정의와 잠금 파일, 비밀 값이 없는 설정 예시, .gitignore 자체는 함께 관리합니다.</p></div></ConceptGrid>
          <p><strong>.gitignore는 아직 추적하지 않는 파일에 적용됩니다.</strong> 파일을 삭제하거나 이미 Commit한 파일의 추적을 자동으로 중단하지 않습니다. 이미 추적 중이라면 <a href="#untrack">아래의 추적 해제 절차</a>를 따르세요.</p>
        </section><section>
          <StepTitle number={2}>.gitignore 파일 작성하기</StepTitle>
          <p>레포지토리 최상위에 <code>.gitignore</code> 파일을 만드세요. 기존 파일이 있다면 필요한 규칙을 추가합니다. 아래는 Node.js 웹 프로젝트 예시이므로 사용하는 기술에 맞게 조정하세요.</p>
          <CommandBlock>{`# 설치한 의존성
node_modules/

# 최상위 빌드 결과물
/dist/

# 로그
*.log

# 개인 환경 설정
.env
.env.*
!.env.example`}</CommandBlock>
          <p>Windows에서는 파일명이 <code>.gitignore.txt</code>로 저장되지 않았는지 확인하세요. 규칙마다 한 줄씩 작성하고, 파일 경로의 구분자는 <code>/</code>를 사용합니다.</p>
        </section><section>
          <StepTitle number={3}>자주 쓰는 패턴 읽기</StepTitle>
          <ul>
            <li><code>#</code>으로 시작하는 줄은 주석입니다.</li>
            <li><code>node_modules/</code>는 이 .gitignore 아래 모든 깊이의 같은 이름 폴더를 제외합니다.</li>
            <li><code>/dist/</code>는 이 .gitignore와 같은 위치의 dist 폴더만 제외합니다. 최상위에 작성했다면 레포지토리 최상위 dist가 대상입니다.</li>
            <li><code>*.log</code>는 모든 깊이의 .log 파일을 제외합니다. 일반적인 <code>*</code>는 경로 구분자까지 넘어서 매칭하지 않습니다.</li>
            <li><code>logs/**/*.txt</code>의 <code>**</code>는 여러 단계의 하위 폴더를 포함하므로 logs 안의 .txt 파일을 깊이에 관계없이 제외합니다.</li>
            <li><code>!</code>는 앞에서 제외한 패턴의 예외를 만듭니다. 위 예시에서는 <code>!.env.example</code>을 뒤에 두어 예시 파일을 공유할 수 있게 합니다.</li>
          </ul>
          <GuideQuestion summary="폴더 안의 파일 하나만 예외로 남기려면?"><p>부모 폴더 전체를 제외하면 그 안의 파일만 예외로 지정해도 다시 포함할 수 없습니다. 예를 들어 최상위 logs의 README만 남기려면 아래처럼 폴더 자체 대신 그 안의 항목을 제외하세요.</p><CommandBlock>{`/logs/*
!/logs/README.md`}</CommandBlock></GuideQuestion>
        </section><section>
          <StepTitle number={4}>실제로 제외되는지 확인하기</StepTitle>
          <p>아직 추적하지 않는 <code>ignore-demo.log</code> 파일을 새로 만들고 <code>연습용 로그</code>를 적어 저장하세요. GitHub Desktop의 Changes에서 이 파일이 표시되지 않는지 확인합니다.</p>
          <CommandBlock>{`git check-ignore -v -- ignore-demo.log
git status --short --ignored`}</CommandBlock>
          <p>첫 명령어는 적용된 규칙의 파일명·줄 번호·패턴을 보여줍니다. 두 번째 결과에서 <code>!! ignore-demo.log</code>는 무시 중이라는 뜻입니다. 일반 <code>git status</code>에는 무시된 파일이 표시되지 않습니다.</p>
          <GuideQuestion summary="계속 Changes에 나타난다면?"><p>파일명과 규칙 위치를 확인하세요. <code>git ls-files -- ignore-demo.log</code>에 경로가 출력되면 이미 추적 중입니다. 추적 중인 파일도 패턴 자체가 맞는지 확인하려면 <code>git check-ignore -v --no-index -- ignore-demo.log</code>를 사용합니다.</p></GuideQuestion>
        </section><section>
          <StepTitle number={5}>규칙과 설정 예시 공유하기</StepTitle>
          <p>환경 설정이 필요하다면 <code>.env.example</code>에는 변수 이름과 빈 값 또는 공개 가능한 예시만 적어 Commit하세요. 실제 API 키나 비밀번호를 복사하지 마세요.</p>
          <CommandBlock>{`API_BASE_URL=http://localhost:3000
API_KEY=`}</CommandBlock>
          <p>GitHub Desktop에서 .gitignore와 필요한 예시 파일을 선택해 Diff를 확인하고 Commit → Push → PR을 진행합니다. 팀원은 예시를 복사해 자신의 .env를 만들고 값을 채웁니다.</p>
          <GuideQuestion summary="나만 사용하는 파일을 제외하려면?"><p>이 레포지토리에서만 쓸 개인 규칙은 <code>.git/info/exclude</code>에 작성할 수 있습니다. 이 파일은 Commit으로 공유되지 않습니다. 팀 전체에 필요한 규칙은 .gitignore에 두세요.</p></GuideQuestion>
          <ReadingLinks>공식 문서: <a href="https://git-scm.com/docs/gitignore" target="_blank" rel="noopener noreferrer">gitignore 패턴과 적용 범위</a>· <a href="https://git-scm.com/docs/git-check-ignore" target="_blank" rel="noopener noreferrer">규칙 확인하기</a></ReadingLinks>
        </section><section id="untrack">
          <StepTitle number={6}>이미 커밋한 파일 확인하기</StepTitle>
          <p>명령줄 Git이 설치된 터미널을 레포지토리 최상위에서 여세요. 진행 중인 다른 작업은 먼저 Commit하거나 Stash하고 새 작업 브랜치를 만듭니다. 예시는 이미 Commit한 <code>debug.log</code>입니다. 연습한다면 별도 레포지토리에 비밀 값이 없는 로그를 만들어 Commit한 뒤 시작하세요.</p>
          <CommandBlock>{`git status
git ls-files -- debug.log`}</CommandBlock>
          <p>두 번째 명령어에 <code>debug.log</code>가 출력되면 Git의 추적 목록에 있는 파일입니다. 출력이 없다면 추적 해제할 필요 없이 .gitignore 규칙만 적용하면 됩니다. 실제 대상 파일의 경로로 바꿔 실행하세요.</p>
        </section><section>
          <StepTitle number={7}>제외 규칙 추가하기</StepTitle>
          <p>최상위 .gitignore에 아래 줄을 추가하고 저장합니다. 이 예시는 최상위 debug.log만 제외합니다.</p>
          <CommandBlock>/debug.log</CommandBlock>
          <p>아직 추적을 해제하기 전에도 <code>--no-index</code>를 사용하면 패턴이 맞는지 확인할 수 있습니다.</p>
          <CommandBlock>git check-ignore -v --no-index -- debug.log</CommandBlock>
          <p>출력에 방금 작성한 <code>/debug.log</code> 규칙이 표시되는지 확인하세요.</p>
        </section><section>
          <StepTitle number={8}>로컬 파일을 남기고 추적 해제하기</StepTitle>
          <CommandBlock>git rm --cached -- debug.log</CommandBlock>
          <p><code>--cached</code>는 Git의 다음 Commit에 포함될 목록인 <strong>인덱스</strong>에서만 파일을 제거합니다. 이 명령어를 실행한 내 컴퓨터의 실제 파일은 그대로 남습니다. 일반 <code>git rm</code>은 로컬 파일도 삭제하므로 옵션을 확인하세요.</p>
          <GuideQuestion summary="폴더 전체를 제외하려면?"><p>예를 들어 최상위 dist 폴더라면 .gitignore에 <code>/dist/</code>를 추가하고 아래 명령어로 그 폴더만 추적 해제하세요. <code>-r</code>은 하위 파일도 처리하는 옵션입니다.</p><CommandBlock>git rm -r --cached -- dist/</CommandBlock><p>파일이나 폴더별로 필요한 경로만 지정하면 관련 없는 파일이 변경에 섞이는 것을 줄일 수 있습니다.</p></GuideQuestion>
          <GuideQuestion summary="명령어가 오류로 중단된다면?"><p>경로가 맞는지, 이미 추적을 해제했는지 확인하세요. 스테이징된 내용이 현재 파일이나 마지막 Commit과 달라 거부될 수도 있습니다. <code>git diff -- debug.log</code>와 <code>git diff --cached -- debug.log</code>로 차이를 확인하고 필요한 내용을 보관한 뒤 정리하세요. 강제 옵션을 바로 추가하지 마세요.</p></GuideQuestion>
        </section><section>
          <StepTitle number={9}>삭제로 표시되는 변경 검토하기</StepTitle>
          <CommandBlock>{`git add -- .gitignore
git diff --cached --name-status
git diff --cached -- .gitignore`}</CommandBlock>
          <p><code>D debug.log</code>는 다음 Commit에서 파일을 제거한다는 뜻입니다. .gitignore는 새 파일이면 <code>A</code>, 기존 파일을 수정했다면 <code>M</code>으로 표시됩니다. 에디터나 파일 탐색기로 로컬 debug.log가 남아 있는지도 확인하세요.</p>
          <p>목록에 의도한 .gitignore와 추적 해제 대상만 포함되어 있는지 검토합니다. 이 상태를 Commit해야 다른 팀원과 공유할 변경 이력이 생깁니다.</p>
          <CommandBlock>git commit -m "chore: stop tracking debug log"</CommandBlock>
        </section><section>
          <StepTitle number={10}>적용 결과 확인하고 공유하기</StepTitle>
          <CommandBlock>{`git ls-files -- debug.log
git check-ignore -v -- debug.log
git status --short --ignored -- debug.log`}</CommandBlock>
          <ul>
            <li>첫 명령어에 출력이 없으면 추적 목록에서 제거된 것입니다.</li>
            <li>두 번째 명령어에는 적용된 .gitignore 규칙이 표시됩니다.</li>
            <li>로컬 파일이 남아 있다면 세 번째 명령어에 <code>!! debug.log</code>가 표시됩니다. 이후 파일을 수정해도 일반 변경 목록에는 나타나지 않습니다.</li>
          </ul>
          <p>GitHub Desktop에서 현재 작업 브랜치를 Push하고 PR을 만드세요. PR 본문에는 추적을 해제한 파일과 이유, 팀원이 해야 할 준비를 적습니다.</p>
          <Callout id="untrack-team-title" title="팀원이 Pull하기 전에 알려주세요" kind="note"><p>로컬 파일이 남는 것은 <code>git rm --cached</code>를 실행한 작업 폴더에서의 동작입니다. 팀원이 삭제 Commit을 Pull하면 기존에 추적하던 파일이 로컬에서도 삭제될 수 있고, 수정 중이었다면 통합이 중단되거나 충돌할 수 있습니다. 필요한 개인 설정은 먼저 레포지토리 밖에 백업한 뒤, Pull 후 무시되는 경로에 복원하도록 안내하세요.</p></Callout>
        </section><section>
          <StepTitle number={11}>과거 Commit은 그대로 남습니다</StepTitle>
          <p>이 과정은 앞으로의 추적을 중단합니다. GitHub의 현재 브랜치 파일 목록에서 사라져도, 파일이 들어 있던 과거 Commit에서는 내용을 볼 수 있습니다.</p>
          <p>API 키나 비밀번호를 올린 경우에는 해당 자격 증명을 먼저 폐기·교체하세요. 과거 이력에서 민감한 내용을 제거하는 작업은 별도 절차이며, 공유 이력을 바꿀 수 있으므로 팀과 함께 진행해야 합니다.</p>
          <ReadingLinks>공식 문서: <a href="https://git-scm.com/docs/git-rm" target="_blank" rel="noopener noreferrer">git rm --cached</a>· <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository" target="_blank" rel="noopener noreferrer">민감한 데이터 제거 안내</a></ReadingLinks>
        </section></GuideBody><GuideNavigation><a href="?guide=gitlab-flow">← 이전 가이드: GitLab Flow 이해하기</a><ButtonLink href="?guide=review" spacing="navigation">다음 가이드: PR 리뷰 주고받기 →</ButtonLink></GuideNavigation></GuidePage>
  )
}
