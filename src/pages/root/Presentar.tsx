import Link from 'next/link'
import React from 'react'

import styles from './Presentar.module.sass'
import { PresentarProps } from './type'

export const Root: React.FC<PresentarProps> = ({
  industryIsLoading,
  companyIsLoading,
  financialIsLoading,
  error,
}) => {
  return (
    <div className={styles.className}>
      <Link href="/company">
        <a>企業一覧ページ</a>
      </Link>
      <p className={styles.error}>{error}</p>
      <p>業種情報の生成状況: {industryIsLoading ? '読み込み中' : '完了'}</p>
      <p>企業情報の生成状況: {companyIsLoading ? '読み込み中' : '完了'}</p>
      <p>財務情報の生成状況: {financialIsLoading ? '読み込み中' : '完了'}</p>
      <h3>hello world!!!</h3>
    </div>
  )
}
