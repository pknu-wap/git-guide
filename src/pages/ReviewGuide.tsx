import {
  GuideHeader,
  GuideScreenshot,
  StepTitle,
  ConceptGrid,
  GuideQuestion,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
} from "../components/Guide";
export default function ReviewGuide() {
  return (
    <GuidePage>
      <GuideHeader title="PR 리뷰 주고받기">
        리뷰는 변경의 목적과 동작을 팀원이 함께 확인하는 과정입니다. <br /> 리뷰
        요청부터 피드백 반영과 승인까지 주고받아봅시다.
      </GuideHeader>
      <GuideBody reading>
        <section>
          <StepTitle number={1}>작성자: 리뷰할 내용 준비하기</StepTitle>
          <p>
            feat 브랜치에서 커밋을 작성하면 깃허브 데스크톱에서{" "}
            <strong>Preview Pull Request</strong> 버튼이 생깁니다. PR 본문에는
            리뷰어가 이해하고 확인할 수 있도록 변경 내용과 관련 이슈, 검증 방법
            등을 적습니다. 아직 작업이 끝나지 않았다면{" "}
            <strong>Convert to draft</strong>로 전환합니다.
          </p>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}preview_pull_request.png`}
            width={958}
            height={312}
            alt="GitHub Desktop에서 feat/kakao-login 브랜치의 Preview Pull Request 버튼이 표시된 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}pull_request.png`}
            width={1778}
            height={1650}
            alt="GitHub의 카카오 로그인 구현 PR 화면: main과 feat/kakao-login 브랜치, 변경 내용, 관련 이슈, 검증 결과와 리뷰 참고 사항을 확인하는 예시. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
        </section>
        <section>
          <StepTitle number={2}>작성자: 리뷰어 지정하기</StepTitle>
          <p>
            PR 오른쪽의 <strong>Reviewers</strong>에서 확인을 부탁할 팀원을
            선택하세요.
          </p>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}reviewers.png`}
            width={630}
            height={160}
            alt="PR의 Reviewers 목록에 1lisalozf와 daimlee가 표시되고, 각 이름 오른쪽에 방패 아이콘과 노란 점이 있는 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <p>
            사진의 <strong>Reviewers</strong>에는 리뷰를 요청한 두 팀원이
            표시되어 있습니다. 오른쪽 위 톱니바퀴로 리뷰어를 선택할 수 있고,
            이름 옆의 노란 점은 아직 리뷰를 기다리는 상태입니다. 방패 아이콘은
            해당 팀원이 코드 소유자(CODEOWNER)임을 나타냅니다.
          </p>
          <p>
            <strong>Assignees</strong>에는 작업 담당자를,{" "}
            <strong>Reviewers</strong>에는 리뷰를 요청할 사람을 지정합니다.
          </p>
          <h3>CODEOWNERS로 리뷰어 자동 지정하기</h3>
          <p>
            파일별 담당자를 <code>.github/CODEOWNERS</code>에 등록하면, 담당
            파일을 변경하는 PR이 열릴 때 해당 팀원에게 자동으로 리뷰가
            요청됩니다.
          </p>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}codeowners.png`}
            width={846}
            height={730}
            alt=".github/CODEOWNERS 파일에 유효한 설정 안내와 전체 파일 담당자를 지정하는 * @1lisalozf @daimlee @psvm203 규칙이 표시된 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <p>
            <code>*</code>은 전체 파일을, @psvm203은 담당자를 뜻합니다. 이렇게
            설정하면 모든 파일 변경 시 해당 리뷰어가 지정되는데, 더 자세한
            설명을 원하시면 하단의 자료를 참고하세요.
          </p>
          <ReadingLinks>
            참고 자료:{" "}
            <a
              href="https://docs.github.com/ko/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"
              target="_blank"
              rel="noopener noreferrer"
            >
              코드 소유자 정보
            </a>
          </ReadingLinks>
        </section>
        <section>
          <StepTitle number={3}>리뷰어: 변경을 읽고 리뷰하기</StepTitle>
          <p>
            PR 본문과 관련 이슈를 읽은 다음 <strong>Files changed</strong>에서
            파일별로 변경을 확인하세요. 실행 방법이 바뀌었다면 실제로 따라
            해보고 결과를 남깁니다.
          </p>
          <ul>
            <li>
              의견을 남길 줄에 마우스를 올리고 파란색 <strong>+</strong> 버튼을
              누릅니다.
            </li>
            <li>
              문제 상황, 이유, 제안을 적고 <strong>Start a review</strong>로
              리뷰를 시작합니다.
            </li>
            <li>
              다른 줄에도 의견이 있다면 <strong>Add review comment</strong>로
              이어서 작성합니다.
            </li>
            <li>
              확인을 끝낸 파일에는 <strong>Viewed</strong>를 표시해 읽은 위치를
              관리합니다.
            </li>
          </ul>
          <ConceptGrid>
            <div>
              <h3>수정 요청 예시</h3>
              <p>
                환경 변수가 없으면 실행에 실패합니다. 문서에 해당 내용을 환경
                변수 관련 내용을 추가해주세요.
              </p>
            </div>
            <div>
              <h3>선택적인 제안 예시</h3>
              <p>
                실행 후 접속 주소도 적으면 처음 사용하는 사람이 확인하기 편할 것
                같습니다.
              </p>
            </div>
          </ConceptGrid>
          <GuideScreenshot
            src={`${import.meta.env.BASE_URL}review.png`}
            width={1780}
            height={722}
            alt="test.txt의 추가된 줄에 리뷰 댓글을 작성하고, 리뷰와 댓글에 Pending 상태가 표시된 화면. 새 탭에서 원본 이미지 보기."
            loading="lazy"
            placement="inline"
          />
          <p>
            리뷰를 시작한 뒤 아직 제출하지 않은 댓글은 <strong>Pending</strong>{" "}
            상태이며 작성자에게 보이지 않습니다. 댓글을 다 적었다면 전체 의견을
            정리해 리뷰를 제출하세요.
          </p>
          <h3>의견을 정리해 제출하기</h3>
          <p>
            <strong>Review changes</strong>를 누르고 전체 의견을 적은 뒤, 상황에
            맞는 종류를 선택해 <strong>Submit review</strong>를 누릅니다.
          </p>
          <ul>
            <li>
              <strong>Comment:</strong> 질문이나 의견을 남깁니다.
            </li>
            <li>
              <strong>Approve:</strong> 확인한 변경을 합쳐도 좋다는 승인을
              남깁니다.
            </li>
            <li>
              <strong>Request changes:</strong> 머지 전에 수정이 필요한 사항을
              전달합니다.
            </li>
          </ul>
        </section>
        <section>
          <StepTitle number={4}>작성자: 피드백 반영하기</StepTitle>
          <p>
            리뷰 댓글에 답한 후 필요한 내용을{" "}
            <strong>기존 PR의 작업 브랜치</strong>에서 수정합니다.
          </p>
          <p>
            GitHub Desktop에서 현재 브랜치를 확인하고 수정 → 커밋 → 푸시하세요.
            같은 브랜치로 푸시하면 기존 PR이 갱신되므로 새 PR을 만들 필요가
            없습니다.
          </p>
          <p>
            <strong>Reviewers</strong>에서 해당 리뷰어에게 재리뷰를 요청하세요.
            해결된 대화는 <strong>Resolve conversation</strong>으로 정리합니다.
          </p>
          <GuideQuestion summary="Suggested change를 받았다면?">
            <p>
              제안된 수정이 맞는지 확인하고 GitHub의{" "}
              <strong>Commit suggestion</strong>으로 반영할 수 있습니다. 이 경우
              원격 작업 브랜치에 Commit이 생기므로, 로컬에서 계속 작업하기 전
              작업을 정리하고 해당 브랜치에서 Fetch·Pull하세요.
            </p>
          </GuideQuestion>
        </section>
        <section>
          <StepTitle number={5}>머지하기</StepTitle>
          <p>
            리뷰어는 추가된 변경을 읽고 요청한 사항과 실행 결과를 확인합니다.
            수정이 충분하다면 <strong>Approve</strong> 하세요.
          </p>
          <p>
            작성자 혹은 머지 담당자는 승인, 충돌 여부 등을 확인한 뒤 머지합니다.
          </p>
          <p>
            머지가 끝나면 GitHub Desktop에서 base 브랜치로 돌아와 Pull하세요.
            머지 과정에서 충돌이 있다면{" "}
            <a href="?guide=conflict">충돌 해결하기</a>를 참고하세요.
          </p>
          <ReadingLinks>
            참고 자료:{" "}
            <a
              href="https://docs.github.com/ko/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR 리뷰
            </a>
            ·{" "}
            <a
              href="https://docs.github.com/ko/pull-requests/how-tos/review-pull-requests/incorporating-feedback-in-your-pull-request"
              target="_blank"
              rel="noopener noreferrer"
            >
              피드백 반영하기
            </a>
          </ReadingLinks>
        </section>
      </GuideBody>
      <GuideNavigation>
        <a href="?guide=gitlab-flow">← 이전 가이드: GitLab Flow 이해하기</a>
        <ButtonLink href="?guide=conflict">
          다음 가이드: 충돌 해결하기 →
        </ButtonLink>
      </GuideNavigation>
    </GuidePage>
  );
}
