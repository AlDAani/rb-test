import { Carousel } from './pages/main/components/carousel';
import { useCallback, useRef, useState } from "react";
import { Dots } from "./pages/main/components/dots";
import { Rate } from "./pages/main/components/rate";
import { postEstimations } from "./api";
import { STEPS } from './constants';
import { TEstimation, TStepsList } from './types';
import './App.css'

function App() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [stepCount, setStepCount] = useState(1)
    const [estimations, setEstimations] = useState<TEstimation[]>([])
    const startAnimation = useCallback(() => {
    (async () => {
        if (ref.current && STEPS.length > stepCount) {
            ref.current.classList.add('next')
            ref.current.style.transform = `translate(0,${-100 * stepCount}%)`
            setStepCount(prev => prev + 1)
        } else if (ref.current && STEPS.length === stepCount) {
            ref.current.style.transform = `translate(0,${-100 * stepCount}%)`
            const requestBody: TStepsList = STEPS.map((step, index) => {
                return {text: step.text, estimation: estimations[index]}
            })
            setStepCount(prev => prev + 1)
            await postEstimations(requestBody)
        }
    })()
    }, [estimations, stepCount])

    const handleCarouselRestart = useCallback(() => {
        setStepCount(1)
        if(ref.current){
            ref.current.style.transform = `translate(0,0)`
        }
        setEstimations([])
    }, [])

    return (
        <div className='app'>
            <Carousel onCarouselRestart={handleCarouselRestart} steps={STEPS} estimations={estimations} ref={ref}/>
            <Rate startAnimation={startAnimation} setEstimations={setEstimations}/>
            <Dots stepCount={stepCount} steps={STEPS}/>
        </div>
    )
}

export default App
