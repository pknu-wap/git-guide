import {
  GuideHeader,
  Callout,
  StepTitle,
  CommandBlock,
  Example,
  ConceptGrid,
  FlowSteps,
  GuideQuestion,
  ReadingLinks,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
} from '../components/Guide'
export default function ReviewGuide() {
  return (
    <GuidePage><GuideHeader title="PR 리뷰 주고받기" duration="약 15분">리뷰는 변경의 목적과 동작을 팀원이 함께 확인하는 과정입니다. README에 실행 방법을 추가하는 PR을 예로, 리뷰 요청부터 피드백 반영과 승인까지 주고받아봅시다.</GuideHeader><Callout id="review-preparation" title="시작 전 준비사항"><p>작업 브랜치를 Push하고 PR을 열어두세요. 작성자와 리뷰어를 나누어 서로 다른 계정으로 진행합니다. 자신의 PR에는 승인이나 수정 요청 리뷰를 제출할 수 없습니다.</p></Callout><GuideBody reading><section>
          <StepTitle number={1}>작성자 · 리뷰할 내용 준비하기</StepTitle>
          <p>PR의 base가 팀의 기준 브랜치인지, compare가 내 작업 브랜치인지 확인하세요. 리뷰어가 이해하고 확인할 수 있도록 본문에 변경 이유와 검증 방법을 적습니다.</p>
          <CommandBlock>{`## 변경 목적
처음 참여한 팀원이 프로젝트를 실행할 수 있도록 README를 보완합니다.

## 변경 내용
의존성 설치와 개발 서버 실행 방법을 추가했습니다.

## 확인 방법
README 순서대로 설치한 뒤 개발 서버가 열리는지 확인해주세요.
실제로 실행한 명령어와 확인 결과를 여기에 기록합니다.

## 관련 이슈
#1`}</CommandBlock>
          <p>예시는 실제 작업에 맞게 바꾸세요. <strong>Files changed</strong>에서 직접 Diff를 읽고, 임시 파일이나 관련 없는 변경이 섞이지 않았는지 확인한 뒤 리뷰를 요청합니다.</p>
        </section><section>
          <StepTitle number={2}>작성자 · 리뷰어 지정하기</StepTitle>
          <p>PR 오른쪽의 <strong>Reviewers</strong>에서 확인을 부탁할 팀원을 선택하세요. 아직 작업 중인 Draft PR이라면 준비를 마친 뒤 <strong>Ready for review</strong>로 전환합니다.</p>
          <p><strong>Assignees</strong>는 작업 담당자를 표시하고, <strong>Reviewers</strong>는 리뷰를 요청할 사람을 지정합니다. 확인이 필요한 부분이나 일정이 있다면 PR 댓글에 함께 적어주세요.</p>
          <Example>요청 예시: “처음 설치하는 환경에서도 실행 방법을 따라 할 수 있는지 확인 부탁드립니다. 특히 환경 변수 준비 단계가 빠지지 않았는지 봐주세요.”</Example>
        </section><section>
          <StepTitle number={3}>리뷰어 · 변경을 읽고 댓글 달기</StepTitle>
          <p>PR 본문과 관련 이슈를 읽은 다음 <strong>Files changed</strong>에서 파일별로 변경을 확인하세요. 실행 방법이 바뀌었다면 실제로 따라 해보고 결과를 남깁니다.</p>
          <ul>
            <li>의견을 남길 줄에 마우스를 올리고 파란색 <strong>+</strong> 버튼을 누릅니다.</li>
            <li>문제 상황, 이유, 제안을 적고 <strong>Start a review</strong>로 리뷰를 시작합니다.</li>
            <li>다른 줄에도 의견이 있다면 <strong>Add review comment</strong>로 이어서 작성합니다.</li>
            <li>확인을 끝낸 파일에는 <strong>Viewed</strong>를 표시해 읽은 위치를 관리합니다.</li>
          </ul>
          <ConceptGrid><div><h3>수정이 필요한 의견</h3><p>“환경 변수가 없으면 실행에 실패합니다. 실행 명령어 앞에 .env.example을 .env로 복사하는 단계를 추가해주세요.”</p></div><div><h3>선택적인 제안</h3><p>“제안: 실행 후 접속 주소도 적으면 처음 사용하는 사람이 확인하기 편할 것 같습니다.”</p></div></ConceptGrid>
          <p>리뷰를 시작한 뒤 아직 제출하지 않은 댓글은 <strong>Pending</strong> 상태이며 작성자에게 보이지 않습니다. 댓글을 다 적었다면 다음 단계에서 리뷰를 제출하세요.</p>
        </section><section>
          <StepTitle number={4}>리뷰어 · 의견을 정리해 제출하기</StepTitle>
          <p><strong>Review changes</strong>를 누르고 전체 의견을 적은 뒤, 상황에 맞는 종류를 선택해 <strong>Submit review</strong>를 누릅니다.</p>
          <ul>
            <li><strong>Comment:</strong> 질문이나 의견을 남깁니다. 병합을 승인하거나 수정을 요구하는 상태는 아닙니다.</li>
            <li><strong>Approve:</strong> 확인한 변경을 합쳐도 좋다는 승인을 남깁니다. 이 버튼이 PR을 Merge하지는 않습니다.</li>
            <li><strong>Request changes:</strong> Merge 전에 수정이 필요한 사항을 전달합니다. 반드시 해결해야 할 이유와 확인 방법을 함께 적으세요.</li>
          </ul>
          <p>Request changes가 실제로 Merge를 차단하는지는 레포지토리 보호 규칙과 권한에 따라 달라집니다. 팀에서는 버튼 활성화 여부와 함께 남아 있는 리뷰 의견도 확인하세요.</p>
        </section><section>
          <StepTitle number={5}>작성자 · 피드백 반영하고 재요청하기</StepTitle>
          <p>리뷰 댓글에 답하고 필요한 내용을 <strong>기존 PR의 작업 브랜치</strong>에서 수정합니다. 동의하기 어렵거나 의도가 불분명하다면 이유를 설명하고 팀원과 방향을 맞추세요.</p>
          <FlowSteps label="리뷰 피드백 반영 순서"><li><strong>수정</strong><span>같은 작업 브랜치</span></li><li><strong>확인</strong><span>실행·테스트</span></li><li><strong>Commit·Push</strong><span>기존 PR에 반영</span></li><li><strong>재리뷰 요청</strong><span>변경 내용 전달</span></li></FlowSteps>
          <p>GitHub Desktop에서 현재 브랜치를 확인하고 수정 → Commit → Push하세요. 같은 브랜치로 Push하면 기존 PR이 갱신되므로 새 PR을 만들 필요가 없습니다.</p>
          <Example>답변 예시: “환경 변수 준비 단계를 추가했고, 새 폴더에서 안내 순서대로 실행해 확인했습니다. 추가한 Commit을 다시 확인 부탁드립니다.”</Example>
          <p><strong>Reviewers</strong>에서 해당 리뷰어에게 재리뷰를 요청하세요. 해결된 대화는 팀의 합의에 따라 <strong>Resolve conversation</strong>으로 정리합니다. 대화를 해결 처리해도 코드가 수정되거나 Request changes가 자동으로 승인으로 바뀌지는 않습니다.</p>
          <GuideQuestion summary="Suggested change를 받았다면?"><p>제안된 수정이 맞는지 확인하고 GitHub의 <strong>Commit suggestion</strong>으로 반영할 수 있습니다. 이 경우 원격 작업 브랜치에 Commit이 생기므로, 로컬에서 계속 작업하기 전 작업을 정리하고 해당 브랜치에서 Fetch·Pull하세요.</p></GuideQuestion>
        </section><section>
          <StepTitle number={6}>리뷰어 · 수정 확인 후 승인하기</StepTitle>
          <p>리뷰어는 추가된 변경을 읽고 요청한 사항과 실행 결과를 확인합니다. 수정이 충분하다면 <strong>Approve</strong> 리뷰를 제출하세요. 확인하지 못한 항목은 함께 밝혀주세요.</p>
          <p>작성자나 Merge 담당자는 필요한 승인, 최신 Commit의 검사 결과, 미해결 대화와 충돌 여부를 확인한 뒤 팀의 규칙에 따라 Merge합니다. 새 Commit이 추가되면 설정에 따라 이전 승인이 무효화될 수 있습니다.</p>
          <p>Merge가 끝나면 GitHub Desktop에서 기준 브랜치로 돌아와 Fetch·Pull하세요. 충돌이 있다면 <a href="?guide=conflict">충돌 해결하기</a>를 참고합니다.</p>
          <GuideQuestion summary="연습은 어떻게 마무리하나요?"><p>README PR 하나에서 리뷰어가 수정 요청 → 작성자가 같은 브랜치에 수정 Push → 리뷰어가 재확인 후 승인하는 흐름을 완료하세요. 다음 PR에서는 역할을 바꾸면 양쪽 과정을 모두 익힐 수 있습니다.</p></GuideQuestion>
          <ReadingLinks>공식 문서: <a href="https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request" target="_blank" rel="noopener noreferrer">리뷰 작성과 제출</a>· <a href="https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/incorporating-feedback-in-your-pull-request" target="_blank" rel="noopener noreferrer">피드백 반영하기</a></ReadingLinks>
        </section></GuideBody><GuideNavigation><a href="?guide=gitlab-flow">← 이전 가이드: GitLab Flow 이해하기</a><ButtonLink href="?guide=conflict" spacing="navigation">다음 가이드: 충돌 해결하기 →</ButtonLink></GuideNavigation></GuidePage>
  )
}
