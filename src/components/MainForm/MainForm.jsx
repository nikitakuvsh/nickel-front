import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainForm.css';

function MainForm() {
    const [isDragActive, setIsDragActive] = useState(false);
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleRemoveFile = () => {
        setFile(null);
    };

    const handleDropzoneClick = () => {
        document.getElementById("file-upload").click();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        //Заглушка для отправки формы
        navigate('/feedback');
    };

    return (
        <div className="main__container">
            <form className="form" onSubmit={onSubmit}>
                <h2 className="form__title">Загрузите изображение, видео или трансляцию</h2>

                <div 
                    className={`form__dropzone ${isDragActive ? 'active' : ''}`} 
                    onClick={handleDropzoneClick} // Добавлено событие клика
                    onDragEnter={handleDragEnter} 
                    onDragLeave={handleDragLeave} 
                    onDragOver={(e) => e.preventDefault()} 
                    onDrop={handleDrop}
                >
                    <p className="form__dropzone-text">Перетащите файл сюда или нажмите, чтобы выбрать</p>
                    <input 
                        type="file" 
                        id="file-upload" 
                        className="form__input-file" 
                        accept="image/*, video/*" 
                        onChange={handleFileChange}
                        required
                    />
                </div>

                {file && (
                    <div className="form__file-preview">
                        {file.type.startsWith("image/") ? (
                            <img 
                                src={URL.createObjectURL(file)} 
                                alt="preview" 
                                className="form__file-thumbnail" 
                            />
                        ) : (
                            <div className="form__file-icon">📄</div>
                        )}
                        <span className="form__file-name">{file.name}</span>
                        <button type="button" className="form__remove-file" onClick={handleRemoveFile}>Удалить</button>
                    </div>
                )}

                <div className="form__group">
                    <label className="form__label" htmlFor="stream-url">Ссылка на трансляцию:</label>
                    <input type="url" id="stream-url" className="form__input" placeholder="https://..." />
                </div>

                <button type="submit" className="form__submit">Загрузить</button>
            </form>
        </div>
    );
}

export default MainForm;
