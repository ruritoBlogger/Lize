import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import * as T from 'fp-ts/Task'
import * as TE from 'fp-ts/TaskEither'
import * as t from 'io-ts'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Company, CompanyCodec, Industry } from '../../domains'
import { fetchIndustryList } from '../../features/industry'
import { runGetHttpRequest } from '../../functions'
import { Company as View } from './Presentar'

export const Container: React.FC = () => {
  const [companiesData, setCompaniesData] = useState<Company[]>([])
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()

  useEffect(() => {
    const getCompaniesData = async () => {
      await pipe(
        runGetHttpRequest(
          // NOTE: io-ts-typesを使ったcodecを流そうとすると弾かれるんよな
          // eslint-disable-next-line
          // @ts-ignore
          t.array(CompanyCodec),
          'http://localhost:3000/company',
        ),
        TE.fold(
          (error) => T.of(setError(error.message)),
          (data) => T.of(setCompaniesData(data)),
        ),
      )()
    }
    getCompaniesData()

    // TODO: ここで呼び出さない
    dispatch(fetchIndustryList())
  }, [])

  // FIXME: 型周りを何とかする
  // eslint-disable-next-line
  // @ts-ignore
  const industries = useSelector((state) => state.industry.industries)
  return (
    <View
      companies={pipe(
        companiesData,
        A.map((company) => ({
          name: company.name,
          identificationCode: company.identificationCode,
          industryName: pipe(
            A.findFirst(
              (industry: Industry) => industry.id === company.industryID,
            )(industries),
            O.map((industry) => industry.name),
            O.getOrElse(() => '---'),
          ),
        })),
      )}
      error={error}
    />
  )
}
