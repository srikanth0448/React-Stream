import React from 'react'
import Webcam from 'react-webcam';

const Stream = (props) => {
    const {
        capturing,
        recordedChunks,
        setRef,
        startStreamhandler,
        stopStreamhandler,
        downloadVideo
    } = props;
    return (
	    <div className="row justify-content-md-center align-items-center mt-5">
	        <div className="col-lg-6">
				<Webcam className='abc' audio={false} ref={setRef} /> 
				<div className='row'>
					{
		                 capturing ? (
		                    <button className='button btn btn-danger' onClick={stopStreamhandler}>Stop</button>
		                ) : 
		                (
		                    <button className='button btn btn-primary' onClick={startStreamhandler}>Start</button>
		                )
		            } 
 				</div>
		            
	            {
	                 recordedChunks.length > 0 && (
	                    <button className='button btn btn-success' onClick={downloadVideo}>Download</button>
	                )
	            }  
		           
			</div>
		</div>
)
}

export default Stream;