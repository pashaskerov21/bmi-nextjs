import React from 'react'
import { SearchForm } from './style'
import { BiSearch } from 'react-icons/bi'
import { FaXmark } from 'react-icons/fa6';
import { Container } from '@/src/styles/utils';

type SearchProps = {
    searchShow: boolean,
    toggleSearch: () => void,
}

const Search:React.FC<SearchProps> = ({searchShow, toggleSearch}) => {
    return (
        <SearchForm $searchShow={searchShow}>
            <Container>
                <div className="inner">
                    <div className="input-row">
                        <input type="text" placeholder='Axtar'/>
                        <button type='submit'>
                            <BiSearch />
                        </button>
                    </div>
                    <button type='button' className="close-button d-lg-none" onClick={toggleSearch}>
                        <FaXmark />
                    </button>
                </div>
            </Container>
        </SearchForm>
    )
}

export default React.memo(Search)
