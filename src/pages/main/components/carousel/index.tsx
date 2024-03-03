import { forwardRef } from "react";
import {IStep, TEstimation, TStepsList} from "../../../../types";

interface IProps {
    steps: IStep[],
        estimations: TEstimation[],
        onCarouselRestart: ()=> void
}

type Ref = HTMLDivElement

export const Carousel = forwardRef<Ref, IProps>(({steps, estimations, onCarouselRestart}, ref) => {
    const result: TStepsList = steps.map((step, index) => {
        return {text: step.text, estimation: estimations[index]}
    })
    return (
        <div className='carousel' ref={ref}>
            {steps.map((step: IStep) => {
                return <div className='carousel-step'>{step.text}</div>
            })}
            <div className='carousel-step result'>
                {result.map(({text, estimation}) => {
                    return <span>{text}: {estimation}</span>
                })}
                <button className='restart-button' onClick={onCarouselRestart}>Roll again</button>
            </div>
        </div>
    )
})
