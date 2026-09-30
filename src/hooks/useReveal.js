import { useEffect, useRef } from 'react'

// Adds the fade-up-blur reveal to any element when it scrolls into view.
// Usage: const ref = useReveal(); <div ref={ref} className="rv">...</div>
export default function useReveal(delayStep = 70) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const siblings = Array.prototype.indexOf.call(el.parentNode.children, el)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${siblings * delayStep}ms`
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delayStep])

  return ref
}
