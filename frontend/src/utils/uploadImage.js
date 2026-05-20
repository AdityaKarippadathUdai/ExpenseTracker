import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  //Appending the image url to form data with key "image"
  formData.append("image", imageFile);

  try{
    const response = await axiosInstance.post(API_PATHS.IMAGE_UPLOAD, formData, {
        //Setting the content type to multipart/form-data for file upload
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    //Returning the image URL from the response
    return response.data;
  }catch(error){
    console.error("Image upload failed:", error);
    return {imageUrl: ""}; //Return empty URL on failure to avoid breaking the signup flow
  }
};

export default uploadImage;