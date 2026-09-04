import { useState } from 'react'
import { salon } from '../data/salon'

export default function SafeImage({
  src,
  alt,
  className = '',
  hover = false,
  priority = false,
}) {
  const [failed, setFailed] = useState(!src)

  return (
    <div className={`safe-image ${hover ? 'safe-image--hover' : ''} ${className}`.trim()}>
      {failed ? (
        <div className="safe-image__fallback" role="img" aria-label={alt}>
          {salon.shortName}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading={priority ? 'eager' : 'lazy'}
          {...(priority ? { fetchPriority: 'high' } : {})}
        />
      )}
    </div>
  )
}
