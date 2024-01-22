import React from 'react';
import './projectdetail.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/eoulimv2/eoulimv2img1.png';
import img2 from '../../assets/eoulimv2/eoulimv2img2.png';
import img3 from '../../assets/eoulimv2/eoulimv2img3.png';
import mainimg from '../../assets/moadiary/moadiarymain.png';

const MoadiaryContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='project'>
            <div className='project_title'>모아일기</div>
            <div>2023.9.01~2023.9.17 (2주) </div>
            <div>팀 프로젝트(BE 2, FE 2)</div>
            <div>프론트엔드 개발</div>
            <div className='center'>
                <img src={mainimg} className='mainimg' />
            </div>
            
            <a href="https://github.com/ksungjoon/TAESAN"><div>Github URL(자세한 내용)</div></a>
            <div className='summary'>
                핀테크 연결과 확장을 주제로 용돈기입과 일기를 한번에 작성할 수 있는 아이 친화적인 UI를 제공하는 웹앱 애플리케이션
            </div>
            <div className='subtitle'>🏆 수상</div>
            <hr />
            <div>신한 해커톤 프로젝트 우수상</div>
            <div className='subtitle'>💻 서비스 화면</div>
            <hr />
            <div className='center'>
                <div className='slide'>
                    <Slider {...settings}>
                        
                            <img src={img1} className='imgdiv'/>
                       
                      
                            <img src={img2} className='imgdiv'/>
                        
                        
                            <img src={img3} className='imgdiv'/>
                        
                    </Slider>
                </div>
            </div>
            <div className='subtitle'>🛠️ 개발 환경</div>
            <hr />
            <ul>
                <li>ForntEnd</li>
                <p>TypeScript, React.js, Tailwind, Styled-Components, PWA, Zustand</p>
                <li>BackEnd</li>
                <p>Spring Boot, JPA, QueryDSL, Spring Security</p>
                <li>AI</li>
                <p>FastText, FastAPI, KoNLPy</p>
                <li>InfraStructor</li>
                <p>AWS, Nginx, Docker, Jenkins</p>
                <li>Authencation</li>
                <p>Redis</p>
                <li>Collaborate</li>
                <p>GitHub, Figma, Notion</p>
            </ul>
            <div className='subtitle'>💡 프로젝트 주요기능</div>
            <hr />
            <ul>
                <li>용돈 일기장 기능</li>
                    <ul>
                        <li>해당 날짜의 거래내역을 불러와 거래내역을 보며 일기를 쓸 수 있는 기능</li>
                    </ul>
                <li>미션기능</li>
                    <ul>
                        <li>부모님들이 아이에게 미션을 부여할 수 있는 기능</li>
                        <li>미션 성공 시 보상으로 걸린 금액만큼 자동 인출 되는 기능</li>
                    </ul>
                <li>일기 공유 기능</li>
                    <ul>
                        <li>모든 이용자들은 링크를 통해 일기내용을 공유 할 수 있는 기능</li>
                        <li>일정 시간이 지날시 링크가 만료되는 기능</li>
                    </ul>
            </ul>
            <div className='subtitle'>🧑‍💻 담당 업무</div>
            <hr />
            <ul>
                <li>로그인 및 사용자 역할 구분</li>
                    <ul>
                        <li>React 및 TypeScirpt를 사용하여 로그인 페이지 및 사용자 역할을 구분하는 기능 구현</li>
                        <li>Zustand를 사용하여 사용자 정보 상태 관리</li>
                    </ul>
                <li>서버 통신</li>
                    <ul>
                        <li>axios를 활용하여 서버 통신 기능 구현</li>
                        <li>로그인 토큰의 유효성 검사 및 만료 시 로그인 페이지로 이동하는 예외 처리 구현</li>
                    </ul>
                <li>스타일링 및 반응형 CSS</li>
                    <ul>
                        <li>Styled-Components를 사용하여 CSS 스타일링 적용</li>
                        <li>화면 크기에 따른 반응형 CSS를 구현하여 PWA로서 다양한 디바이스에 대응</li>
                    </ul>
                <li>가시적인 입력 효과</li>
                    <ul>
                        <li>휴대폰 번호에 대한 가시적인 효과를 높이기 위한 하이픈(-) 정규식 구현</li>
                        <li>숫자 입력시 천 단위로 구분하여 가시성 높이는 파싱 구현</li>
                    </ul>
                <li>일기 공유 페이지</li>
                    <ul>
                        <li>Axios를 사용하여 일기 공유 요청 시 유효성 체크 및 만료시 로그인 페이지로 이동하는 예외 처리</li>
                    </ul>
                <li>부모계정에서 아이계정 등록 기능 구현</li>
                    <ul>
                        <li>1원 인증 API를 활용하여 부모 계정에서 아이계정을 등록하는 기능 구현</li>
                        <li>SSE를 통하여 부모가 아이계정을 등록하려하면 아이에게 알림이 가도록 하는 기능 구현</li>
                    </ul>
                <li>자녀의 소비 분석</li>
                    <ul>
                        <li>Nivo 차트 라이브러리를 활용하여 아이의 소비 패턴을 시각화한 차트 구현</li>
                        <li>전체 소비 내역 기준으로 백분율로 환산하여 보여지도록 파싱</li>
                    </ul>
            </ul>
        </div>
    );
};

export default MoadiaryContent;