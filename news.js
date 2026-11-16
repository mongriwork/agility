/* 어질리티 앱 소식 자료 — 대회 · 클럽 · 대관
   이 파일만 고치면 앱의 대회 · 클럽 · 대관 · 홈 칸이 바뀐다(화면 코드는 안 건드림)
   real: true = 인터넷에서 확인한 실제 자료(src = 출처) · false = 예시
   date 는 'YYYY-MM-DD' · grades 는 아래 GRADES 이름 그대로 */
window.AG_DATA = {
  updated: '2026-11-16',
  ranges: '다음 대회: 11월 28일 · 12월 12일',
  GRADES: ['비기너', '노비스 1', '노비스 2', '어질리티 1', '어질리티 2', '어질리티 3'],
  promo: { need: 3, note: '한국애견연맹 — 어질리티 1→2: 심사위원 2명 이상에게 엑설런트 3번 · 2→3: 클린런 3번 · 비기너 · 노비스는 승급 기준 없이 누구나' },
  rulesSrc: '어질리티 1~3 = 세계애견연맹(FCI) 규정 · 비기너 · 노비스 장애물 수와 쓰는 장애물은 아직 못 찾았어요',
  rules: {
    '어질리티 1': { min: 15, max: 22, lenMin: 100, lenMax: 250, note: '가장 쉬운 정식 등급' },
    '어질리티 2': { min: 18, max: 22, lenMin: 100, lenMax: 250 },
    '어질리티 3': { min: 20, max: 22, lenMin: 100, lenMax: 250 },
  },
  events: [
    { id: 'ares26bb', name: 'ARES : BORN TO BURN', date: '2026-12-12', place: '춘천 강아지숲', org: '아레스(ares.agility)', grades: ['비기너', '노비스 1', '노비스 2', '어질리티 1', '어질리티 2', '어질리티 3'], deadline: '2026-11-30', real: true, note: '2026년 마지막 아레스 · 서바이벌(라운드마다 실격 · 기준 시간 넘으면 탈락, 마지막엔 클린팀만) · 신청 11월 16일 ~ 30일 · 비기너~노비스 / 점핑0~점핑 플로우 / 어질리티~어질리티 오픈', src: 'https://www.instagram.com/ares.agility/p/DfjOWc6FMau/' },
    { id: 'kao27', name: '2027 어질리티 국가대표 선발전', date: '2026-11-28', end: '2026-11-29', place: '서울 송파 가든파이브 라이프 메인광장', org: '한국어질리티연합', real: true, note: '2027년 중국 국제대회에 나갈 국가대표를 뽑아요 · 이틀(28~29일)', src: 'https://news.mtn.co.kr/article/2026110212261424118' },
    { id: 'kao26', name: 'KAO 코리아 어질리티 오픈 2026', date: '2026-11-07', end: '2026-11-08', place: '강원 춘천 강아지숲', org: 'KAO 운영위원회 · 사단법인 사람과동물', real: true, note: '2027 WAO(세계 어질리티 오픈) 국가대표 선발전 · 키 250~600 다섯 체급 · 생후 18개월 이상', src: 'https://worldagilityopen.com' },
    { id: 'sono26', name: '소노펫 도그 스포츠 챌린지 위크', date: '2026-11-06', end: '2026-11-08', place: '강원 홍천 소노펫 비발디파크', org: '한국어질리티연합', real: true, note: '반려인 · 반려견 1,000여 명 참가 예정이라고 알림', src: 'https://www.insight.co.kr/news/580231' },
    { id: 'leez26f', name: '리즈 파이널 어질리티 랭킹전', date: '2026-11-07', end: '2026-11-08', place: '', org: '한국어질리티연합', real: true, src: 'https://agility.co.kr/17' },
    { id: 'petlym26', name: '서울 펫림픽', date: '2026-10-24', end: '2026-10-25', place: '서울 월드컵공원 평화광장', org: '서울시', real: true, fee: '종목당 4만 원', note: '어질리티는 경험 있는 개만 · 9월 14일부터 선착순', src: 'https://www.koreatimes.co.kr' },
    { id: 'ares26go', name: '3rd ARES : GAME ON', date: '2026-09-19', end: '2026-09-20', place: '경북 경주 키녹', org: '휴먼펫온', real: true, note: '심사: 이용민(비기너 · 노비스 · 점핑0) · 전영환(점핑 스피드 · 플로우 · 어질리티 · 어질리티 오픈)', src: 'https://www.instagram.com/yongtrain/p/DdqRpUulLdM/' },
    { id: 'chuncheon26', name: '어질리티 국가대표 승급전(춘천 반려동물 페스티벌)', date: '2026-10-11', place: '강원 춘천 서면 애니메이션박물관 일원', org: '', real: true, note: '제6회 춘천 반려동물 페스티벌(10월 9~11일) 안 · 10일 스카이하운즈 원반 국제예선과 합쳐 300팀 출전', src: 'https://www.fnnews.com/news/202610060949400185' },
    { id: 'iksan26', name: '익산 FCI 국제 어질리티 대회', date: '2026-10-18', place: '전북 익산 원광대 운동장', org: '익산시 · 한국애견연맹 익산지회', real: true, note: '점핑 · 어질리티', src: 'https://www.gkg.co.kr/193471' },
    { id: 'kac26', name: '코리아어질리티클럽 승급전', date: '2026-10-04', place: '', org: '한국어질리티연합', grades: ['비기너', '노비스 1', '노비스 2', '어질리티 1', '어질리티 2', '어질리티 3'], real: true, note: '점핑 · 어질리티 · 비기너 · 노비스', src: 'https://agility.co.kr/17' },
    { id: 'hongcheon26', name: '홍천 한국애견연맹 내셔널 평가전(승급전)', date: '2026-09-20', place: '강원 홍천', org: '한국어질리티연합(한국애견연맹 공인)', real: true, src: 'https://agility.co.kr/39' },
    { id: 'taean26', name: '리즈 태안 비치 어질리티 컵', date: '2026-09-05', place: '충남 태안', org: '한국어질리티연합', real: true, src: 'https://agility.co.kr/39' },
    { id: 'kkfsono26', name: '한국애견연맹 위원회 승급전', date: '2026-06-21', place: '소노 어질리티 센터', org: '한국애견연맹', real: true, note: '5월 16~17일 팔레드차밍에서도 열림(검색으로만 확인)' },
    { id: 'kkc26', name: '한국애견협회 어질리티 대회', date: '2026-05-30', place: '', org: '한국애견협회', grades: ['비기너', '노비스 1', '노비스 2', '어질리티 1', '어질리티 2', '어질리티 3'], real: true, note: '2025년엔 5월 17일 서울 어린이회관 · 협회 정회원만 · 마감은 대회 5일 전', src: 'https://www.koreadaily.com' },
    { id: 'imsil26', name: '임실 N펫스타 FCI 국제 어질리티', date: '2026-05-02', end: '2026-05-03', place: '전북 임실 오수의견관광지', org: '임실군 · 한국애견연맹', real: true, note: '2일 아마추어 · 3일 국제 평가전', src: 'https://www.gukjenews.com' },
    { id: 'ares2603', name: '1st 아레스 어질리티 오픈', date: '2026-03-29', place: '', org: '아레스', grades: ['비기너', '노비스 1', '노비스 2', '어질리티 1', '어질리티 2', '어질리티 3'], course: 0, real: true, note: '코스 칸에 실제 코스맵 5개 — 비기너 · 노비스 1 · 노비스 2 · 점핑 오픈(이용민 설계 · 196.9 m) · 어질리티 오픈(216.6 m)', src: 'https://www.instagram.com/yongtrain/p/DWv_x2QFMmK/' },
  ],
  clubs: [
    { id: 'kinder', name: '킨더도기 어질리티클럽', mark: 'K', color: '#1f5a3a', logo: 'art/kinder_logo.jpg', area: '경기 양주', intro: '국가대표 선수 코치진 · 나이 · 견종 · 체급 상관없이 회원 모집', real: true,
      lesson: '그룹 레슨 · 개인 레슨(예약제)', contact: '010-7369-4828 · 전화 · 카톡 상담', insta: 'kinder_doggy_agility.club', boss: '이용민 대표',
      src: 'https://www.instagram.com/kinder_doggy_agility.club/',
      notices: [
        { tag: '원정', title: '노르웨이 국제대회 원정 출발(10월 9~11일)', date: '2026-10-08', real: true, body: '클럽 선수들이 노르웨이 국제대회에 나갑니다. 응원 부탁드립니다.', src: 'https://www.instagram.com/kinder_doggy_agility.club/p/DeQyoM_EpBC/' },
        { tag: '코스 훈련', title: '이번 주 코스 훈련 영상', date: '2026-09-25', real: true, body: '이용민 대표 계정에 올라온 이번 주 코스 훈련 영상이에요.', src: 'https://www.instagram.com/yongtrain/reel/DdtgKPvx-So/' },
      ],
      news: [
        { who: '메타 · 망치 · 치로 외', title: '2027 WAO 국가대표 선발', date: '2026-11-09', real: true, body: 'KAO 대회(11월 7~8일, 2027 WAO 국가대표 선발전) — 250체급 메타 1위 · 여름 2위 / 300체급 또로 2위 · 라떼 3위 / 400체급 망치 1위 / 500체급 치로 1위 · 팥쥐 2위 · 마리 3위 / 600체급 머스탱 2위', src: 'https://www.instagram.com/kinder_doggy_agility.club/reel/Dfg8Zo7STgw/' },
        { who: '이용민 대표', title: 'ARES: GAME ON 심사 · 소망 최고 선수', date: '2026-10-30', real: true, body: 'ARES: GAME ON 대회에서 이용민 대표가 일부 종목 심사를 맡았고, 소망이 그 경기 최고 선수로 뽑혔어요.', src: 'https://www.instagram.com/yongtrain/p/DfI6S9HmJMF/' },
        { who: '팟지', title: '독스포츠 시리즈 1편 AG Pro 1위', date: '2026-10-18', real: true, body: '독스포츠 시리즈 1편(10월 17일)에서 이용민 대표와 팟지가 AG Pro 실수 없이 완주해 1위, JP Pro 3위.', src: 'https://www.instagram.com/yongtrain/reel/DeoMr7rRyWp/' },
        { who: '키나 · 리지 · 양배추', title: '노르웨이 국제대회 입상', date: '2026-10-17', real: true, body: '키나(XL) 1위 1번 · 3위 3번 / 리지(L) 2위 2번 · 3위 2번 / 양배추(XS) 1위 1번 · 3위 2번', src: 'https://www.instagram.com/kinder_doggy_agility.club/reel/Delk77dyZx8/' },
        { who: '팥쥐', title: 'ARES: GAME ON 어질리티 오픈 1위 · 점핑 플로우 2위', date: '2026-09-20', real: true, body: '세계대회(WAO) 뒤 오랜만에 나간 3rd ARES : GAME ON 둘째 날 — 이용민 · 팥쥐 팀이 어질리티 오픈 1위, 점핑 플로우 2위.', src: 'https://www.instagram.com/yongtrain/reel/Ddgjfj3xM1x/' },
        { who: '클럽', title: '제1회 리즈 어질리티 크라운 클럽 우승', date: '2025-09-08', real: true, body: '전국 클럽 최강자전(9월 7일)에서 클럽 우승기를 받았어요.', src: 'https://www.instagram.com/kinder_doggy_agility.club/reel/DOVuvtCElXx/' },
        { who: '치로 · 팥쥐', title: 'WAO 세계대회 500체급 1위 · 2위', date: '2025-05-24', real: true, body: '네덜란드 세계대회(WAO) 500체급 — 김동한 코치 · 치로 1위, 이용민 · 팥쥐 2위. 클럽은 「대한민국 최초 입상」이라고 적었어요.', src: 'https://www.instagram.com/kinder_doggy_agility.club/reel/DKCcT_cTZLg/' },
      ] },
  ],
  venues: [
    { name: '킨더도기 어질리티 센터', area: '경기 양주', surface: '야외 잔디 · 실내', tags: ['국가대표 코치진 클럽', '레슨 · 클린런 챌린지', '주차'], phone: '010-7369-4828', contact: '전화 · 카톡', real: true,
      note: '값 · 되는 시간은 클럽에 문의', src: 'https://www.instagram.com/kinder_doggy_agility.club/' },
    { name: '팔레드차밍 어질리티 그라운드', area: '경기 양평', surface: '잔디', tags: ['터널 · A프레임 · 허들', '반려견 리조트 안', 'PDC 어질리티 클럽 레슨'], phone: '1668-3523', contact: '카톡 문의', real: true,
      note: '리조트 안 · 바깥 손님 대관은 문의', src: 'https://www.pdcharming.co.kr/facility/agility-ground' },
  ],
};
