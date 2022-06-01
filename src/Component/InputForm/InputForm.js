import * as S from './inputForm.style';

const InputForm = ({ label, ...otherProps }) => {

    return (
        <S.InputContainer>
            <S.InputBox className="input-box" {...otherProps} />
            <S.LabelInput shrink={otherProps.value.length ? true : false}>{label}</S.LabelInput>
        </S.InputContainer>  
    );
}

export default InputForm;