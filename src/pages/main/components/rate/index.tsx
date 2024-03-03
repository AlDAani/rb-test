import { TEstimation } from "../../../../types";
import { Dispatch, SetStateAction } from "react";

interface IProps {
    startAnimation: () => void
    setEstimations: Dispatch<SetStateAction<TEstimation[]>>
}

export const Rate =  ({startAnimation, setEstimations}: IProps) => {
    const setBadEstimation = () =>{
        startAnimation()
        setEstimations(prevState => [...prevState, 'bad'])
    }
    const setNeutralEstimation = () =>{
        startAnimation()
        setEstimations(prevState => [...prevState, 'neutral'])
    }
    const setGoodEstimation = () =>{
        startAnimation()
        setEstimations(prevState => [...prevState, 'good'])
    }
    return (
        <div className='rate'>
            <button className='button thumb-up' onClick={setGoodEstimation}/>
            <button className='button thinking' onClick={setNeutralEstimation}/>
            <button className='button thumb-down' onClick={setBadEstimation}/>
        </div>
    )
}
