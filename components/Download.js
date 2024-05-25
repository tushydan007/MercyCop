import { saveAs } from "file-saver";

const Download = (filePath, fileName) => {
  saveAs(filePath, fileName);
};

export default Download;
