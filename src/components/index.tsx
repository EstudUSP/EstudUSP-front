import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { DropContainer, UploadMessage } from "./Upload/styles";
import { useFiles } from "../contexts/files";
import { UploadSimple } from "phosphor-react";


function Upload() {
  const { handleUpload } = useFiles();

  const onDrop = useCallback(
    (files: File[]) => {
      handleUpload(files);
    },
    [handleUpload]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    // accept: {types: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"]},
    onDrop,
  });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Adicione/arraste arquivos aqui (opcional) <UploadSimple size={24} weight="bold" /></UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);

  return (
    <DropContainer 
      {...getRootProps()} 
      isDragReject={isDragReject} 
      isDragActive={isDragActive} 
    >
      <input {...getInputProps()} />
      {renderDragMessage()}
    </DropContainer>
  );
}

export default Upload;