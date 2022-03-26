import Link from 'next/link'
import React from 'react'

import styles from './Presentar.module.sass'
import { PresentarProps } from './type'

export const Root: React.FC<PresentarProps> = () => {
  return (
    <div className={styles.className}>
      <Link href="/company">
        <a>企業一覧ページ</a>
      </Link>
      <h3>hello world!!!</h3>
    </div>
  )
}
