import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import React from 'react'

import { Industry } from '../../domains'
import { Company as View } from './Presentar'
import { ContainerProps } from './type'

export const Container: React.FC<ContainerProps> = ({
  industries,
  industryError,
  companies,
  companyError,
}) => {
  return (
    <View
      companies={pipe(
        companies,
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
      // FIXME: 終わってる
      error={pipe(
        O.Do,
        O.bind('industryError', () => industryError),
        O.bind('industryMessage', ({ industryError }) =>
          O.fromNullable(industryError.message),
        ),
        O.bind('companyError', () => companyError),
        O.bind('companyMessage', ({ companyError }) =>
          O.fromNullable(companyError.message),
        ),
        O.map(
          ({ companyMessage, industryMessage }) =>
            industryMessage + '\n' + companyMessage,
        ),
        O.getOrElse(() => ''),
      )}
    />
  )
}
