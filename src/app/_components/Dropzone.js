import { useCallback, useState } from 'react'

import { opensans } from '@/font'
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
function Dropzone({handleFormChange}) {
  const [file, setFile] = useState(null);
  
  return (
    <FileUploader handleChange={handleFormChange} name="file" types={fileTypes} />
  );
}

export default Dropzone
