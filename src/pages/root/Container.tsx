import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCompanyList } from '../../features/company'
import { fetchIndustryList } from '../../features/industry'
import { Root as View } from './Presentar'

export const Container: React.FC = () => {
  const dispatch = useDispatch()

  // TODO: /に再度アクセスされてもAPIを叩きたくない
  useEffect(() => {
    dispatch(fetchIndustryList())
    dispatch(fetchCompanyList())
  }, [])

  return <View />
}
