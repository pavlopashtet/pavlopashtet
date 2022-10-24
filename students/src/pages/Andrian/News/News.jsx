import React from "react";
import axios from "axios";

import { useState , useEffect} from "react";

import s from "../News/News.module.css"
// import { useContext } from "react";
// import ThemeContext from "../Context"
import Preloader from "../Preloader/Preloader";
// import { Link } from "react-router-dom";

const News = () => {
const themeMode=true
    const errorRef = React.createRef()
    const [newsData, setNewsData] = useState([])
    const [previousNewsData, setPreviousNewsData] = useState([])
    // const {themeMode,setThemeMode} = useContext(ThemeContext)
    const [isActiveClass, setIsActiveClass] = useState("hiddenItem")
    const [isResponseCome, setIsResponseCome] = useState(true)
    const[newItemsSectionShow,setNewItemsSectionShow]=useState(9)


  window.addEventListener('scroll', function() {
    let scrollHeight=document.documentElement.scrollHeight;
    let clientHeight=document.documentElement.clientHeight;
    let height=scrollHeight-clientHeight;
    let scrollTop=window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop;


    if(height=== Math.floor(scrollTop) ){
      setNewItemsSectionShow(newItemsSectionShow+9)
      // console.log(newItemsSectionShow)
    }

  })



    useEffect(() => {
      const options = {

        method: 'GET',
        url: 'https://spacefo.p.rapidapi.com/articles',
        headers: {
          'X-RapidAPI-Key': 'da8a8db973mshbdcb549202eaa4dp163864jsne9ad78339bc8',
          'X-RapidAPI-Host': 'spacefo.p.rapidapi.com'
        }
      };

      axios.request(options)
        .then(function (response) {
          setPreviousNewsData(response.data)
          setNewsData(response.data)
// console.log(response.data)
          if (errorRef.current) {
            errorRef.current.classList.remove(`${s.errorHidden}`)
            errorRef.current.classList.add(`${s.errorHidden}`)
          }
          setIsResponseCome(false)

        }).catch(function (error) {

          if (errorRef.current) {
            errorRef.current.classList.remove(`${s.errorHidden}`)
            errorRef.current.classList.add(`${s.errorShow}`)
          }
        })
    }, [])


    function searchNews(e) {
      let filterSearch = e.target.value.toLowerCase()
      setNewsData(previousNewsData.filter(el => el.title.toLowerCase().includes(filterSearch)))
    }

    function seeMoreInNewsItems(e) {
      e.preventDefault()
      e.stopPropagation()
if(!themeMode){
  if (isActiveClass === "hiddenItem") {
    setIsActiveClass("activeItemDarkTheme")
    e.currentTarget.parentNode.firstChild.classList.remove(`${s.hiddenItem}`);
    e.currentTarget.parentNode.firstChild.classList.add(`${s.activeItemDarkTheme}`);
    document.getElementsByClassName("wrapper")[0].addEventListener("click",function(){
      if( document.getElementsByClassName(`${s.activeItemDarkTheme}`)[0]){
        setIsActiveClass("hiddenItem")
        document.getElementsByClassName(`${s.activeItemDarkTheme}`)[0].classList.add(`${s.hiddenItem}`);
         document.getElementsByClassName(`${s.activeItemDarkTheme}`)[0].classList.remove(`${s.activeItemDarkTheme}`);
      }
    })
  
  } else {
    setIsActiveClass("hiddenItem")
    e.currentTarget.parentNode.classList.remove(`${s.activeItemDarkTheme}`);
    e.currentTarget.parentNode.classList.add(`${s.hiddenItem}`);
  }
}
   else{
    if (isActiveClass === "hiddenItem") {
      console.log(e.currentTarget.parentNode.firstChild)
      setIsActiveClass("activeItem")
      e.currentTarget.parentNode.firstChild.classList.remove(`${s.hiddenItem}`);
      e.currentTarget.parentNode.firstChild.classList.add(`${s.activeItem}`);
      document.getElementsByClassName("wrapper")[0].addEventListener("click",function(){
        if( document.getElementsByClassName(`${s.activeItem}`)[0]){
          setIsActiveClass("hiddenItem")
          document.getElementsByClassName(`${s.activeItem}`)[0].classList.add(`${s.hiddenItem}`);
           document.getElementsByClassName(`${s.activeItem}`)[0].classList.remove(`${s.activeItem}`);
        }
  
        
      })
    } else {
     
      setIsActiveClass("hiddenItem")
      e.currentTarget.parentNode.classList.remove(`${s.activeItem}`);
      e.currentTarget.parentNode.classList.add(`${s.hiddenItem}`);
     
    }
    
   } 

    }


return(
    <div  className={s.wrapper +' '+(themeMode? s.news_light:s.news_dark)} >


    <input type="text" placeholder="find"  style={{color:"black"}} onChange={(e)=>searchNews(e)} />
<Preloader isResponseCome={isResponseCome} />

<div  ref={errorRef} className={s.errorHidden} >internet problem...</div>

  <ul className={s.ulMy} > 
    {newsData.filter((el,index)=>index<newItemsSectionShow).map(el =><li   key={el.title} > 

    
   <div className={ s.hiddenItem}   >
   <div className={s.title} >{el.title}</div> 
   <br />
   <div> {el.description}</div>
   <br />

   {/* <Link to={el.link}>{el.link}</Link> */}
   

   <br />
   <div> {el.time}</div>
   <br />
   <div> {el.author}</div>
   <br />
   <a target="_blank" href={el.link}>{el.link}</a>
   <br />
   <img  src= {el.image.src} className={s.imgNewsItemActive} alt={el.image.alt}/>
<a onClick={(e)=>seeMoreInNewsItems(e)}  href="" >close</a>


   </div> 

    <div className={s.title} >{el.title}</div> 
    <br/>
    {el.time} <br/>


<a onClick={(e)=>seeMoreInNewsItems(e)}  href="" >see more...</a>
 <img className={s.imgNewsItem}  src= {el.image.src}alt={el.image.alt} />
 
     </li>
     )}
    </ul>
    </div> 
)
}


export default News;


