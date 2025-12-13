import React, { useEffect, useRef } from 'react'

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars: Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      twinkle: number
    }> = []

    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      life: number
      maxLife: number
    }> = []

    // Create regular stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01
      })
    }

    // Function to create a new shooting star
    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left
      let x, y, angle

      switch (side) {
        case 0: // From top
          x = Math.random() * canvas.width
          y = -50
          angle = Math.random() * Math.PI / 3 + Math.PI / 6 // 30-60 degrees downward
          break
        case 1: // From right
          x = canvas.width + 50
          y = Math.random() * canvas.height
          angle = Math.random() * Math.PI / 3 + 2 * Math.PI / 3 // 120-150 degrees
          break
        case 2: // From bottom
          x = Math.random() * canvas.width
          y = canvas.height + 50
          angle = Math.random() * Math.PI / 3 + 4 * Math.PI / 3 // 240-270 degrees
          break
        default: // From left
          x = -50
          y = Math.random() * canvas.height
          angle = Math.random() * Math.PI / 6 - Math.PI / 12 // -15 to 15 degrees
          break
      }

      shootingStars.push({
        x,
        y,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40
      })
    }

    // Create initial shooting stars
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createShootingStar(), Math.random() * 5000)
    }

    let animationId: number
    let lastShootingStarTime = 0

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new shooting stars periodically
      if (currentTime - lastShootingStarTime > 3000 + Math.random() * 4000) {
        createShootingStar()
        lastShootingStarTime = currentTime
      }

      // Update and draw regular stars
      stars.forEach(star => {
        // Update star position
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Update twinkle effect
        star.opacity += star.twinkle
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkle = -star.twinkle
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity * 0.3})`
          ctx.fill()
        }
      })

      // Update and draw shooting stars
      shootingStars.forEach((shootingStar, index) => {
        // Update position
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
        shootingStar.life++

        // Calculate opacity based on life
        const lifeRatio = shootingStar.life / shootingStar.maxLife
        if (lifeRatio < 0.2) {
          shootingStar.opacity = lifeRatio / 0.2
        } else if (lifeRatio > 0.8) {
          shootingStar.opacity = (1 - lifeRatio) / 0.2
        } else {
          shootingStar.opacity = 1
        }

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        )
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`)
        gradient.addColorStop(0.3, `rgba(147, 197, 253, ${shootingStar.opacity * 0.8})`)
        gradient.addColorStop(0.6, `rgba(59, 130, 246, ${shootingStar.opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.beginPath()
        ctx.moveTo(shootingStar.x, shootingStar.y)
        ctx.lineTo(
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.stroke()

        // Add bright head
        ctx.beginPath()
        ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`
        ctx.fill()

        // Add glow around head
        ctx.beginPath()
        ctx.arc(shootingStar.x, shootingStar.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 197, 253, ${shootingStar.opacity * 0.5})`
        ctx.fill()

        // Remove shooting star if it's off screen or life is over
        if (
          shootingStar.life >= shootingStar.maxLife ||
          shootingStar.x < -100 ||
          shootingStar.x > canvas.width + 100 ||
          shootingStar.y < -100 ||
          shootingStar.y > canvas.height + 100
        ) {
          shootingStars.splice(index, 1)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default StarField