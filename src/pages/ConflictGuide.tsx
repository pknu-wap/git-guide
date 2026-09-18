import {
  GuideHeader,
  GuideScreenshot,
  Callout,
  StepTitle,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
} from "../components/Guide";
export default function ConflictGuide() {
  return (
    <GuidePage>
      <GuideHeader title="충돌 해결하기" duration="약 15분">
        같은 파일의 같은 줄을 서로 다르게 수정하면 깃이 어느 내용을 남길지
        결정하지 못해 충돌(Conflict)이 발생합니다. 충돌을 직접 만들고 GitHub
        페이지에서 해결하는 법을 알아봅시다.
      </GuideHeader>
      <GuideBody reading>
        <section>
          <StepTitle number={1}>충돌 발생시키기</StepTitle>
          <p>
            같은 커밋을 기준으로 <code>feat/update-readme-1</code> 브랜치와{" "}
            <code>feat/update-readme-2</code> 브랜치를 만든 후, README 파일의
            같은 줄을 다른 내용으로 수정해서 충돌을 발생시켜 보겠습니다.
          </p>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}readme_mit.png`}
            width={1136}
            height={406}
            alt="README.md의 라이선스 안내를 MIT 라이선스를 사용합니다로 수정한 변경 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}readme_gnu.png`}
            width={1136}
            height={406}
            alt="README.md의 같은 라이선스 안내를 GNU 라이선스를 사용합니다로 수정한 변경 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}readme_pr.png`}
            width={842}
            height={242}
            alt="GitHub PR 목록에 GNU 라이선스 내용 추가와 MIT 라이선스 내용 추가 PR이 열린 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <p>
            두 브랜치에서 각각 <code>README.md</code>를 수정하고 PR을
            작성했습니다. MIT 라이선스로 수정한 PR을 먼저 머지했을 때 어떻게
            되는지 봅시다.
          </p>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}conflict.png`}
            width={1782}
            height={380}
            alt="GNU 변경 PR에 README.md 충돌 안내와 Resolve conflicts 버튼이 표시되고 Merge pull request 버튼이 비활성화된 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <p>
            GNU 라이선스로 수정한 PR에서 충돌이 발생했다고 알려줍니다. 깃
            입장에서는 MIT 라이선스로 수정할지 GNU 라이선스로 수정할지 정할 수
            없습니다.
          </p>
        </section>
        <section>
          <StepTitle number={2}>깃허브에서 충돌 해결하기</StepTitle>
          <ol>
            <li>
              <p>
                GNU 라이선스로 수정한 PR을 열고, 아래쪽 충돌 안내의{" "}
                <strong>Resolve conflicts</strong> 버튼을 누르세요. 웹
                편집기에서 충돌한 <code>README.md</code>를 확인할 수 있습니다.
              </p>
            </li>
            <li>
              <p>
                충돌하는 내용을 비교하세요. Accept current change(위쪽 내용
                반영), Accept incoming chage(아래쪽 내용 반영), Accept both
                changes(둘 다 반영) 중 하나를 누르거나 직접{" "}
                <code>{"<<<<<<<"}</code>로 시작해서 <code>{">>>>>>>"}</code>로
                끝나는 부분을 수정해서 충돌을 해결합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}resolve.png`}
                width={1136}
                height={262}
                alt="충돌 편집 화면: feat/update-readme-2의 GNU 문장은 Current change, main의 MIT 문장은 Incoming change로 표시되며 변경 선택 버튼이 보입니다. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                파일 내의 충돌을 모두 수정한 뒤{" "}
                <strong>Mark as resolved</strong>를 누르세요. 다른 충돌 파일이
                있다면 같은 과정을 반복하고, 모두 해결되면{" "}
                <strong>Commit merge</strong>를 누르세요. 변경 사항이 PR
                브랜치인 <code>feat/update-readme-2</code>에 반영됩니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}resolved.png`}
                width={902}
                height={124}
                alt="충돌 편집기의 도구 모음에 1 conflict 안내와 Mark as resolved 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                PR 화면으로 돌아와 충돌 안내가 사라졌는지 확인하세요. 변경
                내용을 확인한 뒤 <strong>Merge pull request</strong>로 PR을
                병합하세요.
              </p>
            </li>
          </ol>
          <ReadingLinks>
            참고 자료:{" "}
            <a
              href="https://docs.github.com/ko/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 병합 충돌 해결
            </a>
          </ReadingLinks>
        </section>
        <section>
          <StepTitle number={3}>vscode로 충돌 해결하기</StepTitle>
          <p>
            간단한 충돌은 깃허브에서 해결할 수 있지만, 복잡한 경우에는 별도의
            도구를 사용해야합니다. 대부분의 IDE는 충돌 해결 기능을 가지고
            있습니다. 이번에는 vscode를 사용해서 충돌을 해결해봅시다.
          </p>
          <Callout
            id="conflict-branch-names"
            title="브랜치는 실제 상황에 맞게 바꿔주세요"
            kind="note"
          >
            <p>
              아래의 <code>main</code>과 <code>feat</code> 브랜치는 예시
              브랜치입니다. 실제 작업에서는 <code>main</code> 브랜치를 작업
              내용을 합칠 base 브랜치로, <code>feat</code> 브랜치를 충돌을
              해결할 작업 브랜치로 진행하세요.
            </p>
          </Callout>
          <ol>
            <li>
              <p>
                깃허브 데스크톱에서 <code>main</code>과 <code>feat</code>{" "}
                브랜치를 각각 <strong>Pull</strong>합니다. 아래 사진과 같이{" "}
                <strong>Last fetched just now</strong>가 표시되면 됩니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}fetched.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop 상단의 Fetch origin 아래에 Last fetched just now가 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                <code>feat</code> 브랜치에서{" "}
                <strong>Choose a branch to merge into feat</strong> 버튼을
                클릭합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}choose_branch.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop의 Current Branch 메뉴에서 feat가 선택되고 하단에 Choose a branch to merge into feat/update-readme-2 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                <code>main</code> 브랜치를 선택한 후{" "}
                <strong>Create a merge commit</strong> 버튼을 클릭합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}merge_commit.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop의 병합 창에서 main 브랜치가 선택되고 충돌 파일 1개 안내와 Create a merge commit 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
              <Callout
                id="conflict-merge-direction"
                title="이러면 feat 브랜치에 main 브랜치를 머지하는 거 아닌가요?"
                kind="note"
              >
                <p>
                  맞습니다. <code>main</code>의 최신 변경 사항을 작업 브랜치인{" "}
                  <code>feat</code>에 먼저 머지해, 작업 브랜치에서 충돌을
                  해결하는 과정입니다. 충돌을 해결하고 병합을 완료한 뒤 작업
                  브랜치를 <strong>Push</strong>하면 기존 PR에 반영됩니다. 이후
                  PR을 병합하면 충돌 해결 결과가 <code>main</code>에 최종
                  반영됩니다.
                </p>
              </Callout>
            </li>
            <li>
              <p>
                <strong>Resolve conflicts before Merge</strong> 창이 나타납니다.
                <strong>Open in Visual Studio Code</strong> 버튼을 클릭해
                vscode로 파일을 여세요.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}resolve_conflicts.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop의 Resolve conflicts before Merge 창에 README.md의 충돌 1개와 Open in Visual Studio Code 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                vscode에서 충돌한 내용을 비교하고 깃허브와 같은 방법으로
                수정하세요. <code>{"<<<<<<<"}</code>, <code>{"======="}</code>,{" "}
                <code>{">>>>>>>"}</code> 가 없는지 확인하고 저장하세요.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}vscode_resolve.png`}
                width={1288}
                height={466}
                alt="VS Code의 README.md에서 GNU 라이선스는 Current Change, main의 MIT 라이선스는 Incoming Change로 표시되고 변경 선택 버튼들이 보이는 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                깃허브 데스크톱으로 돌아와{" "}
                <strong>All conflicted files have been resolved</strong>가
                표시되는지 확인하세요. <strong>Continue Merge</strong> 버튼을
                클릭해 작업 브랜치에서 병합을 완료합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}vscode_resolved.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop에 All conflicted files have been resolved.와 0 conflicted files가 표시되고 Continue Merge 버튼이 활성화된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                <strong>Push origin</strong> 버튼을 클릭하세요. PR 페이지로
                이동하면 충돌 경고가 사라진 것을 확인할 수 있습니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}push.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop에서 병합 커밋이 완료되고 Push origin 버튼과 깃허브에 올릴 커밋 안내가 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
          </ol>
        </section>
      </GuideBody>
      <GuideNavigation>
        <a href="?guide=review">← 이전 가이드: PR 리뷰 주고받기</a>
        <ButtonLink href="?guide=undo">
          다음 가이드: 실수한 변경 되돌리기 →
        </ButtonLink>
      </GuideNavigation>
    </GuidePage>
  );
}
