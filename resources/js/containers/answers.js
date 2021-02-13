import React from 'react'
import { useParams } from 'react-router-dom'

import { Header, AnswerForm, AnswerList } from '../components'
import { useDataApi } from '../hooks'

export function AnswersContainer({ questions }) {
  const { questionId } = useParams()
  const [payload] = useDataApi(`/api/questions/${questionId}`)
  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card' style={{ border: 'none' }}>
              <div className='card-header'>
                {payload.data.description}
              </div>
              {
                (payload.data.answers && payload.data.answers.length > 0)
                  ? <AnswerList answers={payload.data.answers} />
                  : <div className='text-center h6 p-2 mt-2'>
                    No answers yet! Be the first to answer by using the form below.
                    <hr className='mb-0' />
                  </div>
              }
            </div>
            <AnswerForm questionId={questionId} />
          </div>
        </div>
      </div>
    </>
  )
}
