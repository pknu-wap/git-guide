import {
  GuideHeader,
  Callout,
  StepTitle,
  GuideTable,
  GuideBody,
  ButtonLink,
  GuideNavigation,
  GuidePage,
  GuideScreenshot,
} from "../components/Guide";

export default function UndoGuide() {
  return (
    <GuidePage>
      <GuideHeader title="실수한 작업 취소하기">
        깃의 장점 중 하나는 언제든지 작업 내용을 취소할 수 있다는 것입니다.
        커밋과 푸시 여부에 따라 Discard changes, Undo Commit, Revert Changes in
        Commit, Reorder + Undo, Reset 중 어떤 방법을 사용해야 할지 알아봅시다.
      </GuideHeader>
      <GuideBody reading>
        <section>
          <StepTitle number={1}>현재 상태에 맞는 방법 고르기</StepTitle>
          <p>현재 상황을 파악하고, 어떤 방법을 사용해야 할지 정합니다.</p>
          <GuideTable label="되돌리기 방법 비교">
            <thead>
              <tr>
                <th scope="col">상황</th>
                <th scope="col">방법</th>
                <th scope="col">결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>아직 커밋하지 않았을 때</td>
                <td>
                  <a href="#discard">Discard changes</a>
                </td>
                <td>내 컴퓨터의 변경 내용 취소</td>
              </tr>
              <tr>
                <td>커밋은 했으나 푸시하지 않았을 때</td>
                <td>
                  <a href="#undo">Undo Commit</a>
                </td>
                <td>커밋을 삭제하고 내 컴퓨터의 변경 내용 유지</td>
              </tr>
              <tr>
                <td>푸시까지 했을 때</td>
                <td>
                  <a href="#revert">Revert Changes in Commit</a>
                </td>
                <td>원래의 기록은 유지하고, 반대로 변경하는 커밋 생성</td>
              </tr>
              <tr>
                <td>푸시까지 했고 민감한 정보일 때</td>
                <td>
                  <a href="#reorder">Reorder + Undo</a>
                </td>
                <td>커밋 기록 삭제</td>
              </tr>
              <tr>
                <td>푸시까지 했고 민감한 정보일 때</td>
                <td>
                  <a href="#reset">Reset</a>
                </td>
                <td>커밋 기록 삭제, 깃허브 데스크톱에서는 불가능</td>
              </tr>
            </tbody>
          </GuideTable>
          <p>
            변경을 일시적으로만 취소하고 잠시 다른 작업을 해야 한다면 위 방법
            대신 Stash로 보관하세요.
          </p>
        </section>
        <section id="discard">
          <StepTitle number={2}>Discard changes</StepTitle>
          <p>
            아직 커밋하지 않았을 때 사용합니다. 내 컴퓨터의 변경 내용이
            사라집니다.{" "}
          </p>
          <ul>
            <li>
              <p>
                깃허브 데스크톱의 <strong>Changes</strong>에서 되돌릴 파일을 1개
                이상 선택합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}discard_1.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop의 Changes에서 mistake.txt를 선택하고 추가된 문장을 Diff로 확인하는 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                파일을 우클릭해 <strong>Discard Changes</strong>를 선택합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}discard_2.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop에서 mistake.txt를 우클릭한 메뉴의 Discard Changes가 선택된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>선택했던 변경 내용들이 사라집니다.</p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}discard_3.png`}
                width={2144}
                height={1544}
                alt="변경을 취소한 뒤 GitHub Desktop에 0 changed files와 No local changes가 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
          </ul>
        </section>
        <section id="undo">
          <StepTitle number={3}>Undo Commit</StepTitle>
          <p>
            커밋은 했으나 푸시하지 않았을 때 사용합니다. 마지막 커밋을
            취소하지만 내 컴퓨터의 <strong>변경 내용은 그대로 남습니다.</strong>
          </p>
          <ul>
            <li>
              <p>
                깃허브 데스크톱의 <strong>History</strong>에서 마지막 커밋을
                우클릭한 뒤 <strong>Undo Commit</strong>을 선택합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}undo_1.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop의 History에서 아직 푸시하지 않은 마지막 커밋인 실수 커밋을 우클릭하고 Undo Commit 메뉴를 선택한 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                커밋이 취소되고 변경 내용이 <strong>Changes</strong>로
                돌아왔습니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}undo_2.png`}
                width={2144}
                height={1544}
                alt="Undo Commit 실행 후 mistake.txt가 Changes 목록으로 돌아오고 파일 내용과 기존 커밋 메시지가 남아 있는 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <a href="#discard">Discard changes</a>로 변경 내용을 없애거나 수정
              후 다시 커밋하면 됩니다.
            </li>
          </ul>
        </section>
        <section id="revert">
          <StepTitle number={4}>Revert Changes in Commit</StepTitle>
          <p>
            이미 푸시한 일반적인 변경 내용을 취소할 때 사용합니다.{" "}
            <strong>
              원래 커밋은 유지하고 그 변경을 반대로 적용한 새 커밋을 만듭니다.
            </strong>{" "}
            내 컴퓨터에도 해당 커밋의 변경을 취소한 결과가 반영됩니다.
          </p>
          <ul>
            <li>
              <p>
                <strong>History</strong>에서 내용을 확인하고 취소할 커밋을
                우클릭해 <strong>Revert Changes in Commit</strong>을 누릅니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}revert_1.png`}
                width={2144}
                height={1544}
                alt="GitHub Desktop의 History에서 실수 푸시 커밋을 우클릭하고 Revert Changes in Commit 메뉴를 선택한 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                원래 커밋은 남아 있고, 그 위에 이 커밋을 반대로 적용하는{" "}
                <strong>Revert &quot;...&quot;</strong> 커밋이 생성됩니다. Push
                origin을 눌러 푸시하세요.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}revert_2.png`}
                width={2144}
                height={1544}
                alt="History에 원래 실수 푸시 커밋과 새 Revert 커밋이 함께 남아 있고, Diff에 mistake.txt 삭제가 표시된 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
          </ul>
        </section>
        <section id="reorder">
          <StepTitle number={5}>Reorder + Undo</StepTitle>
          <p>
            비밀번호나 API 키가 들어간 커밋 뒤에 다른 커밋이 있다면,{" "}
            <strong>Reorder</strong>로 해당 커밋을 가장 최근 위치로 옮긴 뒤{" "}
            <strong>Undo Commit</strong>으로 취소할 수 있습니다.
          </p>
          <Callout
            id="sensitive-data-title"
            title="노출된 비밀번호나 API 키부터 수정하세요"
            kind="note"
          >
            <p>
              노출된 비밀번호를 교체하고, 기존 API 키는 폐기한 뒤 재발급하세요.
              강제 푸시 후에도 다른 브랜치, PR, 포크, 복제본에 정보가 남을 수
              있습니다.
            </p>
          </Callout>
          <ul>
            <li>
              <p>
                비밀번호 푸시 후 다른 커밋을 푸시했을 때의 상황입니다. 만약
                비밀번호 커밋이 최상단이라면 Reorder을 하지 않아도 됩니다.{" "}
                <strong>History</strong>에서 취소할 커밋을 우클릭하고{" "}
                <strong>Reorder Commit</strong>을 선택합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}reorder_1.png`}
                width={2144}
                height={1544}
                alt="History에서 password.txt를 추가한 비밀번호 푸시 커밋을 우클릭하고 Reorder Commit 메뉴를 선택한 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>비밀번호 커밋을 최상단으로 옮깁니다.</p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}reorder_2.png`}
                width={2144}
                height={1544}
                alt="Reorder 완료 후 비밀번호 푸시 커밋이 안녕하세요 커밋 위의 가장 최근 위치로 이동한 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                맨 위로 옮긴 비밀번호 커밋을 우클릭하고{" "}
                <strong>Undo Commit</strong>을 선택합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}reorder_3.png`}
                width={2144}
                height={1544}
                alt="가장 최근 위치로 옮긴 비밀번호 푸시 커밋을 우클릭하고 Undo Commit 메뉴를 선택한 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                커밋이 취소되어 민감한 정보가 <strong>Changes</strong>로
                돌아왔습니다. 파일 내용은 내 컴퓨터에 남아 있습니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}reorder_4.png`}
                width={2144}
                height={1544}
                alt="Undo 후 password.txt가 Changes에 남아 있고, 마지막 커밋은 안녕하세요로 표시되며 상단에 Pull origin이 보이는 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                민감한 파일을 우클릭해 <a href="#discard">Discard Changes</a>로
                파일을 제거합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}reorder_5.png`}
                width={2144}
                height={1544}
                alt="Changes에 남은 password.txt를 우클릭하고 Discard Changes를 선택한 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
            </li>
            <li>
              <p>
                <strong>Pull origin</strong> 오른쪽의 화살표를 눌러{" "}
                <strong>Force push origin</strong>을 클릭합니다.
              </p>
              <GuideScreenshot
                src={`${import.meta.env.BASE_URL}reorder_6.png`}
                width={2144}
                height={1544}
                alt="파일 변경을 버린 뒤 No local changes가 표시되고, Pull origin 오른쪽 메뉴에 Force push origin이 보이는 화면. 새 탭에서 원본 이미지 보기."
                loading="lazy"
                placement="inline"
              />
              <p>
                강제 푸시가 완료되면 깃허브<strong>(Ctrl + Shift + G)</strong>
                에서도 커밋 기록을 확인하세요.
              </p>
            </li>
          </ul>
        </section>
        <section id="reset">
          <StepTitle number={6}>Reset</StepTitle>
          <p>
            <a href="#reorder">Reorder + Undo</a>보다 더 자유롭게 커밋 기록을
            삭제하고 싶을 때 사용합니다. 깃허브 데스크톱으로는 할 수 없습니다.
            자세한 내용은 직접 찾아보세요.
          </p>
        </section>
      </GuideBody>
      <GuideNavigation>
        <a href="?guide=conflict">← 이전 가이드: 충돌 해결하기</a>
        <ButtonLink href="?guide=gitignore">
          다음 가이드: .gitignore 사용하기 →
        </ButtonLink>
      </GuideNavigation>
    </GuidePage>
  );
}
