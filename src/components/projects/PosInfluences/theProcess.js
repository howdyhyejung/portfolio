import ColorPalette from '../../../images/posInfluences/colorPalette.svg';

const TheProcess = () => {
    return ( 
        <div className="topics">
            <h3 id="topic2">THE PROCESS</h3>
            <h4>Emphathize</h4>
                <p>실제 인터뷰가 불가능하여, 자료 수집을 기반으로 사용자 조사 수행</p>
                <p></p>
            <h4>Define</h4>
            <h4>Ideate</h4>
            <p>위치 기반 서비스, 필터, 좋아요 기능 제공</p>
            <h4>Prototype</h4>
            <img src={ ColorPalette } alt="color palette" />
        </div>
     );
}
 
export default TheProcess;