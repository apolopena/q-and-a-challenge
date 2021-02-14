import React, { memo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import AnswerContext from '../context/AnswerContext'
import { Header, AnswerForm, AnswerList } from '../components'
import { useDataApi } from '../hooks'

export function AnswersContainer() {
  const { questionId } = useParams()
  const [payload] = useDataApi(`/api/questions/${questionId}`)
  const [answers, setAnswers] = useState()
  console.count('render count')


  useEffect(() => {
    console.log(`the value of answers is ${JSON.stringify(answers, null, 2)}`)
    console.log(`the value of payload is ${JSON.stringify(payload, null, 2)}`)
    answers === undefined && setAnswers(payload.data.answers)
  }, [payload, answers])

  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card' style={{ border: 'none' }}>
              <div className='card-header'>
                {payload.isLoading ? 'LOADING ANSWERS...' : payload.data.description}
              </div>
              {
                (answers && answers.length > 0)
                  ? <AnswerList answers={answers} />
                  : <div className='text-center h6 p-2 mt-2'>
                    No answers yet! Be the first to answer by using the form below.
                    <hr className='mb-0' />
                  </div>
              }
            </div>
            <AnswerContext.Provider value={{ answers, setAnswers }}>
              <AnswerForm questionId={questionId} />
            </AnswerContext.Provider>
          </div>
        </div>
      </div>
    </>
  )
}
