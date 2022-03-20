import axios from 'axios'
import * as E from 'fp-ts/Either'
import { flow, pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as t from 'io-ts'

/**
 * 受け取ったデータを指定された型に一致しているかどうか判断する
 * @param codec: 指定した型
 * @returns TaskEither型のオブジェクト、一致していない場合はError, 一致している場合はその型にデコード済みのデータ
 */
function decodeWith<T>(
  codec: t.Type<T>,
): (i: unknown) => TE.TaskEither<Error, T> {
  return flow(
    codec.decode,
    E.mapLeft(
      () => new Error('APIサーバーから取得したデータに問題が発生しています'),
    ),
    TE.fromEither,
  )
}

/**
 * axiosを用いたget requestを発行しTaskEitherを返す
 * Either.leftの場合はget requestに失敗した旨が、Either.rightの場合はresponseが格納されている
 * @param codec: responseの型情報
 * @param url: get requestを投げる先
 * @returns: 非同期でget requestを飛ばしてる物体(実行が終了するとError | Tが返ってくる)
 */
export function runGetHttpRequest<T>(
  codec: t.Type<T>,
  url: string,
): TE.TaskEither<Error, T> {
  return pipe(
    TE.tryCatch(
      () =>
        axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      (reason) => new Error(`${reason}`),
    ),
    TE.map((response) => response.data),
    TE.chain(decodeWith(codec)),
  )
}
