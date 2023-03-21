
import {  useEffect, useMemo, useRef, useState } from "react";

// useMemo() hạn chế 1 tác vụ re-render không cần thiết -> trả về 1 kq
// Tính chất giống như useEffect và useCallBack , chỉ trả về giá trị 1 lần
// khi [depensi] thay đổi thì reload lại

function App() {

  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [products,setProducts] = useState([])

  const nameRef = useRef()

  const hanlderAddProduct = () => {

    setProducts([...products,{
      name:name,
      price:+price
    }])

    nameRef.current.focus()
    setName('')
    setPrice('')

  }

  
  function handlerDelete(index) {
    const newArray = products.filter((item) => (item !== products[index]))
    setProducts(newArray)
  }

  const Totals = useMemo(() => {

      const result = products.reduce((tong,pro) => {
          console.log("Tính toán lại")
          return tong + pro.price
      },0)

      return result

  },[products])


  // console.log(products)

  return (

    <div className="App" style={{padding:32}}> 
        <input 
          ref={nameRef}
          value={name}
          placeholder="Nhap Name:"
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <input 
           value={price}
           placeholder="Nhap Price:"
           onChange={e => setPrice(e.target.value)}
        />
        <br/>
        <button onClick={hanlderAddProduct}>Add</button>

        <br/>
        <span>Total:{Totals} </span>
        <hr/>      
        <ul>
          {products.map((product,index) =>{

            return (<li key={index} onClick={() => handlerDelete(index)} >{product.name}  - {product.price}</li>)
          } )}
          
        </ul>
    </div>
  )

}


export default App;
