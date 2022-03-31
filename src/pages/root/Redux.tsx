import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCompanyList } from '../../features/company'
import { fetchIndustryList } from '../../features/industry'
import { Container } from './Container'

export const ReduxWrapper: React.FC = () => {
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

  return Container({
    industryError: industryResponse.error,
    industryIsLoading: industryResponse.isLoading,
    companyError: companyResponse.error,
    companyIsLoading: companyResponse.isLoading,
    financialError: financialResponse.error,
    financialIsLoading: financialResponse.isLoading,
  })
}
