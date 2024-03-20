import React from 'react';
import './ContactPage.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuCopy } from "react-icons/lu";

const ContactPage = () => {
    const handleCopyClick = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            alert('텍스트가 복사되었습니다.');
          })
          .catch((error) => {
            console.error('복사 실패:', error);
          });
      };
    return (
        <div className='centerbody'>
            <div className='contactcontainer'>
                <h1>Contact</h1>
                <div className='contactmessage'>관심 갖고 포트폴리오를 읽어주셔서 감사합니다. 저에게 연락을 하고 싶으시면 부담없이 gkxm0443@naver.com 로 메일 부탁드립니다!
    끊임 없이 성장하는 개발자가 되도록 노력하겠습니다. 감사합니다!</div>
            </div>
            <div className='cttome'>
                <div className='contactme'>
                    <a href="https://github.com/ksungjoon">
                        <FaGithub/>
                    </a>
                    <a href="https://www.instagram.com/k.sung_joon/">
                        <FaInstagram/>
                    </a>
                </div>

                <div className='email'>
                    <MdEmail/>
                    <div>
                        gkxm0443@naver.com
                    </div> 
                </div>
                <div className='emailclick' onClick={()=>handleCopyClick('gkxm0443@naver.com')}>
                    <LuCopy/>
                    <div>
                        이메일 주소 복사하기
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;