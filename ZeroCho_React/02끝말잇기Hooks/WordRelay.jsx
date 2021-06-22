const React = require('react');
const { useState, UseRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('네이버');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length -1] === value[0]){
            setResult('딩동댕'),
            setWord(value),
            setValue(''),
            inputRef.current.focus();
        } else {
            setResult('떙'),
            setValue(''),
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue({ value: e.target.value});
    };

    input;

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력!</button>
            </form>
            <div>{this.state.result}</div>
        </>
    )
}

module.exports = WordRelay;