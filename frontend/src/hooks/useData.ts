import { useEffect, useState } from 'react'

type loaderType<T, A> = (arg: A) => Promise<T | undefined>
type UseDataContent<T, A> = [
  {
    error?: string
    loading: boolean
    data?: T
  },
  (arg?: A) => Promise<void>
]
export const useData = <T, A>(loader: loaderType<T, A>, initialArg?: A): UseDataContent<T, A> => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T>()

  const load = async (arg: A) => {
    setLoading(true)
    setError(undefined)
    try {
      const result = await loader(arg)
      setData(result)
    } catch (e: any) {
      setError(e?.response?.Title ?? e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    initialArg && load(initialArg)
  }, [initialArg])

  const reload = async (args?: A) => {
    if (args && typeof args !== 'object') load(args)
    initialArg && load(initialArg)
  }

  return [{ error, loading, data }, reload]
}
