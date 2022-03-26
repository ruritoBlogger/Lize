import Link from 'next/link'
import React from 'react'

import styles from './Presentar.module.sass'
import { PresentarProps } from './type'

export const Company: React.FC<PresentarProps> = ({ companies, error }) => {
  return (
    <div className={styles.className}>
      <Link href="/">
        <a>トップページ</a>
      </Link>
      <h3 className={styles.title}>企業一覧</h3>
      <p className={styles.error}>{error}</p>
      <div className={styles.table}>
        <div className={styles.row}>
          <p className={styles.rootContent}>企業名</p>
          <p className={styles.rootContent}>業種</p>
          <p className={styles.rootContent}>銘柄コード</p>
          <p className={styles.rootContent}>株価</p>
        </div>
        {companies.map((company) => (
          <div key={company.identificationCode} className={styles.row}>
            <p className={styles.content}>{company.name}</p>
            <p className={styles.content}>{company.industryName}</p>
            <p className={styles.content}>{company.identificationCode}</p>
            <p className={styles.content}>---</p>
          </div>
        ))}
      </div>
    </div>
  )
}
