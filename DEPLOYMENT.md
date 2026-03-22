# Cloudflare Pages 배포 가이드

이 프로젝트(`youngnong`)를 Cloudflare Pages에 배포하는 방법은 두 가지가 있습니다.

## 방식 1: GitHub 연동 (가장 권장됨)

Git에 푸시할 때마다 자동으로 배포가 업데이트되는 방식입니다.

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)에 로그인합니다.
2. **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**을 선택합니다.
3. GitHub 계정을 연결하고 `AnasHooman/youngnong` 저장소를 선택합니다.
4. **Build settings**를 다음과 같이 설정합니다:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **Save and Deploy**를 클릭합니다.

## 방식 2: Wrangler CLI를 통한 수동 배포

로컬 터미널에서 즉시 배포하고 싶을 때 사용합니다.

1. 로컬에서 프로젝트를 빌드합니다:
   ```bash
   npm run build
   ```
2. Wrangler를 사용하여 `dist` 폴더를 배포합니다:
   ```bash
   npx wrangler pages deploy dist --project-name youngnong
   ```

---
**힌트**: 이미 GitHub에 코드가 업로드되어 있으므로 **방식 1**을 사용하면 추후 코드 수정 시 자동으로 배포가 갱신되어 편리합니다.
