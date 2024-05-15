import { Progress } from "flowbite-react";
import { currentValueDolar, dataUpdate, goalValueDolar, notebookLink, progress } from "../data";

function ProgressDonate() {
    return (
        <div className="relative flex flex-col justify-center items-center gap-1 lg:gap-4 w-2/3 bg-white p-2 lg:p-6 rounded-xl shadow-xl text-[#202C33]">
            <p className="font-bold">Let's buy a Laptop for the Dev</p>

            <div className="w-2/3">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-md lg:text-2xl font-bold">{`$ ${currentValueDolar}`}</p>
                        <p className="italic text-sm lg:text-lg text-[#202C33]/70">{`of $ ${goalValueDolar}`}</p>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <p className="text-md lg:text-2xl font-bold">{`% ${progress}`}</p>
                        <p className="italic text-sm lg:text-lg text-[#202C33]/70">{`of Goal`}</p>
                    </div>
                </div>
                <Progress
                    progress={progress}
                    size="md"
                />
                <div className="flex flex-col justify-center items-center pt-2 lg:pt-6">
                    <p className="text-center text-xs text-[#202C33]/50">Update: {dataUpdate}</p>
                    <p className="text-sm lg:text-lg text-center"><a href={notebookLink} target="_blank">I accept laptop suggestions!</a></p>
                </div>
            </div>




        </div>
    );
}

export default ProgressDonate;