import React,{useState}from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
function MessageSender() {

    const[input, setInput] = useState("");
    const[imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className="messageSender_input" placeholder={"What's on yout mind"} />

                    <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="imageURL (Optional)" />

                    <button onClick={handleSubmit} type="submit" >
                        hidden submint
                    </button>
                </form>


            </div>

            <div className=" messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{color : "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibrary style={{color : "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticon style={{color : "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
