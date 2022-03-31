import React from 'react'
import { useSelector } from 'react-redux'

import { Container } from './Container'

export const ReduxWrapper: React.FC = () => {
  const industries = useSelector((state) => state.industry.industries)
  const companies = useSelector((state) => state.company.companies)
  const industryError = useSelector((state) => state.industry.error)
  const companyError = useSelector((state) => state.company.error)

  return Container({ industries, industryError, companies, companyError })
}
