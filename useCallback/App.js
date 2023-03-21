
import { useCallback, useState } from "react";
import Content from "./Content";



//1. memo() -> Higher Order Component (HOC)
// Memo dùng để xử lý 1 Conponent render không cần thiết (component thay đổi nó mời render).
// Memo sử dụng toán tử === để so sánh

//2. useCallback()
// Reference types
// React memo()
// Sử dụng React(memo) cho component con thì sử dụng useCallback , còn k sử dụng React(memo) thì không cần sử dụng useCallBack

// quy ước đặt tên: hàm trực tiếp xử lý bắt đầu handler , chờ 1 cái hành động xảy ra đặt là on
// trong 1 component có thể nhận nhiều props (kiểu dư kiệu nguyên thủy, kiểu dữ liệu tham chiếu ....)

// 3 khái niệm hay sd
// Hooks
// HOC
// Render props

function App() {

  const [count,setCount] = useState(1)


  const handldeIncrease = useCallback(() =>{
        setCount(pre => pre + 1)
  },[])



  return (

    <div className="App" style={{padding:32}}> 

      <h1>{count}</h1>
        <hr/>
      <Content onIncrease={handldeIncrease} />
      
    </div>
  )

}


export default App;
