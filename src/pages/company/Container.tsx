import { pipe } from 'fp-ts/lib/function'
import * as T from 'fp-ts/Task'
import * as TE from 'fp-ts/TaskEither'
import * as t from 'io-ts'
import React, { useEffect, useState } from 'react'

import { Company, CompanyCodec } from '../../domains'
import { runGetHttpRequest } from '../../functions'
import { Company as View } from './Presentar'

export const Container: React.FC = () => {
  const [companiesData, setCompaniesData] = useState<Company[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getCompaniesData = async () => {
      pipe(
        runGetHttpRequest(
          t.array(CompanyCodec),
          'http://127.0.0.1:8080/company',
        ),
        TE.fold(
          (error) => T.of(setError(error.message)),
          (data) => T.of(setCompaniesData(data)),
        ),
      )
    }
    getCompaniesData()
  }, [])

  return <View companies={companiesData} error={error} />
}
