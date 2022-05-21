import React from "react";



export default function Meme() {

    const [meme, setmeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allmeme,setAllMemes] = React.useState()


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    

    function getImageUrl() {
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        const url=allmeme[randomNumber].url;
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }
    
    function changeText(event) {
        const {name,value}=event.target;
        setmeme(prevMeme => {
            return(
                {...prevMeme,
                [name]:value,
            }
            )
        })
    }

    return (

        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={changeText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeText}
                />
                <button
                    className="form--button"
                    onClick={getImageUrl}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>


    )
}