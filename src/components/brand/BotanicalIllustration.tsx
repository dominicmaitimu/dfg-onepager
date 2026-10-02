interface BotanicalIllustrationProps {
  className?: string
}

export function BotanicalIllustration({ className }: BotanicalIllustrationProps) {
  return <span className={`botanical ${className ?? ''}`.trim()} aria-hidden="true" />
}
