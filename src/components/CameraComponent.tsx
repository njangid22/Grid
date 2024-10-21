import React, { useRef, useState, useEffect } from 'react';
import { Camera, StopCircle } from 'lucide-react';

interface CameraComponentProps {
  onCapture: (imageSrc: string) => void;
}

const CameraComponent: React.FC<CameraComponentProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    return () => {
      if (isStreaming) {
        stopCamera();
      }
    };
  }, [isStreaming]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsStreaming(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
      const imageSrc = canvas.toDataURL('image/jpeg');
      onCapture(imageSrc);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={`w-full h-64 bg-gray-200 rounded-lg ${isStreaming ? '' : 'hidden'}`}
      />
      {!isStreaming && (
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <Camera className="w-16 h-16 text-gray-400" />
        </div>
      )}
      <div className="mt-4 flex justify-center">
        {!isStreaming ? (
          <button
            onClick={startCamera}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
          >
            <Camera className="w-5 h-5 mr-2" />
            Start Camera
          </button>
        ) : (
          <>
            <button
              onClick={captureImage}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center mr-2"
            >
              <Camera className="w-5 h-5 mr-2" />
              Capture
            </button>
            <button
              onClick={stopCamera}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center"
            >
              <StopCircle className="w-5 h-5 mr-2" />
              Stop
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraComponent;