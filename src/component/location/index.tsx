import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS, LOCATION_TEL } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
          <div className="detail">Tel. {LOCATION_TEL}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">버스</div>
          <div />
          <div className="content">
            대련1 리 정류장(석판종점방면)
            <br />
            101번, 105번, 109번, 114번, 833번
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네비게이션 "모든날웨딩" 또는 "청주모든날" 입력
            <br />
            [주소검색]석판리 379-4
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">셔틀버스</div>
          <div />
          <div className="content">
            <b>오송역 8번출구</b>
            <br />
            10시 50분 출발 → 11시 10분 도착
            <br />
            11시 30분 출발 → 11시 50분 도착
            <br />
            <br />
            <b>오송역 복귀차량</b>
            <br />
            3시 30분 홀앞에서 출발
            <br />
            <br />
            <b>차량안내</b>
            <br />
            흰색 스타리아 (3325)
            <br />
            모든날웨딩 광고판 부착
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
