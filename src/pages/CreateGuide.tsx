import {
  GuideHeader,
  Callout,
  StepTitle,
  ButtonLink,
  GuideBody,
  GuideScreenshot,
  LessonGrid,
  GuidePage,
} from '../components/Guide'
import ExternalLink from '../components/ExternalLink'

export default function CreateGuide() {
  return (
    <GuidePage><GuideHeader title="(팀장) 팀의 레포지토리 만들기" audience="팀장" duration="약 5분">레포지토리(Repository)는 팀의 코드와 변경 이력이 담기는 공동의 저장소입니다. 팀장은 프로젝트 시작 시 레포지토리를 생성하고 팀원들에게 공유합니다.</GuideHeader><Callout id="preparation-title" title="시작 전 준비사항"><p>pknu-wap 조직에 초대되어야 합니다. 만약 초대되어 있지 않다면 임원진에게 문의해주세요.</p></Callout><LessonGrid><GuideBody><section id="lesson">
            <StepTitle number={1}>기본 정보 설정 (General)</StepTitle>
            <p><ExternalLink href="https://github.com/new">github.com/new</ExternalLink>에 접속하여 레포지토리 만들기를 시작하세요.</p>
            <ButtonLink href="https://github.com/new" external>GitHub에서 레포지토리 만들기</ButtonLink>
            <ul>
              <li><strong>Owner:</strong> 반드시 <code>pknu-wap</code> 조직을 선택해야 합니다.</li>
              <li><strong>Repository Name:</strong> 팀별로 고유한 이름을 정하세요.</li>
              <li><strong>Description:</strong> 프로젝트 설명을 간단히 적습니다.</li>
            </ul>
          </section><section id="configuration">
            <StepTitle number={2}>환경 설정 (Configuration)</StepTitle>
            <ul>
              <li><strong>Visibility:</strong> <code>Public</code>을 선택하세요. 누구나 레포지토리를 볼 수 있으며, 쓰기에는 권한이 필요합니다.</li>
              <li><strong>Template:</strong> <code>pknu-wap/project-template</code>을 선택하여 초기 구조를 가져옵니다.</li>
              <li><strong>Include all branches:</strong> 템플릿에는 main 브랜치와 production 브랜치가 포함되어 있습니다. <a href="?guide=gitlab-flow">GitLab Flow</a> 사용을 추천드리며, 이를 사용할 것이라면 <code>On</code>으로 설정하세요. </li>
            </ul>
          </section><section>
            <StepTitle number={3}>레포지토리 생성 완료</StepTitle>
            <p>조직, 팀의 레포지토리 이름과 설정을 확인한 후 <strong>Create repository</strong> 버튼을 누릅니다. 생성된 레포지토리의 이름이나 링크를 팀원에게 공유하세요.</p>
            <Callout id="repository-structure-title" title="팀당 레포지토리가 하나일 필요는 없습니다." kind="note"><p>프로젝트 구성에 따라 여러 레포지토리를 만들 수 있습니다. 웹 프로젝트의 경우 프론트엔드와 백엔드 레포지토리를 분리하는 것을 권장합니다. 더 자세한 내용은 <strong>모노레포(Monorepo)</strong>와 <strong>폴리레포(Polyrepo)</strong>를 검색해보세요.</p></Callout>
          </section></GuideBody><GuideScreenshot src={`${import.meta.env.BASE_URL}create_repository.jpg`} width={1548} height={1390} alt="GitHub 레포지토리 생성 화면: pknu-wap 조직, waps-server 이름, Public 공개 범위와 project-template 설정. 새 탭에서 원본 이미지 보기." caption="레포지토리 생성 설정 예시" reference={<ExternalLink href="https://github.com/pknu-wap/project-template">템플릿 원본 보기 <span aria-hidden="true">→</span></ExternalLink>} /></LessonGrid><section id="add-people" className="mt-16" aria-labelledby="add-people-title">
        <GuideBody><StepTitle number={4} id="add-people-title">팀원 추가</StepTitle><p>레포지토리의 접근 권한 관리 화면에서 <strong>Add people</strong>을 눌러 팀원을 추가하세요.</p><ul>
            <li><strong>Add people:</strong> 팀원의 GitHub 계정을 검색하고 선택하여 추가하세요.</li>
            <li><strong>Role:</strong> 팀원의 권한을 <code>Admin</code>으로 설정하세요.</li>
            <li><strong>확인:</strong> 모든 팀원을 추가한 뒤, 목록에서 각 팀원의 권한이 이미지처럼 <code>Role: admin</code>으로 표시되는지 확인하세요.</li>
          </ul></GuideBody>
        <GuideScreenshot src={`${import.meta.env.BASE_URL}add_people.png`} width={1892} height={736} alt="GitHub Manage access 화면: Add people 버튼과 팀원들의 Role: admin 권한 설정. 새 탭에서 원본 이미지 보기." loading="lazy" caption="팀원 추가 및 Admin 권한 설정 예시" placement="inline" />
        <Callout id="pending-invite-title" title="주의: Pending Invite가 표시되는 경우" kind="note"><p>별도의 절차 없이 팀원이 팀에 추가되어야 합니다. 아래처럼 <strong>Pending Invite</strong>가 표시된다면 해당 팀원이 <strong>pknu-wap</strong> 조직에 초대되지 않은 것이니 임원진에게 문의해주세요.</p><GuideScreenshot src={`${import.meta.env.BASE_URL}pending_invite.png`} width={1864} height={166} alt="팀원 목록에 Pending Invite와 Awaiting response가 표시된 초대 대기 화면. 새 탭에서 원본 이미지 보기." loading="lazy" caption="Pending Invite 표시 예시" placement="inline" /></Callout>
      </section><ButtonLink href="?guide=clone" spacing="standalone">다음 가이드: 팀의 레포지토리 복제하기 →</ButtonLink></GuidePage>
  )
}
