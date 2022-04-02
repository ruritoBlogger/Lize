import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  runGenerateCompany,
  runGenerateFinancialStatement,
  runGenerateIndustry,
} from '../../features/ange'
import { fetchCompanyList } from '../../features/company'
import { fetchIndustryList } from '../../features/industry'
import Presentar from './Presentar'

const Container: React.FC = () => {
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

  const industryRequestDidSend = () => {
    dispatch(runGenerateIndustry())
  }

  const companyRequestDidSend = () => {
    dispatch(runGenerateCompany())
  }

  const financialRequestDidSend = () => {
    dispatch(runGenerateFinancialStatement())
  }
  const industryButtonOnClick = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    industryRequestDidSend()
  }

  const companyButtonOnClick = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    companyRequestDidSend()
  }

  const financialButtonOnClick = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    financialRequestDidSend()
  }

  return (
    <Presentar
      industryIsLoading={industryResponse.isLoading}
      industryButtonOnClick={industryButtonOnClick}
      companyIsLoading={companyResponse.isLoading}
      companyButtonOnClick={companyButtonOnClick}
      financialIsLoading={financialResponse.isLoading}
      financialButtonOnClick={financialButtonOnClick}
      // FIXME: 終わってる
      // FIXME: bindする値と引数で名前の衝突が起こるの何とかしたいな
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

export default Container
