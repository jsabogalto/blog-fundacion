"use client";
import { useRef } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { toast } from "react-toastify";

//async function from imagekitio
const authenticator = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/upload-auth`);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        const data = await response.json();
        const { signature, expire, token, publicKey } = data;
        return { signature, expire, token, publicKey };
    } catch (error) {
        console.error("Authentication error:", error);
        throw new Error("Authentication request failed");
    }
};
const Upload = ({ children, type, setProgress, setData }) => {
    const ref = useRef(null);

    const onError = (err) => {
        console.log(err);
        toast.error("Image upload failed!");
    };
    const onSuccess = (res) => {
        console.log(res);
        setData(res);
    };
    const onUploadProgress = (progress) => {
        console.log(progress);
        setProgress(Math.round((progress.loaded / progress.total) * 100));
    };

    return (
        <IKContext
            publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL}
            authenticator={authenticator}
        >
            <IKUpload
                useUniqueFileName
                onError={onError}
                onSuccess={onSuccess}
                onUploadProgress={onUploadProgress}
                className="hidden"
                ref={ref}
                accept={`${type}/*`}
            />
            <div className="cursor-pointer" onClick={() => ref.current.click()}>
                {children}
            </div>
        </IKContext>
    );
};

export default Upload;