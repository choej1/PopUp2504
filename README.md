# 스크럽대디 팝업스토어 성과 자료

더현대 서울에서 진행된 스크럽대디 팝업스토어의 성과를 시각적으로 보여주는 웹사이트입니다.

## 🌟 주요 기능

- **언어 선택**: 한국어와 영어 지원
- **이미지 슬라이드**: 6개의 성과 자료 이미지를 순서대로 확인
- **모바일 반응형**: 모든 기기에서 최적화된 경험
- **인터랙티브 요소**: 05번 이미지의 "Click Here" 버튼 클릭 시 Instagram 페이지로 이동
- **직관적 네비게이션**: 화살표 버튼과 도트 네비게이션

## 🚀 시작하기

### 필요 조건

- Node.js (18.0.0 이상)
- npm 또는 pnpm

### 설치 및 실행

1. 저장소 클론
```bash
git clone [YOUR_REPOSITORY_URL]
cd [REPOSITORY_NAME]
```

2. 의존성 설치
```bash
npm install
# 또는
pnpm install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
pnpm run dev
```

4. 브라우저에서 `http://localhost:5173` 접속

### 빌드

프로덕션용 빌드를 생성하려면:

```bash
npm run build
# 또는
pnpm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 📱 사용 방법

1. **언어 선택**: 첫 페이지에서 한국어 또는 English 선택
2. **이미지 탐색**: 화살표 버튼이나 하단 도트를 클릭하여 이미지 이동
3. **특별 기능**: 05번 이미지에서 "Click Here" 버튼을 클릭하면 관련 Instagram 페이지로 이동

## 🛠 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 프로젝트 구조

```
├── src/
│   ├── assets/          # 이미지 파일들
│   ├── App.jsx          # 메인 컴포넌트
│   ├── App.css          # 스타일시트
│   └── main.jsx         # 앱 진입점
├── public/              # 정적 파일들
├── index.html           # HTML 템플릿
└── package.json         # 프로젝트 설정
```

## 🎨 커스터마이징

### 이미지 교체
`src/assets/` 폴더의 이미지 파일들을 교체하고 `App.jsx`에서 import 경로를 수정하세요.

### 스타일 수정
`src/App.css`에서 CSS 스타일을 수정할 수 있습니다.

### 링크 변경
05번 이미지의 클릭 링크를 변경하려면 `App.jsx`의 `handleImageClick` 함수를 수정하세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Made with ❤️ for Scrub Daddy Korea

