import CreateGuide from './pages/CreateGuide'
import CloneGuide from './pages/CloneGuide'
import DevelopmentGuide from './pages/DevelopmentGuide'
import GhGuide from './pages/GhGuide'
import ConflictGuide from './pages/ConflictGuide'
import GitLabFlowGuide from './pages/GitLabFlowGuide'
import GitignoreGuide from './pages/GitignoreGuide'
import ReviewGuide from './pages/ReviewGuide'
import UndoGuide from './pages/UndoGuide'

export const chapters = [
  {
    number: 1,
    title: '시작하기',
    pages: [
      { id: 'create', title: '(팀장) 팀의 레포지토리 만들기', component: CreateGuide },
      { id: 'clone', title: '팀의 레포지토리 복제하기', component: CloneGuide },
    ],
  },
  {
    number: 2,
    title: '개발하기',
    pages: [
      { id: 'develop', title: 'Git으로 함께 개발하기', component: DevelopmentGuide },
      { id: 'gitlab-flow', title: 'GitLab Flow 이해하기', component: GitLabFlowGuide },
      { id: 'review', title: 'PR 리뷰 주고받기', component: ReviewGuide },
      { id: 'conflict', title: '충돌 해결하기', component: ConflictGuide },
      { id: 'undo', title: '실수한 변경 되돌리기', component: UndoGuide },
      { id: 'gitignore', title: '.gitignore 사용하기', component: GitignoreGuide },
      { id: 'gh', title: 'GitHub CLI(gh) 사용하기', component: GhGuide },
    ],
  },
]
