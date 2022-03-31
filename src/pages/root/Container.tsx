import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import React from 'react'

import { Root as View } from './Presentar'
import { ContainerProps } from './type'

export const Container: React.FC<ContainerProps> = ({
  industryError,
  industryIsLoading,
  companyError,
  companyIsLoading,
  financialError,
  financialIsLoading,
}) => {
  return (
    <View
      industryIsLoading={industryIsLoading}
      companyIsLoading={companyIsLoading}
      financialIsLoading={financialIsLoading}
      // FIXME: 終わってる
      // FIXME: bindする値と引数で名前の衝突が起こるの何とかしたいな
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
        O.bind('financialError', () => financialError),
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
