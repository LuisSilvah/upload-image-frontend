import  { useDropzone } from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles'

export default function Upload({ onUpload }) {
    const {
        isDragAccept,
        isDragReject,
        isDragActive,
        getRootProps,
        getInputProps
    } = useDropzone({
        maxFiles:2,
        accept: {
            'image/*': [],
            
        },

        onDropAccepted: onUpload 
    });

    return (
        <DropContainer
            {...getRootProps()}
            isDragActive={isDragAccept}
            isDragReject={isDragReject}
            onDropAccepted={onUpload}
        >
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />

                {isDragAccept && <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>}
                {isDragReject && <UploadMessage type="error">Arquivo não suportado</UploadMessage>}
                {!isDragActive && <UploadMessage>Arraste arquivos aqui...</UploadMessage>}
            </div>
        </DropContainer>
    );
}
