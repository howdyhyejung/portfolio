import { useEffect, useState } from "react";

function BackToTop(){
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return <div className="App">
        {backToTop && (
            <button 
                className='backToTopButton'
                onClick={scrollUp}
            >^</button>
        )}
    </div>
}

export default BackToTop;