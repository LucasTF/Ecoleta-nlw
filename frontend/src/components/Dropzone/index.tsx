import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import StyledDropzone from './styles';

interface IDropzoneProps {
	onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<IDropzoneProps> = props => {
	const [selectedImage, setSelectedImage] = useState('');

	const onDrop = useCallback(
		acceptedFiles => {
			const image = acceptedFiles[0];
			const imageUrl = URL.createObjectURL(image);

			setSelectedImage(imageUrl);
			props.onFileUploaded(image);
		},
		[props]
	);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: 'image/*',
	});

	function dropContent() {
		if (selectedImage)
			return <img src={selectedImage} alt='Collector Thumbnail' />;

		if (isDragActive) return <p>Arraste os arquivo até aqui...</p>;
		return (
			<p>
				<FiUpload />
				Arraste arquivos aqui, ou clique para selecionar um arquivo
			</p>
		);
	}

	return (
		<StyledDropzone {...getRootProps()}>
			<input {...getInputProps()} accept='image/*' />
			{dropContent()}
		</StyledDropzone>
	);
};

export default Dropzone;
