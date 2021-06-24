import React from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
function MessageSender() {

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <from>
                    <input type="text" placeholder={"What's on yout mind"} />

                    <input placeholder="imageURL (Optional)" />

                    <button onClick={handleSubmit} type="submit" >
                        hidden submint
                    </button>
                </from>


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
