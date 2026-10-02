interface LogoProps {
  alt: string
}

export function Logo({ alt }: LogoProps) {
  return (
    <div className="logo-wrap">
      <img className="logo" src="/brand/logo.svg" alt={alt} />
    </div>
  )
}
