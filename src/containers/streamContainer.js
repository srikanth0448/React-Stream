import React from 'react';
import Stream from '../components/stream'; 

let options = { mimeType: "video/webm; codecs=vp9" };
let mediaRecorderRef;

class StreamContainer extends React.Component {

	state = { 
		capturing: false, 
		recordedChunks: [], 
		webcamRef: '',
        videodata:[] 
 	}

 	setRef = webcamRef => { 
        this.setState({ webcamRef: webcamRef });
    };

    startStreamhandler = (webcam) => {
        this.setState({ capturing: true });
        mediaRecorderRef = new MediaRecorder(this.state.webcamRef.stream, options);
        mediaRecorderRef.ondataavailable = this.handleDataAvailable;
        mediaRecorderRef.start();
    };

    handleDataAvailable = (event) => {
        const recordedChunks =  this.state.recordedChunks
        if (event.data.size > 0) {
         recordedChunks.push(event.data)
            this.setState({ recordedChunks });
        } 
    }

    stopStreamhandler = () => {
        mediaRecorderRef.stop();
        this.setState({ capturing: false });
    };

    downloadVideo = () => {
        var blob = new Blob(this.state.recordedChunks, options);
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        let filename = "video_" + new Date().getTime() + ".webm";
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        this.setState({
           recordedChunks:[] 
        }); 
    }

	render() {
        console.log('data', this.state.videodata)
		const {capturing, recordedChunks} = this.state;
		return (
			<Stream 
				capturing={capturing}
				recordedChunks={recordedChunks}
				setRef={this.setRef} 
				startStreamhandler={this.startStreamhandler} 
				stopStreamhandler={this.stopStreamhandler}
				downloadVideo={this.downloadVideo} 
			/>
		);
	}
}


export default StreamContainer;