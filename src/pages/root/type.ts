import { SerializedError } from '@reduxjs/toolkit'
import * as O from 'fp-ts/Option'

export type PresentarProps = {
  industryIsLoading: boolean
  companyIsLoading: boolean
  financialIsLoading: boolean
  error: string
}

export type ContainerProps = {
  industryError: O.Option<SerializedError>
  industryIsLoading: boolean
  companyError: O.Option<SerializedError>
  companyIsLoading: boolean
  financialError: O.Option<SerializedError>
  financialIsLoading: boolean
}
