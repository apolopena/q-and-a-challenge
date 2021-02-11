import React from 'react'

import styles from './styles.css'
import { QuestionListItem } from '../index'

const QuestionList = ({ payload, isLoading }) => (
  <div className='card'>
    <div className='card-header'>Questions</div>
    <div className='card-body'>
      {
        payload.data.map(row => (
          <>
            <div className='row'>
              <div className='col-sm-9'>
                <h5>{row.description}</h5>
              </div>
              <div className='col-sm-2'>
                <span className='badge badge-primary p-2 pink-text'>
                  <span className='badge badge-light mr-1'>{row.answers_count}</span>
                  answers
                </span>
              </div>
            </div>
            <hr />
          </>
        ))
      }
      {isLoading ? <p>'Loading data...</p> : null}
    </div>
  </div>
)
export default QuestionList
