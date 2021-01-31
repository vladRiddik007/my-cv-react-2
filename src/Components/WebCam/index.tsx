import { useEffect, useRef } from 'react'
import './style.scss'

const WebCam = () => {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const stripRef = useRef(null)
  const colorRef = useRef(null)

  useEffect(() => {
    getVideo()
  }, [videoRef])

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video: any = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch(err => {
        console.error('error:', err)
      })
  }

  const paintToCanvas = () => {
    let video = videoRef.current
    let photo: any = photoRef.current
    let ctx: any = photo.getContext('2d')

    const width = 320
    const height = 240
    photo.width = width
    photo.height = height

    return setInterval(() => {
      let color: any = colorRef.current

      ctx.drawImage(video, 0, 0, width, height)
      let pixels = ctx.getImageData(0, 0, width, height)

      color.style.backgroundColor = `rgb(${pixels.data[0]},${pixels.data[1]},${pixels.data[2]})`
      color.style.borderColor = `rgb(${pixels.data[0]},${pixels.data[1]},${pixels.data[2]})`
    }, 200)
  }

  const takePhoto = () => {
    let photo: any = photoRef.current
    let strip: any = stripRef.current

    const data = photo.toDataURL('image/jpeg')

    console.warn(data)
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'myWebcam')
    link.innerHTML = `<img src='${data}' alt='thumbnail'/>`
    strip.insertBefore(link, strip.firstChild)
  }

  return (
    <div className="container">
      <div ref={colorRef} className="scene" style={{ display: 'none' }}>
        <img
          className="mountains"
          src="https://i.ibb.co/RjYk1Ps/2817290-eps-1.png"
          alt="user"
        />
      </div>
      <div className="webcam-video">
        <button onClick={() => takePhoto()}>Take a photo</button>
        <video
          onCanPlay={() => paintToCanvas()}
          ref={videoRef}
          className="player"
          style={{ display: 'none' }}
        />
        <canvas ref={photoRef} className="photo" />
        <div className="photo-booth">
          <div ref={stripRef} className="strip" />
        </div>
      </div>
    </div>
  )
}

export default WebCam

//https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb
