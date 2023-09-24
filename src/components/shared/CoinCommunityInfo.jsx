import React from 'react';
import { Link } from 'react-router-dom';

// helper
import { getMainLink } from '../../helper/functions';

// components
import Title from '../ui/Title';
import Badge from '../ui/Badge';




const CoinCommunityInfo = ({ data }) => {
    const { links } = data;

    return (
        <div className='mt-10'>
            <Title customClassName='text-xl'>Info</Title>

            <div className='flex flex-col divide-y divide-[#33415580]'>

                <div className='grid grid-cols-[75px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Website</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        <Badge
                            smallSize={true}
                            isLink={links?.homepage?.[0]} >
                                {getMainLink (links?.homepage?.[0])}
                        </Badge>
                    </div>
                </div>

                <div className='grid grid-cols-[75px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Community</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        {
                            links?.facebook_username &&
                                            <Badge
                                                smallSize={true}
                                                isLink={`https://www.facebook.com/${links?.facebook_username}/`}
                                                customIcon='fab fa-facebook-f text-blue-500'>
                                                Facebook
                                            </Badge>
                        }
                        {
                            links?.twitter_screen_name &&
                                            <Badge 
                                                smallSize={true} 
                                                isLink={`https://twitter.com/${links?.twitter_screen_name}/`} 
                                                customIcon='fab fa-twitter text-sky-500'>
                                                Twitter
                                            </Badge>
                        }
                        {
                            links?.subreddit_url &&
                                            <Badge 
                                                smallSize={true} 
                                                isLink={links?.subreddit_url} 
                                                customIcon='fab fa-reddit-alien text-orange-500'>
                                                Reddit
                                            </Badge>
                        }
                        {
                            links?.telegram_channel_identifier &&
                                            <Badge 
                                                smallSize={true} 
                                                isLink={links?.telegram_channel_identifier} 
                                                customIcon='fab fa-telegram text-sky-500'>
                                                Telegram
                                            </Badge>
                        }
                        {
                            links?.official_forum_url?.[0] &&
                                            <Badge 
                                                smallSize={true} 
                                                isLink={links?.official_forum_url?.[0]} 
                                                customIcon='fa fa-microphone-lines text-white/90'>
                                                {getMainLink (links?.official_forum_url?.[0])}
                                            </Badge>
                        }
                    </div>
                </div>

                <div className='grid grid-cols-[75px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Explorer</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        {
                            links?.blockchain_site?.map (explorer => explorer && <Badge 
                                                                                    key={explorer} 
                                                                                    smallSize={true} 
                                                                                    isLink={explorer}>
                                                                                    {getMainLink(explorer)}
                                                                                 </Badge>)
                        }
                    </div>
                </div>

                <div className='grid grid-cols-[85px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Source Code</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        <Badge 
                            smallSize={true} 
                            isLink={links?.repos_url?.github?.[0]} 
                            customIcon='fab fa-github text-white'>
                            Github
                        </Badge>
                    </div>
                </div>

                <div className='grid grid-cols-[85px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Categories</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        {
                            data?.categories?.map (category => category && <Badge 
                                                                                    key={category} 
                                                                                    smallSize={true} 
                                                                                    isLink={category}
                                                                                    customIcon='fad fa-grid-2 text-white/90'>
                                                                                    {category}
                                                                                 </Badge>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoinCommunityInfo;