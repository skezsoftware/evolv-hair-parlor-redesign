import { useEffect } from 'react'
import { salon } from '../data/salon'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${salon.name}` : salon.name
  }, [title])
}
