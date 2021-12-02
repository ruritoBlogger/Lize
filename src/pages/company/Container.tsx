import axios from 'axios'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as t from 'io-ts'
import React, { useEffect, useState } from 'react'

import { Company, CompanyCodec } from '../../domains'
import { Company as View } from './Presentar'

export const Container: React.FC = () => {
  const [companiesData, setCompaniesData] = useState<Company[]>([])

  useEffect(() => {
    const getCompaniesData = async () => {
      // TODO: urlの管理方法のリファクタリング
      const result = await axios('http://127.0.0.1:8080/company')
      // TODO: axiosの部分もpipeで繋げたい
      setCompaniesData(
        pipe(
          O.fromEither(t.array(CompanyCodec).decode(result.data)),
          O.fold(
            () => [],
            (responseData) => responseData,
          ),
        ),
      )
    }

    getCompaniesData()
  }, [])

  return <View companies={companiesData} />
}
