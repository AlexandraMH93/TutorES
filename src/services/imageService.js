import axios from 'axios'

export const uploadImage = async (image) => {

 try {

  const formImagen = new FormData();
  formImagen.append('file', image);
  formImagen.append('upload_preset', 'vbmkqmhm');
  formImagen.append('api_key', '697549313788997');
  const {data} = await axios.post('https://api.cloudinary.com/v1_1/ddk8qu4aa/image/upload',formImagen)
  return data ? data.secure_url : null
 } catch (error) {
  console.log(error)
 }

};

