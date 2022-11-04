import React from 'react'
import { CheckCircle, Link, XCircle } from 'phosphor-react'

import { CircularProgressbar } from 'react-circular-progressbar'

import { Container, FileInfo, Preview } from './styles'


const FileList = ({ files, onDelete }) => {
    return (
        <Container>
            {files.map(uploadedFile => (
                <li key={uploadedFile.id}>
                    <FileInfo>
                        <Preview src={uploadedFile.preview} />
                        <div>
                            <strong>{uploadedFile.name}</strong>
                            <span>{uploadedFile.readableSize}
                                {uploadedFile.url && (
                                    <button onClick={() => { onDelete(uploadedFile.id) }}>Excluir</button>
                                )}
                            </span>
                        </div>
                    </FileInfo>
                    <div>
                        {!uploadedFile.uploaded &&
                            !uploadedFile.error && (
                                <CircularProgressbar
                                    styles={{
                                        root: { width: 24 },
                                        path: { stroke: "#7159c1" }
                                    }}
                                    strokeWidth={10}
                                    percentage={uploadedFile.readableSize}
                                />
                            )}
                        {uploadedFile.url && (
                            <a
                                href={uploadedFile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Link style={{ marginRight: 8 }} size={24} color="#222" />
                            </a>
                        )}


                        {uploadedFile.uploaded && <CheckCircle size={24} color="#78e5d5" />}
                        {uploadedFile.error && <XCircle size={24} color="#e57878" />}


                    </div>
                </li>
            ))}
        </Container>
    )
}

export default FileList