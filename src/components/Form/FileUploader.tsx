import {
  CheckboxInputProps,
  FileUploaderProps,
  MultiOptionsInputProps,
  RadioInputProps,
} from "@/interfaces/props.interface";
import { InputHTMLAttributes, useRef } from "react";

import React, { useState } from "react";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import { FilePondFile } from "filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export const FileUploader = ({ onChange, ...props }: FileUploaderProps) => {
  const [files, setFiles] = useState<any[]>([]);

  const handleChange = async (fileItems: FilePondFile[]) => {
    const extractedFiles = fileItems.map((fileItem) => fileItem.file);
    setFiles(extractedFiles);

    const blobs = await Promise.all(
      extractedFiles.map(async (f) => {
        const buf = await f.arrayBuffer();
        return buf;
      })
    );

    if (typeof onChange === "function") {
      onChange({ name: props.name, files: extractedFiles });
    }
  };

  return (
    <div className="">
      <FilePond
        files={files}
        allowMultiple={false}
        allowReorder={false}
        maxFiles={props.maxFiles}
        name={props.name}
        onupdatefiles={handleChange}
        allowImagePreview={true}
      />
    </div>
  );
};
