import React from 'react';
import './projectdetail.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/eoulimv2/eoulimv2img1.png';
import img2 from '../../assets/eoulimv2/eoulimv2img2.png';
import img3 from '../../assets/eoulimv2/eoulimv2img3.png';
import mainimg from '../../assets/eoulim/eoulimmain.png';
import award from '../../assets/eoulim/award.jpg';
import team from '../../assets/eoulim/team.JPG'

const EoulimContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='project'>
            <div className='project_title'>어울림 V.1</div>
            <div>2023.07~2023.08 (7주) </div>
            <div>팀 프로젝트(BE 3, FE 3)</div>
            <div>프론트엔드 개발</div>
            <div className='center'>
                <img src={mainimg} className='mainimg' />
            </div>
            <a href="https://drive.google.com/file/d/1WslZg69gb1SLhKtSn4ULfPDBd9H6jFJf/view"><div>영상 URL</div></a>
            <a href="https://github.com/ksungjoon/Eoullim"><div>Github URL(자세한 내용)</div></a>
            <div className='summary'>
                주변에서 또래 친구를 만나기 힘든 교외 지역 아이들을 위한 가이드가 이끄는 1:1 랜덤 화상 미팅 기능을 제공하는 웹 서비스
            </div>
            <div className='subtitle'>🏆 수상</div>
            <hr />
            <div>SSAFY 공통 프로젝트 (웹 기술) 우수상</div>
            <div className='center'>
                <div className='slide'>
                    <Slider {...settings}>

                            <img src={award} className='imgdiv'/>
                       
                      
                            <img src={team} className='imgdiv'/>
                        
                        
                    </Slider>
                </div>
            </div>
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
                <p>TypeScript, React.js, Recoil, Styled-Components, MUI, Three.js, Node.js</p>
                <li>BackEnd</li>
                <p>Spring Boot, JPA, QueryDSL, Spring Security, Firebase, Openvidu</p>
                <li>Mobile</li>
                <p>Flutter, GetX, Webview</p>
                <li>InfraStructor</li>
                <p>AWS, Nginx, Docker, Jenkins</p>
                <li>Authencation</li>
                <p>JWT, Redis</p>
                <li>Collaborate</li>
                <p>GitLab, Jira, Figma, Notion</p>
            </ul>
            <div className='subtitle'>💡 프로젝트 주요기능</div>
            <hr />
            <ul>
                <li>1:1 랜덤 화상 미팅 기능</li>
                <li>아이들의 대화를 유도하는 가이드 기능</li>
                <li>아이들의 흥미를 끄는 동물 가면 기능</li>
                <li>만났던 친구를 다시 만날 수 있는 초대 기능</li>
                <li>부모님의 걱정을 덜어주는 녹화 기능</li>
            </ul>
            <div className='subtitle'>🧑‍💻 담당 업무</div>
            <hr />
            <ul>
                <li>Figma를 사용하여 아이들의 사용성을 고려한 hi-fi 프로토타입 구현.</li>
                <li>React와 TypeScript를 활용한 구현</li>
                    <ul>
                        <li>로그인,메인,녹화,친구페이지 드으이 기능을 React 및 TypeScript로 구현</li>
                        <li>Axios를 이용한 서버와의 통신 기능 구현</li>
                        <li>Styled-Components를 활용하여 CSS 적용</li>
                    </ul>
                <li>Recoil을 활용한 상태 관리</li>
                    <ul>
                        <li>프로필 선택 페이지에서 Recoil을 활용하여 프로필 정보에 대한 상태 관리</li>
                    </ul>
                <li>SSE(Sever-Sent Event)를 이용한 초대 기능</li>
                    <ul>
                        <li>메인 페이지에서 SSE를 활용하여 사용자 간의 초대 기능 구현</li>
                    </ul>
                <li>화상 채팅 페이지 구현</li>
                    <ul>
                        <li>STOMP.js를 활용하여 상대방과 서로 가이드를 클릭했을 때 다음 가이드로 자동 전환하는 기능 구현</li>
                    </ul>
                <li>토큰 관리와 예외 처리</li>
                    <ul>
                        <li>유저의 토큰이 없거나 만료되었을 대 로그인 화면으로 이동하는 예외처리 구현</li>
                    </ul>
            </ul>
        </div>
    );
};

export default EoulimContent;