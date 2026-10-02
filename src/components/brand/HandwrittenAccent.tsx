interface HandwrittenAccentProps {
  text: string
}

export function HandwrittenAccent({ text }: HandwrittenAccentProps) {
  return <span className="handwritten">{text}</span>
}
