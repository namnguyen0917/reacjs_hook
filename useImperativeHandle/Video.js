import { forwardRef ,useImperativeHandle, useRef } from 'react';
import video1  from './Video/video-1.mp4'


function Video (props,refs){

    const videoRef = useRef()

    //trả về 1 Object
    useImperativeHandle(refs,() => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video1}
            width={280}
        />
    )
}

export default forwardRef(Video);