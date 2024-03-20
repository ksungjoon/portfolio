import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './ProjectsPage.css';
import eoulimv2 from '../assets/eoulim.v2.png';
import taesan from '../assets/taesan.png';
import moadiary from '../assets/Ijoha.png';
import eoulim from '../assets/eoulim.png';
import aurora from '../assets/aurora.png';
import Eoulim2Content from './../components/ProjectDetail/Eoulim2Content';
import TaesanContent from '../components/ProjectDetail/TaesanContent';
import MoadiaryContent from '../components/ProjectDetail/MoadiaryContent';
import EoulimContent from '../components/ProjectDetail/EoulimContent';
import Aourora from '../components/ProjectDetail/Aourora';
import { TbHandClick } from "react-icons/tb";

const ProjectsPage = () => {
  const [visibleText, setVisibleText] = useState(null);

  useEffect(() => {
    const items = document.querySelectorAll('.item');

    const expand = (clickedItem, index) => {
      items.forEach((item, i) => {
        if (i !== index && item.clicked) {
          gsap.to(item, {
            width: '12vw',
            duration: 2.5,
            ease: 'elastic(1, .3)',
          });
          gsap.to(`.text-${i}`, {
            opacity: 0,
            display: 'none',
            duration: 0.5,
          });
          item.clicked = false;
        }
      });

      gsap.to(clickedItem, {
        width: clickedItem.clicked ? '12vw' : '40vw',
        duration: 2.5,
        ease: 'elastic(1, .3)',
      });

      gsap.to(`.text-${index}`, {
        opacity: clickedItem.clicked ? 0 : 1, // 투명도를 토글
        display: clickedItem.clicked ? 'none' : 'block', // 표시 여부를 토글
        duration: 0.5,
      });

      clickedItem.clicked = !clickedItem.clicked;
      setVisibleText(clickedItem.clicked ? index : null);
    };

    const handleClick = (item, index) => {
      expand(item, index);
    };

    items.forEach((item, index) => {
      item.clicked = false;
      item.onclick = () => handleClick(item, index);
    });

    return () => {
      items.forEach((item) => {
        item.onclick = null;
      });
    };
  }, []);

  return (
    <div className='projectbody'>
      <h1>My Projects</h1>
      <div className='cardbody'>
        <div className="group">
          <div className="item" style={{ backgroundImage: `url(${eoulimv2})` }}></div>
          <div className="item" style={{ backgroundImage: `url(${taesan})` }}></div>
          <div className="item" style={{ backgroundImage: `url(${moadiary})` }}></div>
          <div className="item" style={{ backgroundImage: `url(${eoulim})` }}></div>
          <div className="item" style={{ backgroundImage: `url(${aurora})` }}></div>
        </div>
      </div>
      {visibleText === null ?  
      <div class="clickcontainer">
        <div className='clickmouse'>
          <TbHandClick/>
        </div>
        <span class="clicktext">Click project</span>
      </div>:
      <div class="scrollcontainer">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="scrolltext">Scroll down</span>
      </div>
      }
      <div className={`text-${0}`} style={{ opacity: visibleText === 0 ? 1 : 0, display: visibleText === 0 ? 'block' : 'none' }}><Eoulim2Content/></div>
      <div className={`text-${1}`} style={{ opacity: visibleText === 1 ? 1 : 0, display: visibleText === 1 ? 'block' : 'none' }}><TaesanContent/></div>
      <div className={`text-${2}`} style={{ opacity: visibleText === 2 ? 1 : 0, display: visibleText === 2 ? 'block' : 'none' }}><MoadiaryContent/></div>
      <div className={`text-${3}`} style={{ opacity: visibleText === 3 ? 1 : 0, display: visibleText === 3 ? 'block' : 'none' }}><EoulimContent/></div>
      <div className={`text-${4}`} style={{ opacity: visibleText === 4 ? 1 : 0, display: visibleText === 4 ? 'block' : 'none' }}><Aourora/></div>
    </div>
  );
};

export default ProjectsPage;
