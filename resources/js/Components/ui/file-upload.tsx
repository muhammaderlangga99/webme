import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

type FileUploadProps = {
  onChange: (file: File | null) => void;
  className?: string;
};

const FileUpload: React.FC<FileUploadProps> = ({ onChange, className }) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      onChange(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col gap-y-3 cursor-pointer overflow-hidden justify-center items-center bg-zinc-100 dark:bg-zinc-900 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg ${className}`}
    >
      <input {...getInputProps()} className="sr-only" />
      {filePreview ? (
        <img src={filePreview} alt="preview" className="w-full h-full object-cover" />
      ) : (
        <div className="text-center text-zinc-500">
          {isDragActive ? (
            <span>Drop the files here ...</span>
          ) : (
            <>
              <p className='text-zinc-500 text-sm'>Drag or drop some files here, or click to select files</p>
              <span className="text-xs">Only images are allowed</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
