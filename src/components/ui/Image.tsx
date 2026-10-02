interface ImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export function Image({ src, alt, className, loading = 'lazy' }: ImageProps) {
  return <img className={className} src={src} alt={alt} loading={loading} decoding="async" />
}
