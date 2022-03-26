import React from 'react'

import styles from './Presentar.module.sass'
import { PresentarProps } from './type'

export const Root: React.FC<PresentarProps> = () => {
  return (
    <div className={styles.className}>
      <h3>hello world!!!</h3>
    </div>
  )
}
