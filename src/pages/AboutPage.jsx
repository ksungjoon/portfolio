import React from 'react';
import './AboutPage.css'
import AboutImage from '../components/AboutImage';

const AboutPage = () => {
    return (
        <div className='AboutPagebody'>
            <div>
                <h1>안녕하세요 김성준입니다.</h1>
                <h4>새로운 기술을 배우고 경험하는 것을 즐깁니다.</h4>
                <h4>한 번 시작하면 끝까지 파고드는 기질을 갖고 있습니다.</h4>
                <h4>다양한 사람들을 만나고 소통하며 성장하는 것을 좋아합니다.</h4>
                <h4>도전적인목표를 세우고 성취하는 것에 뿌듯함을 느낍니다.</h4>
                <div>My SKill</div>
                <div className='stack_container'>
                    <div className='stack_title'>Frontend</div>
                    <div>
                        <li className='stack_list'>HTML, CSS, JavaScript</li>
                        <li className='stack_list'>React.js</li>
                        <li className='stack_list'>React Query</li>
                        <li className='stack_list'>TypeScript</li>
                        <li className='stack_list'>PWA</li>
                        <li className='stack_list'>Vue.js</li>
                        <li className='stack_list'>Recoil</li>
                        <li className='stack_list'>Zustand</li>
                        <li className='stack_list'>Bootstrap</li>
                        <li className='stack_list'>Tailwind</li>
                    </div>
                </div>
                <div className='stack_container'>
                    <div className='stack_title'>Mobile</div>
                    <div>
                        <li className='stack_list'>Flutter</li>
                    
                    </div>
                </div>
                <div className='stack_container'>
                    <div className='stack_title'>Backend</div>
                    <div>
                        <li className='stack_list'>Python</li>
                        <li className='stack_list'>Django</li>
                    </div>
                </div>
                <div className='stack_container'>
                    <div className='stack_title'>Version_Control</div>
                    <div>
                        <li className='stack_list'>Git</li>
                        <li className='stack_list'>GitHub</li>
                        <li className='stack_list'>GitLab</li>
                    </div>
                </div>
                <div className='stack_container'>
                    <div className='stack_title'>Communication</div>
                    <div>
                        <li className='stack_list'>Jira</li>
                        <li className='stack_list'>Figma</li>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className='stack_title'>Frontend Engineering</div>
                <div>
                    <li className='stack_list'>5개의 팀 프로젝트 개발 경험(팀원6명 X 3,팀원4명 X 1명,팀원2명 X 1)</li>
                    <li className='stack_list'>Jira</li>
                    <li className='stack_list'>Jira</li>
                    <li className='stack_list'>Jira</li>
                </div>
                <div className='stack_title'>Software Engineering</div>
                <div>
                    <li className='stack_list'>애자일한 개발 경험, 유저 피드백을 이용해 기능 추가해 배포 후 업데이트 진행 경험</li>
                    <li className='stack_list'>실제 학교에 방문하여 개발한 Software를 사용하게하고 피드백 수용경험</li>
                    <li className='stack_list'>Jira</li>
                    <li className='stack_list'>Jira</li>
                </div>
                <div className='stack_title'>Backend Engineering</div>
                <div>
                    <li className='stack_list'>D_jango를 활용하여 프로젝트를 통해 백엔드 개발 경험</li>
                </div>
            </div>
            <div>
                <AboutImage/>
                <div>GitHub</div>
                <div>Instagram</div>
                <hr />
                <div>gkxm0443@naver.com</div>
                <div>이력서 다운</div>
            </div>
        </div>
    );
};

export default AboutPage;