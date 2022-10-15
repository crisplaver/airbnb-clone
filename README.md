# Airbnb Web Clone
html, css 공부용

# 구현 하는 기능
- [x] 상단 네비게이션 바 (모바일)
- [ ] 상단 네비게이션 바 (데스크탑)
- [x] 하단 네비게이션 바 (모바일)
- 필터 모달 (모바일)
    - [x] 필터 모달 열기 동작
    - [ ] 가격 범위
    - [x] 예약 옵션의 스위치 버튼
- [x] 지도 화면 전환 (모바일)
    - 실제 지도 는 구현하지 않고 전환 동작만 구현
- 숙소 목록
    - [x] 이미지 전환 (스와이프)
    - [x] 이미지 전환 (버튼)
    - [x] 위시리스트 추가 버튼
    - [x] 숙소 정보
    - infinite scroll은 구현하지 않음

# 고려하는 것
- 가능하면 에어비앤비에서 구현한 방법(html, css 요소)을 사용하여 구현

# 고려하지 않는 것
- html, css, 일부 UI 표현에 필요한 js를 제외한 모든 기능 (api 요청, 라우팅 등)
- 컴포넌트 분리
- 폰트
- 그 외 연습에 크게 도움되지 않는 것들

# Github Pages 배포
```bash
git subtree push --prefix dist origin gh-pages
```

# Github Pages Url
https://crisplaver.github.io/airbnb-clone/