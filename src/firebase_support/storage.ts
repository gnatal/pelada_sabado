import { ref, uploadBytes } from 'firebase/storage';
import { storage } from 'utils/firebaseConfig';

export const uploadFile = async (file: File, path: string): void => {
  const imageRef = ref(storage, path);
  try {
    const result = await uploadBytes(imageRef, file);
  } catch (e) {
    console.log(' error uploading the image', e)
  }
}