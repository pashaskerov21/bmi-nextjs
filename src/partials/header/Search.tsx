'use client'
import React from 'react'
import { SearchForm } from './style'
import { BiSearch } from 'react-icons/bi'
import { FaXmark } from 'react-icons/fa6';
import { Container } from '@/src/styles/utils';
import { MenuTranslateType, MenuType, TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types';
import { redirect, useRouter } from 'next/navigation';

type SearchProps = {
    searchShow: boolean,
    toggleSearch: () => void,
    activeLocale: string,
    menuData: MenuType[],
    menuTranslateData: MenuTranslateType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
}

const Search: React.FC<SearchProps> = ({
    searchShow,
    toggleSearch,
    activeLocale,
    menuData,
    menuTranslateData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData }) => {
    const [searchValue, setSearchValue] = React.useState<string>('');
    const router = useRouter();

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggleSearch();

        const foundMenuTranslateData: MenuTranslateType | undefined = menuTranslateData.find((data) => data.name.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTraininCategoryTranslateData: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData.find((data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTrainingTranslateData: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        if (foundMenuTranslateData) {
            const foundMenuData: MenuType | undefined = menuData.find((data) => data.id === foundMenuTranslateData.menu_id);
            if (foundMenuData) {
                router.push(`/${foundMenuTranslateData.lang}/${foundMenuData.path}`)
            }
        } else if (foundTraininCategoryTranslateData) {
            router.push(`/${foundTraininCategoryTranslateData.lang}/trainings/${encodeURIComponent(foundTraininCategoryTranslateData.title.toLocaleLowerCase())}`)
        }else if(foundTrainingTranslateData){
            const foundTrainingData: TrainingType | undefined = trainingData.find((data) => data.id === foundTrainingTranslateData.training_id)
            if(foundTrainingData){
                const foundCategoryTranslateData: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData.find((data) => data.category_id === foundTrainingData.categoryID);
                if(foundCategoryTranslateData){
                    router.push(`/${foundTrainingTranslateData.lang}/trainings/${encodeURIComponent(foundCategoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(foundTrainingTranslateData.title.toLocaleLowerCase())}`)
                }
            }
        }

        setSearchValue('');
    }
    return (
        <SearchForm $searchShow={searchShow} onSubmit={onSearchSubmit}>
            <Container>
                <div className="inner">
                    <div className="input-row">
                        <input type="text" placeholder='Axtar' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
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
