export interface Question {
    id: number
    question: string
    options: string[]
    answers: string
    correctAnswer: number
    userSelectedAnswer?: number
    isCorrectUserAnswer?: boolean
}