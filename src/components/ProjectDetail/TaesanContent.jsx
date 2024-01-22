import React from 'react';
import './projectdetail.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/eoulimv2/eoulimv2img1.png';
import img2 from '../../assets/eoulimv2/eoulimv2img2.png';
import img3 from '../../assets/eoulimv2/eoulimv2img3.png';
import mainimg from '../../assets/taesan/taesanmain.png';

const TaesanContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='project'>
            <div className='project_title'>태산: 泰山</div>
            <div>2023.8~2023.10 (7주) </div>
            <div>팀 프로젝트(BE 3, FE 3)</div>
            <div>프론트엔드 개발</div>
            <div className='center'>
                <img src={mainimg} className='mainimg' />
            </div>
            
            <a href="https://github.com/ksungjoon/TAESAN"><div>Github URL(자세한 내용)</div></a>
            <div className='summary'>
                사용자의 소비 습관 관리를 통해 잘못된 소비 습관을 개선하고 소액으로 저축을 진행하여 부담 없이 꾸준히 저축할 수 있는 플랫폼
            </div>
            <div className='subtitle'>🏆 수상</div>
            <hr />
            <div>SSAFY 특화 프로젝트 (핀테크) 우수상</div>
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
                <p>TypeScript, React.js, ReactQuery, Tailwind, PWA, Zustand</p>
                <li>BackEnd</li>
                <p>Spring Boot, JPA, QueryDSL, Spring Cloud Config,Spring Security</p>
                <li>AI</li>
                <p>FastText, FastAPI, KoNLPy</p>
                <li>InfraStructor</li>
                <p>AWS, Nginx, Docker, Jenkins</p>
                <li>Authencation</li>
                <p>JWT, Redis</p>
                <li>Collaborate</li>
                <p>GitLab, Jira, Figma, Notion</p>
                <li>ECT</li>
                <p>Kakao Map API, Naver Clova OCR, Naver Cloud Platform SMS</p>
            </ul>
            <div className='subtitle'>💡 프로젝트 주요기능</div>
            <hr />
            <ul>
                <li>소비 패턴 분석 : 사용자의 거래내역을 기반으로 소비패턴 분석 결과 제공</li>
                <li>샀다 치고 : 충동적인 소비를 억제하고 저축하는 기능</li>
                <li>습관 저금 : 소비 습관 개선을 위해 습관을 관리하고 저축하는 기능</li>
                <li>절약 챌린지 : 다른 사람들과 일정 기간동안 진행하는 절약 챌린지</li>
            </ul>
            <div className='subtitle'>🧑‍💻 담당 업무</div>
            <hr />
            <ul>
                <li>로그인 및 사용자 정보 상태 관리</li>
                    <ul>
                        <li>React 및 TypeScirpt를 사용하여 로그인 기능 구현</li>
                        <li>Zustand를 사용하여 사용자 정보 상태 관리</li>
                    </ul>
                <li>서버 통신</li>
                    <ul>
                        <li>axios를 활용하여 서버 통신 기능 구현</li>
                        <li>로그인 토큰의 유효성 검사 및 만료 시 로그인 페이지로 이동하는 예외 처리 구현</li>
                    </ul>
                <li>스타일링 및 반응형 CSS</li>
                    <ul>
                        <li>화면 크기에 따른 반응형 CSS를 구현하여 PWA로서 다양한 디바이스에 대응</li>
                    </ul>
                <li>거래 내역 페이지</li>
                    <ul>
                        <li>React-Query를 사용하여 거래내역 Infinite Scroll로 구현</li>
                        <li>Naver Clover API를 활용하여 영수증 촬영 및 영수증 데이터 추출 기능 구현</li>
                        <li>촬영된 여수증 데이터를 사용자가 추가, 수정 및 삭제 할 수 있도록 기능 구현</li>
                    </ul>
                <li>소비 패턴 분석</li>
                    <ul>
                        <li>Nivo 차트 라이브러리를 활용하여 분류 종류와 기간에 따른 소비 패턴을 시각화한 차트 구현</li>
                    </ul>
            </ul>
        </div>
    );
};

export default TaesanContent;