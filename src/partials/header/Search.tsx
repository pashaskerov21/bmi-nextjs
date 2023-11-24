'use client'
import React from 'react'
import { SearchForm } from './style'
import { BiSearch } from 'react-icons/bi'
import { FaXmark } from 'react-icons/fa6';
import { Container } from '@/src/styles/utils';
import { EventTranslateType, MenuTranslateType, MenuType, NewsTranslateType, TrainerTranslateType, TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types';
import { redirect, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

type SearchProps = {
    searchShow: boolean,
    toggleSearch: () => void,
    activeLocale: string,
    menuData: MenuType[],
    menuTranslateData: MenuTranslateType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    trainerTranslateData: TrainerTranslateType[],
    eventTranslateData: EventTranslateType[],
    newsTranslateData: NewsTranslateType[],
    errorDictionary: { [key: string]: string },
}

const Search: React.FC<SearchProps> = ({
    searchShow,
    toggleSearch,
    activeLocale,
    menuData,
    menuTranslateData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerTranslateData,
    eventTranslateData,
    newsTranslateData,
    errorDictionary }) => {
    const [searchValue, setSearchValue] = React.useState<string>('');
    const router = useRouter();

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggleSearch();

        const foundMenuTranslateData: MenuTranslateType | undefined = menuTranslateData.find((data) => data.name.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTraininCategoryTranslateData: TrainingCategoryTranslateType[] | undefined = trainingCategoryTranslateData.filter((data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTrainingTranslateData: TrainingTranslateType[] | undefined = trainingTranslateData.filter((data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTrainerTranslateData: TrainerTranslateType[] | undefined = trainerTranslateData.filter((data) => data.name.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundEventTranslateData: EventTranslateType[] | undefined = eventTranslateData.filter((data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundNewsTranslateData: NewsTranslateType[] | undefined = newsTranslateData.filter((data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        if (foundMenuTranslateData) {
            const foundMenuData: MenuType | undefined = menuData.find((data) => data.id === foundMenuTranslateData.menu_id);
            if (foundMenuData) {
                router.push(`/${foundMenuTranslateData.lang}/${foundMenuData.path}`)
            }
        } else if (foundTraininCategoryTranslateData && foundTraininCategoryTranslateData.length > 0) {
            if (foundTraininCategoryTranslateData.length === 1) {
                router.push(`/${foundTraininCategoryTranslateData[0].lang}/trainings/${encodeURIComponent(foundTraininCategoryTranslateData[0].title.toLocaleLowerCase())}`)
            } else {
                router.push(`/${foundTraininCategoryTranslateData[0].lang}/search`);
            }
        } else if (foundTrainingTranslateData && foundTrainingTranslateData.length > 0) {
            if (foundTrainingTranslateData.length === 1) {
                const foundTrainingData: TrainingType | undefined = trainingData.find((data) => data.id === foundTrainingTranslateData[0].training_id)
                if (foundTrainingData) {
                    const foundCategoryTranslateData: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData.find((data) => data.lang === foundTrainingTranslateData[0].lang && data.category_id === foundTrainingData.categoryID);
                    if (foundCategoryTranslateData) {
                        router.push(`/${foundTrainingTranslateData[0].lang}/trainings/${encodeURIComponent(foundCategoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(foundTrainingTranslateData[0].title.toLocaleLowerCase())}`)
                    }
                }
            } else {
                router.push(`/${foundTrainingTranslateData[0].lang}/search`);
            }
        } else if (foundTrainerTranslateData && foundTrainerTranslateData.length > 0) {
            if (foundTrainerTranslateData.length === 1) {
                router.push(`/${foundTrainerTranslateData[0].lang}/trainers/${encodeURIComponent(foundTrainerTranslateData[0].name.toLocaleLowerCase())}`);
            } else {
                router.push(`/${foundTrainerTranslateData[0].lang}/search`);
            }
        } else if (foundEventTranslateData && foundEventTranslateData.length > 0) {
            if (foundEventTranslateData.length === 1) {
                router.push(`/${foundEventTranslateData[0].lang}/events/${encodeURIComponent(foundEventTranslateData[0].title.toLocaleLowerCase())}`)
            } else {
                router.push(`/${foundEventTranslateData[0].lang}/search`);
            }
        } else if (foundNewsTranslateData && foundNewsTranslateData.length > 0) {
            if (foundNewsTranslateData.length === 1) {
                router.push(`/${foundNewsTranslateData[0].lang}/news/${encodeURIComponent(foundNewsTranslateData[0].title.toLocaleLowerCase())}`)
            } else {
                router.push(`/${foundNewsTranslateData[0].lang}/search`);
            }
        } else {
            Swal.fire({
                icon: "error",
                title: errorDictionary.error,
                text: errorDictionary.search_error,
            });
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
