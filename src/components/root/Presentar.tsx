import Link from 'next/link'
import React from 'react'

import styles from './Presentar.module.sass'
import { PresentarProps } from './type'

const Presentar: React.FC<PresentarProps> = ({
  industryIsLoading,
  industryButtonOnClick,
  companyIsLoading,
  companyButtonOnClick,
  financialIsLoading,
  financialButtonOnClick,
  error,
}) => {
  return (
    <div className={styles.className}>
      <Link href="/company">
        <a>企業一覧ページ</a>
      </Link>
      <p className={styles.error}>{error}</p>
      <button onClick={industryButtonOnClick}>業種情報を生成する</button>
      <button onClick={companyButtonOnClick}>企業情報を生成する</button>
      <button onClick={financialButtonOnClick}>財務情報を生成する</button>
      <p>業種情報の生成状況: {industryIsLoading ? '読み込み中' : '完了'}</p>
      <p>企業情報の生成状況: {companyIsLoading ? '読み込み中' : '完了'}</p>
      <p>財務情報の生成状況: {financialIsLoading ? '読み込み中' : '完了'}</p>
      <h3>hello world!!!</h3>
    </div>
  )
}

export default Presentar
