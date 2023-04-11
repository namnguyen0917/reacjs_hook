
import { useEffect, useState } from "react";


const tabs = ['posts','comments','todos']

function Content() {

// -------------------- useEffect hook
// 1.useEffect(Callback)/useMemo
// - Gọi callback mỗi khi component re-render
// 2.useEffect(Callback,[])/useMemo
// - Chỉ gọi 1 lần sau khi component mounted
// 3.useEffect(Callback,[deps])/useMemo
// - Callback sẻ được gọi lại mỗi khi denp thay đôi
//------------------
// 1.Callback luôn dc gọi sau khi component mounted
// 2.Clearup function luôn được gọi trướt khi component unmounted
// 3.Clearup function luôn được gọi trướt khi callback được gọi ( trừ unmounted)

// làm như thế nào -> vân đề là gì  -> cách khắc phục

    const [title, setTitle] = useState('')
    const [listPosts,setListPosts] = useState ([])
    const [type,setType] = useState('posts')
    const [show,setShow] = useState(false)
    const [resize,setResize] = useState(window.innerWidth)
    const [countdown,setCountdown] = useState(180)

    useEffect(() =>{

        document.title = type
        // console.log("Mounted")
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then((posts) => {
                setListPosts(posts);
            })
        // console.log('dang o day');
    },[type])


    //ex event scroll    
    useEffect(() =>{

        // const handleScroll = () => {
        //     setShow(window.scrollY >= 200)
        // }

        // window.addEventListener('scroll',handleScroll)
        window.addEventListener('scroll',()=> {return setShow(window.scrollY >= 200)})
        // console.log('add')
        //clearup function
        return () => {
            // console.log('remove')
            // window.removeEventListener('scroll',handleScroll)
            window.removeEventListener('scroll',()=>setShow(window.scrollY >= 200))
        }
    },[])

    //ex resize with
    useEffect(() => {
        window.addEventListener('resize',() =>setResize(window.innerWidth))
        return () =>{
            window.removeEventListener('resize',() =>setResize(window.innerWidth))
        }
    },[])

    useEffect(() => {

        const timerId = setInterval(()=>{
            setCountdown(prev => prev - 1)
        },1000)
        
        return () => clearInterval(timerId)
    },[])

    return (<div>
        <h2>{resize}</h2>

        <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
        />

        {tabs.map((tab,index) => (
            <button 

                style={type === tab ? {backgroundColor:'#333', color:'#fff'} : {}}
                key={index}
                onClick={()=> setType(tab)}
            > 
                {tab} 
            </button>
        ))}

            { show && (<button 
                style={{
                    position:"fixed",
                    bottom:20,
                    right:20,
                }}
            >go to top</button>)}

        1      
                
        <ul>
            {listPosts.map((listPost,index) => (
                <li key={index}> {listPost.title || listPost.name} </li>
            ))}             
        </ul>


    </div>)
// --------------------End useEffect hook
}

export default Content;