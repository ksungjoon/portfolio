import React from 'react';
import './projectdetail.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/eoulimv2/eoulimv2img1.png';
import img2 from '../../assets/eoulimv2/eoulimv2img2.png';
import img3 from '../../assets/eoulimv2/eoulimv2img3.png';
import mainimg from '../../assets/aurora/auroramain.png';

const Aourora = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className='project'>
            <div className='project_title'>오로라</div>
            <div>2023.05.17~2023.05.25 (1주) </div>
            <div>팀 프로젝트(Full-Stack 2)</div>
            <div>프론트엔드 개발, 백엔드 개발</div>
            <div className='center'>
                <img src={mainimg} className='mainimg' />
            </div>
            <a href="https://drive.google.com/file/d/10tspRfPEKhmzy1KJgQCRTEFDJT69SvtZ/view"><div>영상 URL</div></a>
            <a href="https://github.com/ksungjoon/Eoulim2.0"><div>Github URL(자세한 내용)</div></a>
            <div className='summary'>
                사용자가 좋아하는 영화와 시청한 영화를 기반으로 영화를 추천해주는 영화 추천 플랫폼
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
                <p>Vue.js, HTML5, CSS, JavaScript, Bootstrap </p>
                <li>BackEnd</li>
                <p>Python, Django</p>
                <li>Collaborate</li>
                <p>GitHub</p>
            </ul>
            <div className='subtitle'>💡 프로젝트 주요기능</div>
            <hr />
            <ul>
                <li>장르별 영화 분류 기능</li>
                <li>검색을 통한 영화 찾기 기능</li>
                <li>사용자간의 팔로잉 팔로우 기능</li>
                <li>좋아요한 영화와 봤던 영화 기반 영화 추천 기능</li>
                <li>영화 상세정보 기능</li>
                <li>영화에 대한 평점과 댓글 작성 기능</li>
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

export default Aourora;