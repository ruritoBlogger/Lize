import { SerializedError } from '@reduxjs/toolkit'
import * as O from 'fp-ts/Option'

import { Company, Industry } from '../../domains/'

export type PresentarProps = {
  companies: {
    name: string
    industryName: string
    identificationCode: number
  }[]
  error: string
}

export type ContainerProps = {
  industries: Industry[]
  industryError: O.Option<SerializedError>
  companies: Company[]
  companyError: O.Option<SerializedError>
}
