import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    };
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase!', 'success')
    };
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to Lowecase!', 'success')
    };
    const handleClearClick = () => {
        setText("");
        props.showAlert('Text Cleared!', 'success')
    };
    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied to clipboard!', 'success')
    };
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra Spaces Removed!', 'success')
    };
    const getReadingTime = (text) => {
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        const readingTimeMinutes = Math.floor(words / wordsPerMinute);
        const readingTimeSeconds = Math.round((words / wordsPerMinute - readingTimeMinutes) * 60);
        return `${readingTimeMinutes} minute${readingTimeMinutes > 1 ? 's' : ''} ${readingTimeSeconds} second${readingTimeSeconds !== 1 ? 's' : ''}`;
    }
    const countSentences = (text) => {
        if (!text.trim()) return '0 scentence';
        const sentences = text.split(/[.!?]+/);
        const nonEmptySentences = sentences.filter(sentence => sentence.trim().length > 0);
        return `${nonEmptySentences.length} sentence`;
    }

    const countWordsAndChars = (text) => {
        if (!text.trim()) {
            return `0 words and 0 characters`;
        }
        const words = text.trim().split(/\s+/);
        const chars = text.trim().length;
        return `${words.length} words and ${chars} characters`;
    }


    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <label className='mb-2 mt-4' htmlFor='myBox' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><h1>{props.heading}</h1></label>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Type or paste your text"
                        spellCheck="false"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#5eb5c7' : '#e4f4f7',
                            color: 'black',
                            fontSize: '20px',
                            fontWeight: '400',
                        }} />
                    <div className="mt-3">
                        <button type="button" className={`btn btn-primary mb-2 me-2 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleUpClick}>Convert to uppercase</button>
                        <button type="button" className={`btn btn-primary mb-2 me-2 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleLoClick}>Convert to lowercase</button>
                        <button type="button" className={`btn btn-primary mb-2 me-2 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                        <button type="button" className={`btn btn-primary mb-2 me-2 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleClearClick}>Clear Text</button>
                        <button type="button" className={`btn btn-primary mb-2 me-2 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleCopyClick}>Copy Text</button>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{countWordsAndChars(text)}</p>
                <p>{getReadingTime(text)}</p>
                <p>{countSentences(text)}</p>
                <div className='bg-info bg-opacity-10 border border-info rounded'>
                    <h3 className='mx-3 my-2 text-decoration-underline'>Preview</h3>
                    <p className=' px-3 text-start'>{text.length === 0 ? 'Nothing to Preview!' : text}</p>
                </div>
            </div>
        </>
    )
}

