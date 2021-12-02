import React from 'react'

import styles from './Presentar.module.sass'
import { PresentarProps } from './type'

export const Company: React.FC<PresentarProps> = ({ companies }) => {
  return (
    <div className={styles.className}>
      <h3 className={styles.title}>企業一覧</h3>
      <div className={styles.table}>
        <div className={styles.row}>
          <p className={styles.rootContent}>企業名</p>
          <p className={styles.rootContent}>業種</p>
          <p className={styles.rootContent}>銘柄コード</p>
          <p className={styles.rootContent}>株価</p>
        </div>
        {companies.map((company) => (
          <div key={company.id} className={styles.row}>
            <p key={company.id} className={styles.content}>
              {company.name}
            </p>
            <p key={company.id} className={styles.content}>
              {company.IDIndustry}
            </p>
            <p key={company.id} className={styles.content}>
              {company.IdentificationCode}
            </p>
            <p key={company.id} className={styles.content}>
              ---
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
