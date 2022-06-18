import { useState } from 'react';
import * as S from './inputForm.style';

const InputForm = ({ label, errMessage, ...otherProps }) => {
    const [focused, setFocused] = useState(false);

    const handleBlur = () => {
        setFocused(true);
    }
    
    return (
        <>
            <S.InputContainer>
                <S.InputBox
                    {...otherProps}
                    focused={focused}
                    onBlur={handleBlur}
                />
                <S.LabelInput
                    shrink={otherProps.value.length ? true : false}
                >{label}</S.LabelInput>
                {errMessage && <S.ErrMessage>{errMessage}</S.ErrMessage>}
            </S.InputContainer>
        </>
    );
}

export default InputForm;