import { SerializedError } from '@reduxjs/toolkit'
import * as O from 'fp-ts/Option'
import React from 'react'

export type PresentarProps = {
  industryIsLoading: boolean
  industryButtonOnClick: (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  companyIsLoading: boolean
  companyButtonOnClick: (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  financialIsLoading: boolean
  financialButtonOnClick: (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  error: string
}

export type ContainerProps = {
  industryError: O.Option<SerializedError>
  industryRequestDidSend: () => void
  industryIsLoading: boolean
  companyError: O.Option<SerializedError>
  companyRequestDidSend: () => void
  companyIsLoading: boolean
  financialError: O.Option<SerializedError>
  financialRequestDidSend: () => void
  financialIsLoading: boolean
}
