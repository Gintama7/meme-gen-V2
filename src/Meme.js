import React, { useState,useEffect } from 'react';
import './Meme.css';
import Draggable from 'react-draggable';
import MemeText from './MemeText';


function Meme() {
    // const [memeImage,setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText :"",
        bottomText :"",
        thirdText:"",
        fourthText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });
    
    const [show,setShow] = useState(false);

    const textHandler =(event) =>{
        const {name,value} = event.target;
        setMeme(prevMeme => {
            return { ...prevMeme,
                [name]:value
            }
        })
    }

    const [allMemes, setAllMemes] = useState([]);
    
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data =>setAllMemes(data.data.memes))
    },[])
    
   

    const getMemeImage = (e)=>{
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        console.log(url);
        setMeme(prevMeme => ({
            ...prevMeme,
            topText :"",
            bottomText :"",
            thirdText:"",
            fourthText:"", 
            randomImage: url
        }));
    }

const extraTextHandler =(e)=>{
    e.preventDefault();
    setShow(true);
}

    return (
        
        <div className="meme">
            <form action="">
                <input
                name="topText"
                 type="text" 
                 className="meme__inputs" 
                 placeholder="Top Text" 
                 onChange={textHandler}
                 value={meme.topText} 
                 />
                <input 
                name="bottomText"
                 type="text"
                 className="meme__inputs"
                 placeholder="Bottom Text"
                 onChange={textHandler}
                 value={meme.bottomText}
                 />
                 
                <button onClick={getMemeImage} className="meme__button">Get a new meme image  🖼</button>
           <div className="meme__wrap">
            <img className="meme__image" src={meme.randomImage} alt="" />

            <button onClick={extraTextHandler} className="text__button">Add more text</button>
            { show && (<><input
                name="thirdText"
                 type="text" 
                 className="meme__inputs" 
                 placeholder="Third Text" 
                 onChange={textHandler}
                 value={meme.thirdText} 
                 />
                <input 
                name="fourthText"
                 type="text"
                 className="meme__inputs"
                 placeholder="Fourth Text"
                 onChange={textHandler}
                 value={meme.fourthText}
                 /></>)}
           
            <MemeText text={meme.topText}/>
             <MemeText text={meme.bottomText}/>
             <MemeText text={meme.thirdText}/>
             <MemeText text={meme.fourthText}/>
           
            </div>            
             
           </form>  
           
                    
        </div>
    )
}

export default Meme

//WITHOUT DRAGGABLE
 {/* <h2 className="meme--text top" >{meme.topText}</h2> */}
 {/* <h2 className="meme--text bottom">{meme.bottomText}</h2> */}
           