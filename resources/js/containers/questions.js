import React from 'react'
import { Header, QuestionForm, QuestionList } from '../components'
import { useDataApi } from '../hooks'

const QUESTIONS_ENDPOINT = 'https://8000-emerald-herring-uyhdsamt.ws-us03.gitpod.io/api/questions'

export function QuestionsContainer({ questions }) {
  const [payload] = useDataApi(QUESTIONS_ENDPOINT)

  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <QuestionForm />
            <p />
            <QuestionList
              payload={payload}
              isLoading={payload.isLoading}
            />
          </div>
        </div>
      </div>
    </>
  )
}
