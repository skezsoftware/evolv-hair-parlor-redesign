import { useState } from 'react'
import { salon } from '../data/salon'

export default function SafeImage({
  src,
  mobileSrc,
  alt,
  className = '',
  hover = false,
  priority = false,
  objectPosition,
}) {
  const [failed, setFailed] = useState(!src)

  const imgProps = {
    alt,
    onError: () => setFailed(true),
    loading: priority ? 'eager' : 'lazy',
    style: objectPosition ? { objectPosition } : undefined,
    ...(priority ? { fetchPriority: 'high' } : {}),
  }

  return (
    <div className={`safe-image ${hover ? 'safe-image--hover' : ''} ${className}`.trim()}>
      {failed ? (
        <div className="safe-image__fallback" role="img" aria-label={alt}>
          {salon.shortName}
        </div>
      ) : mobileSrc ? (
        <picture>
          <source media="(max-width: 960px)" srcSet={mobileSrc} />
          <img src={src} {...imgProps} />
        </picture>
      ) : (
        <img src={src} {...imgProps} />
      )}
    </div>
  )
}
