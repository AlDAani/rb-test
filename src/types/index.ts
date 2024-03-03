export interface IStep {
    text: string
}

export type TEstimation = 'bad' | 'neutral' | 'good'

export type TStepsList = { text: string, estimation: TEstimation }[]
