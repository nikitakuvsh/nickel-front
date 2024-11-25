import './Feedback.css';

function Feedback({ imageUrl, pollutionLevel }) {
    return (
        <div className="feedback__container">
            <h2 className="feedback__title">Результаты чистоты изображения</h2>
            <div className="feedback__image-wrapper">
                <img src={imageUrl} alt="Uploaded Preview" className="feedback__image" />
            </div>
            <div className="feedback__pollution-meter">
                <label className="feedback__meter-label">Уровень загрязнения: {pollutionLevel}/100</label>
                <div className="feedback__scale">
                    <div
                        className="feedback__indicator"
                        style={{ width: `${pollutionLevel}%`, backgroundColor: getPollutionColor(pollutionLevel) }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

const getPollutionColor = (level) => {
    if (level <= 25) return 'var(--success-color)';         // Green for clean
    if (level <= 50) return '#FFC107';                       // Yellow for moderate
    if (level <= 75) return '#FF9800';                       // Orange for noticeable
    return 'var(--error-color)';                             // Red for high pollution
};

export default Feedback;
