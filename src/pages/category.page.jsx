import React from 'react'
import { withRouter } from 'react-router-dom'

import CategoryComponent from '../components/category.component.jsx'
import './category.styles.sass'

const CategoryPage = (props) => {
  const category = props.data.categories[props.match.params.category]

  return (
    <div className='page-category'>
      <h2>{category.name}</h2>
      <div className='category' id={`category_${props.match.params.category}`}>
        <CategoryComponent category={category} showImage={true} />
      </div>
    </div>
  )
}

export default withRouter(CategoryPage)
