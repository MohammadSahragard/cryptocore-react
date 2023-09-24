// helper
import { separatorThousandsCurrency } from "../../helper/functions";

// components
import Title from "../ui/Title";
import CoinDeveloperChart from "./CoinDeveloperChart";



const CoinDeveloperInfo = ({ data }) => {
    return (
        <div className='h-[500px] grid grid-rows-[max-content_2fr_max-content] gap-2 bg-[#1E283C60] p-3 pt-4 rounded-lg mt-10'>
            
            <Title>Developer Data <i className='fab fa-github'></i></Title>


            <div className='bg-[#0b111f] rounded grid grid-rows-3 grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                    <Title customClassName='text-lg'>
                        {separatorThousandsCurrency (data?.stars)}
                    </Title>
                    <Title customClassName='font-normal flex items-center gap-1 text-opacity-75'>
                        <i className='far fa-star'></i> Stars
                    </Title>
                </div>

                <div className='flex flex-col justify-center items-center border-b border-l border-slate-50/10'>
                    <Title customClassName='text-lg'>
                        {separatorThousandsCurrency (data?.subscribers)}
                    </Title>
                    <Title customClassName='font-normal flex items-center gap-1 text-opacity-75'>
                        <i className='far fa-eye'></i> Watchers
                    </Title>
                </div>

                <div className='flex flex-col justify-center items-center border-t border-r border-slate-50/10'>
                    <Title customClassName='text-lg'>
                        {separatorThousandsCurrency (data?.forks)}
                    </Title>
                    <Title customClassName='font-normal flex items-center gap-1 text-opacity-75'>
                        <i className='fal fa-code-fork'></i> Forks
                    </Title>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Title customClassName='text-lg'>
                        {separatorThousandsCurrency (data?.pull_request_contributors)}
                    </Title>
                    <Title customClassName='font-normal flex items-center gap-1 text-opacity-75'>
                        <i className='fal fa-network-wired'></i> Contributors
                    </Title>
                </div>

                <div className='flex flex-col justify-center items-center border-t border-r border-slate-50/10'>
                    <Title customClassName='text-lg'>
                        {separatorThousandsCurrency (data?.pull_requests_merged)}
                    </Title>
                    <Title customClassName='font-normal flex items-center gap-1 text-opacity-75'>
                        <i className='fal fa-code-pull-request'></i> Merged
                    </Title>
                </div>

                <div className='flex flex-col justify-center items-center border-t border-slate-50/10'>
                    <Title customClassName='text-lg'>
                        {separatorThousandsCurrency (data?.closed_issues)} / {separatorThousandsCurrency (data?.total_issues)}
                    </Title>
                    <Title customClassName='font-normal text-opacity-75 text-center'>
                        <i className='fal fa-code-pull-request-closed'></i> Closed / Total Issues
                    </Title>
                </div>
            </div>


            <div>
                <CoinDeveloperChart data={data?.last_4_weeks_commit_activity_series} />
            </div>

        </div>
    );
};

export default CoinDeveloperInfo;