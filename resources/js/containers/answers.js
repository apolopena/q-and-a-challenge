import React from 'react'
import { Header, AnswerForm, AnswerList } from '../components'
import { useDataApi } from '../hooks'

export function AnswersContainer({ questions }) {
  //const [payload] = useDataApi('/api/questions')

  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            Answer UI goes here
            <AnswerList />
            <AnswerForm />
          </div>
        </div>
      </div>
    </>
  )
}
