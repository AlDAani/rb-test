import { IStep } from "../../../../types"

interface IProps {
    steps: IStep[],
    stepCount: number,
}

export const Dots = ({ steps, stepCount }: IProps) => {
    return (
        <div style={{top: `calc(50% - ${steps.length * 0.75}vw)` }} className='dots'>
            {steps.map((_, index)=>{
                return <div className={index + 1 === stepCount ? 'dot--active' : 'dot--inactive'}></div>
            })}
        </div>
    )
}
