const TheChallenge = () => {
    return (
        <> 
        <h2 id="topic1">THE CHALLANGE</h2>
        <div className="topics">
            <section className="subtopics">
                <h3>BACKGROUND</h3>
                <div className="topicSections">
                    <div className="topics">
                        <h4 className="sectionTitle">'결식아동 지원사업' 이란</h4>
                        <p>
                            경제적 빈곤 상태에 놓여 있는 가정의 자녀가 학교에서 급식을 먹지 못하면 학교 바깥에서 급식에 준하는 식사를 할 수 있도록 정부에서 보조하는 정부지원사업 입니다.
                        </p>
                        <ul className="sectionList">
                            <li>급식지원 아동수 : 330,014 명 (2019)</li>
                            <li>급식지원 아동수 : 4,952 원 (2019)</li>
                            <li>지원 연령 : 18세 이하 (단, 18세 이상이어도 고등학교에 재학중이면 포함)</li>
                        </ul>
                    </div>
                    <div className="topics">
                        <h4 className="sectionTitle">'선한영향력가게' 설립 배경</h4>
                        <p>결식아동 지원 정책의 문제점을 보완하기 위해 시작되었습니다.</p>
                        <ul>
                            <li>턱없이 부족한 가맹점, 반 이상이 편의점과 프랜차이즈 제과점</li>
                            <li>가맹점 정보에 대한 낮은 접근성과 정확성</li>
                            <li>평균 5000원으로 균형 잡힌 영양 섭취를 하긴 힘든 현실</li>
                            <li>점주가 가맹점 신청을 위해 따로 주민센터에 연락 및 방문해야 하는 불편함</li>
                            <li>지자체마다 부르는 명칭, 지원 금액, 지원 절차가 다름</li>
                        </ul>
                    </div>
                    <p>'선한영향력가게' 정의 및 연혁은 다음과 같습니다.</p>
                    <ul>
                        <li>정의: 아동급식 카드를 소지한 아동에게 무료로 음식이나 서비스를 제공하기 위해 자발적으로 사회공원을 하고자 모인 가게</li>
                        <li>연혁: 2019년 7월 2일 서울 마포구 홍대 '진짜 파스타' 대표 개인에서 시작하여 전국적으로 확산됨.</li>
                    </ul>
                </div>
            </section>
            <section className="subtopics">
                <h3>PROBLEM</h3>
                <div className="topicSections">
                    <h4 className="sectionTitle">사용하기에 불편</h4>
                    <ul>
                        <li>서비스 제공자
                            <ul>
                                <li>가입하기 절차: 구글 폼으로만 제출</li>
                                <li>제출 사항 확인 및 수정이 불편함</li>
                            </ul>
                        </li>
                        <li>결식아동
                            <ul>
                               <li>위치 기반 서비스 아님 필요한 정보를 파악하는데 시간이 오래 걸리고 복잡함 - 사용할 확률 + 꾸준히 사용할 확률이 떨어짐</li>
                               <li>새로 추가된 업체를 보려면 '진짜파스타'(설립자 운영 사업체) 인스타를 확인해야 함</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="subtopics">
                <h3>SCOPE</h3>
                <div className="topicSections">
                    <div className="topics">
                        <h4 className="sectionTitle">역할</h4>
                        <ul className="sectionList">
                            <li>편의성 향상을 통해 서비스 제공자와 사용자의 만족도를 높이고, 결식아동의 사용 빈도수 향상</li>
                            <li>2019년 12월부터 2020년 1월까지 앱 프로토타입 혼자 제작</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="subtopics">
                <h3>COPYRIGHT</h3>
                <div className="topicSections">
                    <div className="topics">
                        <ul className="sectionList">
                            <li>선한영향력 가게 사단법인</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        </>
     );
}
 
export default TheChallenge;