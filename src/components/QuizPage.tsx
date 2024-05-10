import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioChangeEvent } from 'antd';
import { RootState } from '@stores/Stores';
// import { GiNoseFront } from "react-icons/gi";
// import { TbMoustache } from "react-icons/tb";
import { nextQuestion, prevQuestion, reAttempt, setStartAttempt, setSelectedAnswer, submit } from '@stores/slices/QuizSlice';
import QuestionsData from '../types/QuestionsData';
type InlineStyle = {
    [key: string]: string;
};
function QuizPage() {

    const getRadioStyle = (color: string): InlineStyle => ({
        '--radio-button-color': color.startsWith('#') ? color : `#${color}`,
    });

    const { startAttempt, currentQuestion, answer, score, isSubmit } =
        useSelector((state: RootState) => state.quiz.value);
    const dispatch = useDispatch();

    const onClickStart = () => {
        dispatch(setStartAttempt());
    };

    const onNext = () => {
        dispatch(nextQuestion());
    };

    const onPrev = () => {
        dispatch(prevQuestion());
    };

    const onSubmit = () => {
        dispatch(submit());
    };

    const handleChange = (e: RadioChangeEvent) => {
        const value = e.target.value;
        dispatch(setSelectedAnswer(value));
    };

    const reStart = () => {
        dispatch(reAttempt());
    };

    return (
        <>
            <div className="content-home place-self-center bg-[#a9d4ff] dark:bg-[#99ccff] w-[800px] h-[500px] m-auto rounded-2xl p-[2em]">
                <div className="flex justify-between mx-20 mb-[1.3em] -mt-3">
                    <div className="card">
                        <div className="cloud  dark:bg-[#c6e1ff]"></div>
                        <div className="shadow"></div>
                    </div>
                    <div className="card">
                        <div className="cloud dark:bg-[#c6e1ff]"></div>
                        <div className="shadow"></div>
                    </div>
                </div>
                <div className="">
                    {!startAttempt ? (
                        <div className='content-quiz flex flex-col items-center dark:text-[#335070] text-[#1c2c3f] mt-[15%]'>
                            {/* <div className=''><GiNoseFront className='w-[3em] h-[3em]' /></div>
                            <div className=''><TbMoustache className='w-[4em] h-[4em]' /></div> */}
                            <h1 className="text-2xl font-extrabold mb-4">แบบทดสอบก่อนเรียน</h1>
                            <div className='button-click w-fit px-4 font-bold text-lg z-50 flex items-center' onClick={onClickStart}>เริ่มทำแบบทดสอบ</div>
                        </div>
                    ) : (
                        <div>
                            {!isSubmit ? (
                                <>
                                    <div>
                                        <div className='question-container h-[17em]'>
                                            {QuestionsData[currentQuestion] && (
                                                <div className='pl-[3em] dark:text-[#335070] text-[#19293c]' key={currentQuestion}>
                                                    <div className='text-2xl font-bold mb-4'>
                                                        {currentQuestion + 1}.
                                                        {QuestionsData[currentQuestion].question}
                                                    </div>
                                                    <Radio.Group className="radio-con flex flex-col z-50 options mt-5 ml-7 gap-5 " onChange={handleChange} value={answer[currentQuestion] || ""}>
                                                        <Radio value="A" className='text-lg z-50' style={getRadioStyle('#335070')}>A. {QuestionsData[currentQuestion].A}</Radio>
                                                        <Radio value="B" className='text-lg z-50' style={getRadioStyle('#335070')}>B. {QuestionsData[currentQuestion].B}</Radio>
                                                        <Radio value="C" className='text-lg z-50' style={getRadioStyle('#335070')}>C. {QuestionsData[currentQuestion].C}</Radio>
                                                        <Radio value="D" className='text-lg z-50' style={getRadioStyle('#335070')}>D. {QuestionsData[currentQuestion].D}</Radio>
                                                    </Radio.Group>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    <div className='flex justify-around  mx-[4.5em] gap-96'>
                                        {currentQuestion > 0 && (
                                            <div className='click-btn'>
                                                <button className='button-click z-50' onClick={onPrev} disabled={currentQuestion === 0} >
                                                    Previous
                                                </button>
                                            </div>
                                        )}
                                        {currentQuestion < QuestionsData.length - 1 && (
                                            <div className='click-btn'>
                                                <button className='button-click z-50' onClick={onNext} disabled={currentQuestion == QuestionsData.length - 1} >
                                                    Next
                                                </button>
                                            </div>
                                        )}
                                        {currentQuestion >= QuestionsData.length - 1 && (
                                            <div className='click-btn'>
                                                <button className='button-click z-50' onClick={onSubmit}>Submit</button>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className=''>
                                    <div className='flex flex-col gap-5 items-center font-extrabold mt-[15%] dark:text-[#335070] text-[#1c2c3f]'>
                                        <div className='text-[2em]'>สรุปผลการทดสอบ</div>
                                        <div className='text-[1.5em]'>ได้คะแนน {score} จาก 10 คะแนน</div>
                                        <div className=''>
                                            <div className='button-click w-fit px-4 h-fit py-2 text-[1em]' onClick={reStart}>ทำแบบทดสอบอีกครั้ง</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default QuizPage;
