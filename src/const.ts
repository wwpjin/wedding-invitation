import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-02-08 12:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [15]

export const LOCATION = "모든 날, Wedding"
export const LOCATION_ADDRESS = "충청북도 청주시 남이면 석판리 379-4번지"
export const LOCATION_TEL = "010-9597-2215"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [위도, 경도] 형식.
export const WEDDING_HALL_POSITION = [36.586103, 127.440300]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 1616786350

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 8634826

export const BRIDE_FULLNAME = "이혜숙"
export const BRIDE_FIRSTNAME = "혜숙"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "이재욱"
export const BRIDE_MOTHER = "김기순"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-8625-4529",
    account: "국민은행 98625452948",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-8733-4529",
    account: "농협은행 41912-431-421",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-9995-4529",
    account: "농협은행 305-02-100786",
  },
]

export const GROOM_FULLNAME = "이진재"
export const GROOM_FIRSTNAME = "진재"
export const GROOM_TITLE = "장남"
export const GROOM_MOTHER = "하경희"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-2503-7250",
    account: "토스뱅크 1000-0805-1743",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-3410-0733",
    account: "농협은행 401145-52-059146 ",
  },
]
