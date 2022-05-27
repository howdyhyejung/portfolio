import BackToTop from "../BackToTop";

const PosInfluences = () => {
    return (
        <>
        <div className="posInfluences">
            <h2>Positive Influences</h2>
            <ul>
                <li>
                    <a href="#topic1">The Challenge</a>	
                </li>
                <li>
                    <a href="#topic2">The Process</a>	
                </li>
                <li>
                    <a href="#topic3">The Solution</a>	
                </li>
                <li>
                    <a href="#topic4">The Future</a>	
                </li>
            </ul>
            <h3 id="topic1">THE CHALLANGE</h3>
                <h4>Background</h4>
                    <p>선한영향력가게 란</p>
                    <p>선한영향력가게 출범 이유</p>
                    <p>도움이 필요한 아동 수</p>
                <h4>Problem</h4>
                    <p>몰라서 못 옴</p>
                <h4>Scope</h4>
                    <p>앱 프로토타입 제작</p>
                <h4>Role</h4>
                    <p>혼자 제작 Figma</p>
                <h4>Copyright</h4>
                    <p>선한영향력가게 법인 + 로고 디자이너</p>
            <h3 id="topic2">THE PROCESS</h3>
                <h4>Emphathize</h4>
                    <p>목록 생성 : type 분석 (당시에는 스마트서울맵(https://map.seoul.go.kr/smgis2/short/6N4zP)도 없었음)</p>
                <h4>Define</h4>
                <h4>Ideate</h4>
                <h4>Prototype</h4>
            <h3 id="topic3">THE SOLUTION</h3>
                <p>메인 포인트</p>
                <p>스크린샷과 함께 설명</p>
                <p>프로토타입 시연</p>
            <h3 id="topic4">THE FUTURE</h3>
                <p>?</p>
                <ul>
                    <li>앱 간결히</li>
                    <li>사용자 피드백</li>
                    <li>실제 제작</li>
                    <li>비용 충당 방법</li>
                </ul>
        </div>
        <BackToTop />
        </>
     );
}
 
export default PosInfluences;