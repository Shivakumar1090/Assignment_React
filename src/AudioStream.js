import React from 'react'
import './AudioStream.css'
import {useReactMediaRecorder} from 'react-media-recorder'

function AudioStream() {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio:true})
    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} autoplay loop controls></video>
        </div>
    )
}

export default AudioStream