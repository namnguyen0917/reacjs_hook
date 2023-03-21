import { useEffect, useRef } from 'react';
import Video from "./Video";

// Bạn chỉ nên sử dụng ref cho các hành vi bắt buộc mà bạn không thể diễn đạt dưới dạng đạo cụ:
// ví dụ: cuộn tới một nút, tập trung vào một nút, kích hoạt hoạt ảnh, chọn văn bản

// function compomnent mặc định là không có ref
// ->không dc truyền trực tiếp ref qua props (<VD ref={ref..}>).
// muốn truyền dc ref qua props thì sử dụng func (import {forwordref} form 'react')
//  -> export default forwordref(App) -> khi đó prop truyền qua là đối số thứ 2 (...,ref)

//useImperativeHandle(tham số trả về cuối cùng , phương thức:callback) -> tính đống gối , chỉ trả về method

function App() {

  const refVideo = useRef()

  useEffect(()=>{
    console.log(" in file video",refVideo.current)
  })

  const handlePlay = () => {
    refVideo.current.play()
  }

  const handlePause = () => {
    refVideo.current.pause()
  }

  return (

    <div className="App" style={{padding:32}}> 

        <Video ref={refVideo} />
        <hr/> 
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
    </div>
  )

}


export default App;
