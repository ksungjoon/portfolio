import React from 'react';
import './ExperiencesPage.css'

const ExperiencesPage = () => {
    return (
        <div className='centerbody'>
            <div className='ExperiencesPagebody'>
                <h1>Experience</h1>
                <div>개발 관련 경험들과 자격 내역, 수상 내역입니다.</div>
                <h2>Activities</h2>
                <div className="Container">
                    <ul className="TimelineList">
                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2023년 9월 1일 ~ 2023년 9월 17일</span>
                            <h3 className="TimelineTitle">신한은행 X SSAFY 해커톤 참여</h3>
                            <p className="TimelineContents">
                            신한은행과 SSAFY에서 주관하는 해커톤 대회에 참여한 경험이 있습니다.
                            </p>
                            <p className="TimelineContents">
                            모아일기 웹앱 에플리케이션 개발로 우수상(3등) 수상
                            </p>
                        </div>
                        </li>

                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2023년 1월 ~ 2023년 12월</span>
                            <h3 className="TimelineTitle">삼성 청년 SW 아케데미</h3>
                            <p className="TimelineContents">
                            삼성 , 고용노동부 주관 SW 역량 향상 교육 프로그램
                            </p>
                            <p className="TimelineContents">
                            Python, 알고리즘, Vue.js, React.js 등 역량을 키우며 프로그래밍 역량 향상
                            </p>
                            <p className="TimelineContents">
                            2학기 공통프로젝트 우수상, 2학기 특화프로젝트 우수상 수상
                            </p>
                        </div>
                        </li>

                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2016년 3월 ~ 2022년 2월</span>
                            <h3 className="TimelineTitle">조선대학교 산업공학과 졸업</h3>
                            <p className="TimelineContents">
                            조선대학교에서 학점 3.82로 우수한 성적으로 졸업을 하였습니다.
                            </p>
                        </div>
                        </li>
                    </ul>
                </div>
                <h2>Prize</h2>
                <div className="Container">
                    <ul className="TimelineList">
                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2023년 9월 17일</span>
                            <h3 className="TimelineTitle">2023 삼성 청년 SW 아카데미 특화 프로젝트 우수상</h3>
                            <p className="TimelineContents">
                            신한은행과 SSAFY에서 주관하는 해커톤 대회에 참여한 경험이 있습니다.
                            </p>
                        </div>
                        </li>

                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2023년 9월 17일</span>
                            <h3 className="TimelineTitle">신한 해커톤 프로젝트 우수상</h3>
                            <p className="TimelineContents">
                            삼성 , 고용노동부 주관 SW 역량 향상 교육 프로그램
                            </p>
                        </div>
                        </li>

                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2023년 9월 17일</span>
                            <h3 className="TimelineTitle">2023 삼성 청년 SW 아카데미 공통 프로젝트 우수상</h3>
                            <p className="TimelineContents">
                            조선대학교에서 학점 3.82로 우수한 성적으로 졸업을 하였습니다.
                            </p>
                        </div>
                        </li>
                    </ul>
                </div>
                <h2>Certifications</h2>
                <div className="Container">
                    <ul className="TimelineList">
                        <li className="TimelineItemContainer">
                        <div className="TimelineItem">
                            <span className="Date">2023년 9월 17일</span>
                            <h3 className="TimelineTitle">데이터분석[준전문가](ADsP)</h3>
                            <p className="TimelineContents">
                            신한은행과 SSAFY에서 주관하는 해커톤 대회에 참여한 경험이 있습니다.
                            </p>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperiencesPage;