import axios from 'axios'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as t from 'io-ts'
import React, { useEffect, useState } from 'react'

import { Company, CompanyCodec } from '../../domains'
import { Company as View } from './Presentar'

export const Container: React.FC = () => {
  const [companiesData, setCompaniesData] = useState<Company[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getCompaniesData = async () => {
      // TODO: urlの管理方法のリファクタリング
      const getDataFromAPI = pipe(
        TE.tryCatch(
          () => axios.get('http://127.0.0.1:8080/companyy'),
          (reason) => `${reason}`,
        ),
      )

      // TODO: エラーハンドリングの実装
      getDataFromAPI().then((result) =>
        pipe(
          result,
          E.fold(
            (e) => setError(e),
            (result) =>
              pipe(
                t.array(CompanyCodec).decode(result.data),
                E.map((companiesData) => setCompaniesData(companiesData)),
                E.map(() => setError('')),
                E.mapLeft(() =>
                  setError(
                    'APIサーバーから取得したデータに問題が発生しています',
                  ),
                ),
              ),
          ),
        ),
      )
    }

    getCompaniesData()
  }, [])

  return <View companies={companiesData} error={error} />
}
