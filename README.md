# Git 협업 가이드

React와 TypeScript로 만든 한국어 Git·GitHub 학습 사이트입니다.

## 실행과 검증

```sh
pnpm install
pnpm dev
```

```sh
pnpm build
pnpm lint
pnpm test
```

테스트는 전체 가이드의 렌더링, 현재 목차 표시, 이전·다음 링크, 기본 페이지와 이미지 경로를 확인합니다.

## 파일 구조

```text
src/
├── main.tsx               # React 시작점
├── App.tsx                # 공통 화면과 현재 페이지 선택
├── App.css                # 공통 스타일
├── guides.ts              # 챕터별 페이지 주소·제목·컴포넌트 등록
├── components/
│   ├── ExternalLink.tsx   # 외부 링크
│   └── Icon.tsx           # 공용 아이콘
└── pages/
    ├── CreateGuide.tsx
    ├── CloneGuide.tsx
    ├── DevelopmentGuide.tsx
    ├── GhGuide.tsx
    ├── ConflictGuide.tsx
    ├── GitLabFlowGuide.tsx
    ├── GitignoreGuide.tsx
    ├── ReviewGuide.tsx
    └── UndoGuide.tsx
public/                   # 가이드 스크린샷
tests/guides.test.mjs      # 페이지 연결 검증
```

각 페이지의 본문과 하단 이동 링크는 해당 `pages/*Guide.tsx`에서 수정합니다. 목차 순서, 브라우저 제목, 페이지 주소는 `guides.ts`에서 관리합니다.

## 페이지 추가하기

1. `src/pages/`에 페이지 컴포넌트를 만들고 기본 내보내기(`export default`)를 지정합니다.
2. `src/guides.ts`의 해당 챕터에 고유한 `id`, `title`, `component`를 등록합니다. 등록한 페이지는 `?guide=id`로 열리며 목차에 자동으로 표시됩니다.
3. 인접 페이지의 이전·다음 링크와 `tests/guides.test.mjs`의 페이지 목록을 갱신합니다.
4. 빌드·린트·테스트를 실행합니다.

이미지는 `public/`에 두고 `import.meta.env.BASE_URL`을 붙여 참조합니다. 잘못된 페이지 주소나 `guide` 값이 없는 주소는 첫 페이지로 표시됩니다.
