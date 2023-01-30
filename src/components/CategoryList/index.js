import { useState } from 'react'
import { icons } from '../../helpers'
import Category from './Category'

export default () => {
  const [isActive, setIsActive] = useState(icons[0].color)
  return (
    <div>
      {icons.map((item, key) => <Category isActive={isActive} setIsActive={setIsActive} key={key} component={item.icon} color={item.color} label={item.label} />)}
    </div>
  )
}
