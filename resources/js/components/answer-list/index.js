import React from 'react'

import './styles.css'
import { AnswerListItem } from '../index'

const AnswerList = ({ answers, isLoading }) => (
  <div className='card'>
    <div className='card-body'>
      { // TODO: figure out why I have to make this null check
        answers && answers.map(item => (
          <React.Fragment key={item.id}>
            <AnswerListItem item={item} />
            <hr />
          </React.Fragment>
        ))
      }
      {isLoading ? <p>'Loading data...</p> : null}
    </div>
  </div>
)
export default AnswerList
