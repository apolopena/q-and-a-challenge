import React from 'react'
import { Header, QuestionForm, QuestionList } from '../components'

export function QuestionsContainer({ questions }) {
  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <QuestionForm />
            <QuestionList />
          </div>
        </div>
      </div>
    </>
  )
}
