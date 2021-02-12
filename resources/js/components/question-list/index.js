import React from 'react'

import './styles.css'
import { QuestionListItem } from '../index'

const QuestionList = ({ payload, isLoading }) => (
  <div className='card'>
    <div className='card-header'>Questions</div>
    <div className='card-body'>
      {
        payload.data.map(item => (
          <>
            <QuestionListItem item={item} />
            <hr />
          </>
        ))
      }
      {isLoading ? <p>'Loading data...</p> : null}
    </div>
  </div>
)
export default QuestionList
