'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const ringX = useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.5 })
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.5 })

  useEffect(() => {
    setMounted(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const checkHover = (e: MouseEvent) => {
      const target = e.target as Element
      const hoverable = target.closest('a, button, [data-hoverable]')
      setIsHovering(!!hoverable)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', checkHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--ocre)',
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border"
        animate={{
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          borderColor: isHovering ? 'var(--ocre)' : 'rgba(201,149,74,0.5)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
