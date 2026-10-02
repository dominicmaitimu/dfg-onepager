import { useEffect } from 'react'

interface UseHorizontalScrollOptions {
  enabled: boolean
  keyboardStep?: number
}

export function useHorizontalScroll(
  pageRef: React.RefObject<HTMLElement | null>,
  trackRef: React.RefObject<HTMLElement | null>,
  { enabled, keyboardStep = 360 }: UseHorizontalScrollOptions,
): void {
  useEffect(() => {
    const page = pageRef.current
    const track = trackRef.current
    if (!page || !track || !enabled) {
      return
    }

    const syncPageHeight = () => {
      const horizontalRange = Math.max(0, track.scrollWidth - window.innerWidth)
      page.style.height = `${horizontalRange + window.innerHeight}px`
    }

    const syncHorizontalScroll = () => {
      const horizontalRange = Math.max(0, track.scrollWidth - window.innerWidth)
      const horizontalPosition = Math.min(horizontalRange, Math.max(0, window.scrollY))
      track.style.transform = `translate3d(${-horizontalPosition}px, 0, 0)`
    }

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY === 0) {
        return
      }

      const maxScroll = Math.max(0, page.scrollHeight - window.innerHeight)
      const nextScroll = Math.min(maxScroll, Math.max(0, window.scrollY + event.deltaY))

      if (nextScroll !== window.scrollY) {
        event.preventDefault()
        window.scrollTo({ top: nextScroll, behavior: 'auto' })
      }
    }

    const scrollToHorizontal = (amount: number) => {
      window.scrollTo({ top: Math.max(0, window.scrollY + amount), behavior: 'smooth' })
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        scrollToHorizontal(keyboardStep)
        event.preventDefault()
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        scrollToHorizontal(-keyboardStep)
        event.preventDefault()
      }
    }

    syncPageHeight()
    syncHorizontalScroll()
    const resizeObserver = new ResizeObserver(syncPageHeight)
    resizeObserver.observe(track)
    window.addEventListener('scroll', syncHorizontalScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    window.addEventListener('resize', syncPageHeight)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('scroll', syncHorizontalScroll)
      window.removeEventListener('wheel', onWheel, true)
      window.removeEventListener('resize', syncPageHeight)
      window.removeEventListener('keydown', onKeyDown)
      resizeObserver.disconnect()
      page.style.height = ''
    }
  }, [enabled, keyboardStep, pageRef, trackRef])
}
