import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function Putdata(){
    const [inputs, setInputs] = useState({
        temperature: '',
        huminity: '',
        finedust: ''
    }); //input: 상태값 저장 변수 setInput: 상태값 갱신 함수

    const {temperature, huminity, finedust} = inputs;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const Put = () => {
        //데이터 전송하기
        setInputs({
            temperature: '',
            huminity: '',
            finedust: ''
        });
    };

    const enterKeyPress = (e) => {
        if (e.key === 'Enter'){
            Put();
        }
    }

    return(
        <div>
            <p>
                <input type="int"
                    name="temperature"
                    placeholder="온도"
                    onChange={onChange}
                    value={temperature}
                    onKeyPress={enterKeyPress} />   {/*입력 받을 때 숫자만 가능하게 만들기*/}
                <Button variant="outlined"
                    color="primary"
                    size="small"
                    disableElevation
                    onClick={Put}>
                        입력
                </Button>
            </p>
            <p>
                <input type="int"
                    name="huminity"
                    placeholder="습도"
                    onChange={onChange}
                    value={huminity}
                    onKeyPress={enterKeyPress} />
                <Button variant="outlined"
                    color="primary"
                    size="small"
                    disableElevation
                    onClick={Put}>
                        입력
                </Button>
            </p>
            <p>
                <input type="int"
                    name="finedust"
                    placeholder="미세먼지"
                    onChange={onChange}
                    value={finedust}
                    onKeyPress={enterKeyPress} />
                <Button variant="outlined"
                    color="primary"
                    size="small"
                    disableElevation
                    onClick={Put}>
                        입력
                </Button>
            </p>
        </div>
    );
}

export default Putdata;