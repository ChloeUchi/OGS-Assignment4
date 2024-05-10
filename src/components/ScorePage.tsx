
import {RootState} from '@stores/Stores'
import { useSelector } from 'react-redux';
import { FaRegSadCry } from "react-icons/fa";

const ScorePage = () => {
    const { listScore } = useSelector((state: RootState) => state.quiz.value);
    return (
        <div className=''>
            <div className="content-quiz">
                <div className="content-home place-self-center bg-[#a9d4ff] w-[800px] h-[500px] m-auto rounded-2xl">
                    <h1 className='text-[1.3em] p-[2em] pb-[1em] font-extrabold text-[#173f67]'>ผลการทดสอบทั้งหมด</h1>
                    <div className="content-home1 place-self-center opacity-90 text-white font-bold dark:bg-[#799dc2] bg-[#87a9ca] w-[600px] h-[300px] m-auto rounded-2xl overflow-y-auto p-10 shadow-[inset_-12px_-8px_40px_#5e5e5e20] dark:shadow-[inset_-12px_-8px_40px_#46464620]">
                        {listScore.length > 0 ? (
                            <ul>
                                {listScore.map((score, index) => (
                                    <li className='pb-5 text-lg' key={index}>{index+1}. {score} คะแนน</li>
                                ))}
                            </ul>
                        ) : (
                            <div className='flex gap-2 items-center'>
                                <p>No scores available</p>
                                <FaRegSadCry/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScorePage;
