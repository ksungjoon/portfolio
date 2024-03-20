import React from 'react';
import './projectdetail.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/eoulimv2/eoulimv2img1.png';
import img2 from '../../assets/eoulimv2/eoulimv2img2.png';
import img3 from '../../assets/eoulimv2/eoulimv2img3.png';
import mainimg from '../../assets/eoulimv2/eoulimmainv2.png';
import { FaGithub } from "react-icons/fa";

const Eoulim2Content = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='project'>
            <div className='project_title'>어울림 V.2</div>
            <div className='subtitle'>2023.10~2023.11 (7주) </div>
            <div className='subtitle'>팀 프로젝트(BE 3, FE 3)</div>
            <div className='subtitle'>프론트엔드 개발,모바일 개발</div>
            <div className='center'>
                <img src={mainimg} className='mainimg' />
            </div>
            <a href="https://github.com/ksungjoon/Eoulim2.0">
                <div className='githublink'>    
                    <FaGithub/>
                    Github URL(자세한 내용)
                </div>
            </a>
            <div className='summary'>
                주변에서 또래 친구를 만나기 힘든 교외 지역 아이들을 위한 가이드가 이끄는 1:1 랜덤 화상 미팅 기능을 제공하는 웹 서비스 리팩토링 and 모바일 서비스
            </div>
            <div className='subtitle'>💻 기능 설명 영상 </div>
            <hr />
            <div class="video-wrap">
                    <iframe id="video" width="100%" height="315" src="https://www.youtube.com/embed/Wn3oRmgK3AQ" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='subtitle'>🛠️ 개발 환경</div>
            <hr />
            <ul>
                <li className='devsetting'>ForntEnd</li>
                <p>TypeScript, React.js, Recoil, Styled-Components, MUI, Three.js, Node.js</p>
                <li className='devsetting'>BackEnd</li>
                <p>Spring Boot, JPA, QueryDSL, Spring Security, Firebase, Openvidu</p>
                <li className='devsetting'>Mobile</li>
                <p>Flutter, GetX, Webview</p>
                <li className='devsetting'>InfraStructor</li>
                <p>AWS, Nginx, Docker, Jenkins</p>
                <li className='devsetting'>Authencation</li>
                <p>JWT, Redis</p>
                <li className='devsetting'>Collaborate</li>
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
                <li>GetX를 활용한 프로필 상태 관리</li>
                <li>프로토타입 설계</li>
                    <ul>
                        <li>Figma를 활용하여 프로토타입 설계</li>
                    </ul>
                <li>모바일 Model, API 설계</li>
                <li>모바일 Flutter 프레임 설계</li>
                <li>모바일 자동 로그인, 프로필, 내친구, 애니몬 변경 기능 구현</li>
                    <ul>
                        <li>Secure_Storage를 활용한 모바일 자동로그인 구현</li>
                    </ul>
                <li>프레임에 따른 웹 디자인 구현(웹 리펙토링)</li>
                    <ul>
                        <li>Web-View를 통해 친구 만남페이지 모바일 화면에 맞게 구현</li>
                    </ul>
            </ul>
        </div>
    );
};

export default Eoulim2Content;