import React from 'react';
import './HomePage.css'
import Typewriter from 'typewriter-effect';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc"; 
import HomeImage from '../components/HomeImage';

const HomePage = () => {
  return (
    
      <div className='introduce'>
        <HomeImage/>
        <div className='introducetype'>
          <div>HI! HOW ARE YOU?</div>
          <div>I'M</div>
          <Typewriter
            options={{
              strings: ['SUNGJOON KIM', 'FRONT DEVELOPER','ANDROID DEVELOPER'],
              autoStart: true,
              loop: true,
            }}
          />
          <p>안녕하세요, 저는 김성준입니다. 😁</p>
          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className="about-icon" />
                <h5>산업공학과</h5>
                <small>학점:3.82</small>
              </article>
              <article className="about-card">
                <FiUsers className="about-icon" />
                <h5>SSAFY</h5>
                <small>SSAFY 9기 수료</small>
              </article>
              <article className="about-card">
                <VscFolderLibrary className="about-icon" />
                <h5>5개의 Projects</h5>
                <small>3개의 수상경력</small>
              </article>
            </div>
            <p>
              사용자 중심의 프론트엔드 개발자로, 다양한 기술을 손쉽게 익히며 항상 새로운 도전에 열려있습니다. 
              사용자의 피드백을 적극적으로 수용하고 반영하여, 언제나 높은 만족도를 유지하며 웹 경험을 향상시키는 것을 목표로 하고 있습니다.
            </p>
            <div>PERSONAL INFOS</div>
            <ul className='homeul'>
              <li className='homeli'>
                <span>Name : </span>
                김성준
              </li>
              <li className='homeli'>
                <span>Age : </span>
                1997.06
              </li>
              <li className='homeli'>
                <span>Phone : </span>
                010.3582.8505
              </li>
              <li className='homeli'>
                <span>Email : </span>
                gkxm0443@naver.com
              </li>
            </ul>
            
          </div>
        </div>
      </div>
   
  );
};

export default HomePage;