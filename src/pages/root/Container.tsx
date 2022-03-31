import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCompanyList } from '../../features/company'
import { fetchIndustryList } from '../../features/industry'
import { Root as View } from './Presentar'

export const Container: React.FC = () => {
  const industryResponse = useSelector((state) => state.ange.industryRequest)
  const companyResponse = useSelector((state) => state.ange.companyRequest)
  const financialResponse = useSelector(
    (state) => state.ange.financialStatementRequest,
  )

  const dispatch = useDispatch()

  // TODO: /に再度アクセスされてもAPIを叩きたくない
  useEffect(() => {
    dispatch(fetchIndustryList())
    dispatch(fetchCompanyList())
  }, [])

  return (
    <View
      industryIsLoading={industryResponse.isLoading}
      companyIsLoading={companyResponse.isLoading}
      financialIsLoading={financialResponse.isLoading}
      // FIXME: 終わってる
      error={pipe(
        O.Do,
        O.bind('industryError', () => industryResponse.error),
        O.bind('industryMessage', ({ industryError }) =>
          O.fromNullable(industryError.message),
        ),
        O.bind('companyError', () => companyResponse.error),
        O.bind('companyMessage', ({ companyError }) =>
          O.fromNullable(companyError.message),
        ),
        O.bind('financialError', () => financialResponse.error),
        O.bind('financialMessage', ({ financialError }) =>
          O.fromNullable(financialError.message),
        ),
        O.map(
          ({ companyMessage, industryMessage, financialMessage }) =>
            industryMessage + '\n' + companyMessage + '\n' + financialMessage,
        ),
        O.getOrElse(() => ''),
      )}
    />
  )
}
