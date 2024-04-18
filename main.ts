export function chartsAnywhere (canvas: HTMLCanvasElement, {
  type = 'bar',
  y = [1, 2, 3, 4, 5],
  x = ['A', 'B', 'C', 'D', 'E']
} = {}) {
  if (!canvas) throw new Error('Canvas element not found')
    
  // Declare constants
  const WIDTH = canvas.width
  const HEIGHT = canvas.height
  const MAX = Math.max(...y)
  const Y_DIVISIONS_SIZE = HEIGHT / y.length

  // Clear canvas
  const ctx = canvas!.getContext('2d')
  ctx!.fillStyle = '#f2f2f2'
  ctx!.fillRect(0, 0, WIDTH, HEIGHT)



  y.forEach((value, index) => {
    ctx!.font = 'bold 16px serif'
    ctx!.fillStyle = '#424242'
    ctx!.fillText(value.toString(), 10, (index + 1) * Y_DIVISIONS_SIZE)
  })


  return canvas
}