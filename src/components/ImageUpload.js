import React, { useState } from 'react';
const ImageUpload = ({setRoomImage}) => {
  const [image, setImage] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    setRoomImage(file)
  };
  
  return (
    <div className='relative w-full m-auto'>
      <label htmlFor="code" className={`font-medium block ${image ? 'mb-20' : 'mb-0'}`}>Room Image</label>
      {image && (
        <div className="absolute bottom-0 left-0 top-5 right-0 p-2 w-fit h-fit">
          <img src={URL.createObjectURL(image)} alt="Preview" className="w-16 h-16 rounded-full object-cover" />
        </div>
      )}
      <input
        type="file"
        className="px-3 py-3 rounded-lg border border-gray-500 w-full placeholder:text-sm lg:placeholder:text-base file:bg-blue-500 file:rounded-lg file:text-white file:border-none file:py-1 file:px-4 cursor-pointer file:cursor-pointer text-blue-500 font-medium"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
