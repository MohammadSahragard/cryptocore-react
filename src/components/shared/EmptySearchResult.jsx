// assets
import emptySearchState from '../../assets/empty-search-result-placeholder.svg';
import Title from '../ui/Title';


const EmptySearchResult = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <img
                className='w-2/3 text-slate-400'
                src={emptySearchState}
                alt="Empty search result placeholder"
            />
            <Title>Not Found</Title>
        </div>
    );
};

export default EmptySearchResult;