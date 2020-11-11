import React, {useEffect} from 'react';



const Audio = () => {
useEffect(() => {
    playAudio()

},[])
        function playAudio() {
          const audioEl = document.getElementsByClassName("audio-element")[0]
          audioEl.play()
        }
          return (
            <div>
              {/* <button onClick={playAudio}>
                <span>Play Audio</span>
              </button> */}
              <audio className="audio-element" autoPlay>
                <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
              </audio>
            </div>
          )
        }
      
export default Audio;