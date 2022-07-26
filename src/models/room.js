import { color } from '@mui/system'
import TWall from './wall'
import Wallpaper from './wallpaper'


const TRoom = (props) => {
  const wallThickness = props.wallThickness
  const wallpaperThickness = props.wallpaperThickness
  const dimension = props.dimension //a: left, b: right, h: height
  const wallColor = props.wallColor
  return (
    <group position={props.position} >
      {/* left */}
      <TWall position={[-(wallThickness / 2) - wallpaperThickness, dimension.h / 2 - wallThickness / 2 - wallpaperThickness / 2, dimension.b / 2]} rotation={[0, 0, 0]} scale={[wallThickness, dimension.h + wallThickness + wallpaperThickness, dimension.b]} color={wallColor.top} />
      <Wallpaper position={[-(wallpaperThickness / 2), dimension.h / 2 - wallThickness / 2 - wallpaperThickness / 2, dimension.b / 2]} rotation={[0, 0, 0]} scale={[wallpaperThickness, dimension.h + wallThickness + wallpaperThickness, dimension.b]}
        map={props.sideWPTextureL} color={wallColor.swL} />
      {/* right */}
      <TWall position={[dimension.a / 2 - wallThickness / 2 - wallpaperThickness / 2, dimension.h / 2 - wallThickness / 2 - wallpaperThickness / 2, -wallThickness / 2 - wallpaperThickness]} rotation={[0, Math.PI / 2, 0]} scale={[wallThickness, dimension.h + wallThickness + wallpaperThickness, dimension.a + wallThickness + wallpaperThickness]} color={wallColor.top} />
      <Wallpaper position={[dimension.a / 2 - wallThickness / 2 - wallpaperThickness / 2, dimension.h / 2 - wallThickness / 2 - wallpaperThickness / 2, -wallpaperThickness / 2]} rotation={[0, Math.PI / 2, 0]} scale={[wallpaperThickness, dimension.h + wallThickness + wallpaperThickness, dimension.a + wallThickness + wallpaperThickness]}
        map={props.sideWPTextureR} color={wallColor.swR} />
      {/* bottom */}
      <TWall position={[dimension.a / 2, -wallThickness / 2 - wallpaperThickness, dimension.b / 2]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[wallThickness, dimension.b, dimension.a]} color={wallColor.bottom} />
      <Wallpaper position={[dimension.a / 2, -wallpaperThickness / 2, dimension.b / 2]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[wallpaperThickness, dimension.b, dimension.a]}
        map={props.bottomWPTexture} color={wallColor.bottom} />
    </group>
  )
}

export default TRoom