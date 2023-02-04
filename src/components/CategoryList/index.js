import { useState } from 'react'
import { categories } from '../../helpers'
import Category from './Category'

export default () => {
  const [isActive, setIsActive] = useState(categories[0].color)
  return (
    <div>
      {categories.map((item, key) => <Category isActive={isActive} setIsActive={setIsActive} key={key} component={item.icon} color={item.color} label={item.label} />)}
    </div>
  )
}
