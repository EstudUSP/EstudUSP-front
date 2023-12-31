import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { Container, FileInfo } from "./styles";
import { IFile, useFiles } from "../../contexts/files";
import { PreviewImage } from "../PreviewImage";
import { useTheme } from "styled-components";

const FileList = () => {
  const { uploadedFiles: files, deleteFile } = useFiles();
  const theme = useTheme();

  return (
    <Container>
      {files.map((uploadedFile: IFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <PreviewImage file={uploadedFile} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}{" "}
                {!!uploadedFile && (
                  <button onClick={() => deleteFile(uploadedFile.id)}>
                    Excluir
                  </button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: theme["yellow-usp"] },
                }}
                strokeWidth={10}
                text={String(uploadedFile.progress)}
                value={uploadedFile.progress || 0}
              />
            )}

            {uploadedFile.preview && (
              <a
                href={uploadedFile.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#fff" />
              </a>
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color={theme.primary} />
            )}
            {uploadedFile.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default FileList;