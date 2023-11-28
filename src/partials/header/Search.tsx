'use client'
import React from 'react'
import { SearchForm } from './style'
import { BiSearch } from 'react-icons/bi'
import { FaXmark } from 'react-icons/fa6';
import { Container } from '@/src/styles/utils';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { pushSearchData } from '@/src/redux/actions/SearchAction';
import {
    EventDataType,
    EventTranslateDataType,
    MenuDataType,
    MenuTranslateDataType,
    NewsDataType,
    NewsTranslateDataType,
    SearchProps,
    SearchStateType,
    TrainerDataType,
    TrainerTranslateDataType,
    TrainingCategoryDataType,
    TrainingCategoryTranslateDataType,
    TrainingDataType,
    TrainingTranslateDataType
} from '@/src/types';

const Search: React.FC<SearchProps> = ({
    searchShow,
    toggleSearch,
    activeLocale,
    menuData,
    menuTranslateData,
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
    eventData,
    eventTranslateData,
    newsData,
    newsTranslateData,
    errorDictionary }) => {

    const [searchValue, setSearchValue] = React.useState<string>('');
    const router = useRouter();
    const dispatch = useDispatch();

    const defaultSearchState: SearchStateType = {
        traininCategoryDataState: [],
        traininCategoryTranslateDataState: [],
        trainingDataState: [],
        trainingTranslateDataState: [],
        trainerDataState: [],
        trainerTranslateDataState: [],
        eventDataState: [],
        eventTranslateDataState: [],
        newsDataState: [],
        newsTranslateDataState: [],
    }

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggleSearch();

        const foundMenuTranslateData: MenuTranslateDataType | undefined = menuTranslateData.find(
            (data) => data.name.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTraininCategoryTranslateData: TrainingCategoryTranslateDataType[] | undefined = trainingCategoryTranslateData.filter(
            (data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTrainingTranslateData: TrainingTranslateDataType[] | undefined = trainingTranslateData.filter(
            (data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundTrainerTranslateData: TrainerTranslateDataType[] | undefined = trainerTranslateData.filter(
            (data) => data.name.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundEventTranslateData: EventTranslateDataType[] | undefined = eventTranslateData.filter(
            (data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
        const foundNewsTranslateData: NewsTranslateDataType[] | undefined = newsTranslateData.filter(
            (data) => data.title.trim().toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase()));

        if (foundMenuTranslateData) {
            // menu search
            const foundMenuData: MenuDataType | undefined = menuData.find((data) => data.id === foundMenuTranslateData.menu_id);
            if (foundMenuData) {
                router.push(`/${foundMenuTranslateData.lang}/${foundMenuData.path}`)
            }
        } else if (foundTraininCategoryTranslateData && foundTraininCategoryTranslateData.length > 0) {
            // training category search
            if (foundTraininCategoryTranslateData.length === 1) {
                router.push(`/${foundTraininCategoryTranslateData[0].lang}/trainings/${encodeURIComponent(foundTraininCategoryTranslateData[0].title.toLocaleLowerCase())}`)
            } else {
                const filterCategoryTranslateForLang = foundTraininCategoryTranslateData.filter((data) => data.lang === activeLocale);
                if (filterCategoryTranslateForLang && filterCategoryTranslateForLang.length > 0) {
                    if (filterCategoryTranslateForLang.length === 1) {
                        router.push(`/${filterCategoryTranslateForLang[0].lang}/trainings/${encodeURIComponent(filterCategoryTranslateForLang[0].title.toLocaleLowerCase())}`)
                    } else {
                        const foundTrainingCategoryData: TrainingCategoryDataType[] = filterCategoryTranslateForLang.map((tdata) => {
                            return trainingCategoryData.find((data) => data.id === tdata.category_id);
                        }).filter((d): d is TrainingCategoryDataType => d !== undefined);

                        let updateState = {
                            ...defaultSearchState,
                            traininCategoryDataState: foundTrainingCategoryData,
                            traininCategoryTranslateDataState: filterCategoryTranslateForLang,
                        }
                        dispatch(pushSearchData(updateState));
                        router.push(`/${filterCategoryTranslateForLang[0].lang}/search`);
                    }
                }
            }
        } else if (foundTrainingTranslateData && foundTrainingTranslateData.length > 0) {
            // training search
            if (foundTrainingTranslateData.length === 1) {
                const foundTrainingData: TrainingDataType | undefined = trainingData.find((data) => data.id === foundTrainingTranslateData[0].training_id)
                if (foundTrainingData) {
                    const foundCategoryTranslateData: TrainingCategoryTranslateDataType | undefined = trainingCategoryTranslateData.find((data) => data.lang === foundTrainingTranslateData[0].lang && data.category_id === foundTrainingData.categoryID);
                    if (foundCategoryTranslateData) {
                        router.push(`/${foundTrainingTranslateData[0].lang}/trainings/${encodeURIComponent(foundCategoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(foundTrainingTranslateData[0].title.toLocaleLowerCase())}`)
                    }
                }
            } else {
                const filterTrainingTranslateDataForLang: TrainingTranslateDataType[] = foundTrainingTranslateData.filter((data) => data.lang === activeLocale);
                if (filterTrainingTranslateDataForLang && filterTrainingTranslateDataForLang.length > 0) {
                    if (filterTrainingTranslateDataForLang.length === 1) {
                        const foundTrainingData: TrainingDataType | undefined = trainingData.find((data) => data.id === filterTrainingTranslateDataForLang[0].training_id)
                        if (foundTrainingData) {
                            const foundCategoryTranslateData: TrainingCategoryTranslateDataType | undefined = trainingCategoryTranslateData.find((data) => data.lang === filterTrainingTranslateDataForLang[0].lang && data.category_id === foundTrainingData.categoryID);
                            if (foundCategoryTranslateData) {
                                router.push(`/${foundTrainingTranslateData[0].lang}/trainings/${encodeURIComponent(foundCategoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(filterTrainingTranslateDataForLang[0].title.toLocaleLowerCase())}`)
                            }
                        }
                    } else {
                        const foundTrainingData: TrainingDataType[] = filterTrainingTranslateDataForLang.map((tdata) => {
                            return trainingData.find((data) => data.id === tdata.training_id);
                        }).filter((d): d is TrainingDataType => d !== undefined);

                        let updateState = {
                            ...defaultSearchState,
                            traininCategoryTranslateDataState: trainingCategoryTranslateData,
                            trainingDataState: foundTrainingData,
                            trainingTranslateDataState: filterTrainingTranslateDataForLang,
                        }
                        dispatch(pushSearchData(updateState));
                        router.push(`/${filterTrainingTranslateDataForLang[0].lang}/search`);
                    }
                }
            }
        } else if (foundTrainerTranslateData && foundTrainerTranslateData.length > 0) {
            // trainer search
            if (foundTrainerTranslateData.length === 1) {
                router.push(`/${foundTrainerTranslateData[0].lang}/trainers/${encodeURIComponent(foundTrainerTranslateData[0].name.toLocaleLowerCase())}`);
            } else {
                const filterTrainerTranslateDataForLang: TrainerTranslateDataType[] = foundTrainerTranslateData.filter((data) => data.lang === activeLocale)
                if (filterTrainerTranslateDataForLang && filterTrainerTranslateDataForLang.length > 0) {
                    if (filterTrainerTranslateDataForLang.length === 1) {
                        router.push(`/${filterTrainerTranslateDataForLang[0].lang}/trainers/${encodeURIComponent(filterTrainerTranslateDataForLang[0].name.toLocaleLowerCase())}`);
                    } else {
                        const foundTrainerData: TrainerDataType[] = filterTrainerTranslateDataForLang.map((tdata) => {
                            return trainerData.find((data) => data.id === tdata.trainer_id);
                        }).filter((d): d is TrainerDataType => d !== undefined);

                        let updateState = {
                            ...defaultSearchState,
                            trainerDataState: foundTrainerData,
                            trainerTranslateDataState: filterTrainerTranslateDataForLang,
                        }
                        dispatch(pushSearchData(updateState));
                        router.push(`/${filterTrainerTranslateDataForLang[0].lang}/search`);
                    }
                }
            }
        } else if (foundEventTranslateData && foundEventTranslateData.length > 0) {
            // event search
            if (foundEventTranslateData.length === 1) {
                router.push(`/${foundEventTranslateData[0].lang}/events/${encodeURIComponent(foundEventTranslateData[0].title.toLocaleLowerCase())}`)
            } else {
                const filterEventTranslateDataForLang: EventTranslateDataType[] = foundEventTranslateData.filter((data) => data.lang === activeLocale);
                if (filterEventTranslateDataForLang && filterEventTranslateDataForLang.length > 0) {
                    if (filterEventTranslateDataForLang.length === 1) {
                        router.push(`/${filterEventTranslateDataForLang[0].lang}/events/${encodeURIComponent(filterEventTranslateDataForLang[0].title.toLocaleLowerCase())}`)
                    } else {
                        const foundEventData: EventDataType[] = filterEventTranslateDataForLang.map((tdata) => {
                            return eventData.find((data) => data.id === tdata.event_id);
                        }).filter((d): d is EventDataType => d !== undefined);

                        let updateState = {
                            ...defaultSearchState,
                            eventDataState: foundEventData,
                            eventTranslateDataState: filterEventTranslateDataForLang,
                        }
                        dispatch(pushSearchData(updateState));

                        router.push(`/${filterEventTranslateDataForLang[0].lang}/search`);
                    }
                }
            }
        } else if (foundNewsTranslateData && foundNewsTranslateData.length > 0) {
            // news search
            if (foundNewsTranslateData.length === 1) {
                router.push(`/${foundNewsTranslateData[0].lang}/news/${encodeURIComponent(foundNewsTranslateData[0].title.toLocaleLowerCase())}`);
            } else {
                const filterNewsTranslateDataForLang: NewsTranslateDataType[] = foundNewsTranslateData.filter((data) => data.lang === activeLocale);
                if (filterNewsTranslateDataForLang && filterNewsTranslateDataForLang.length > 0) {
                    if (filterNewsTranslateDataForLang.length === 1) {
                        router.push(`/${filterNewsTranslateDataForLang[0].lang}/news/${encodeURIComponent(filterNewsTranslateDataForLang[0].title.toLocaleLowerCase())}`);
                    } else {
                        const foundNewsData: NewsDataType[] = filterNewsTranslateDataForLang.map((tdata) => {
                            return newsData.find((data) => data.id === tdata.news_id);
                        }).filter((d): d is NewsDataType => d !== undefined)
                        let updateState = {
                            ...defaultSearchState,
                            newsDataState: foundNewsData,
                            newsTranslateDataState: filterNewsTranslateDataForLang,
                        }
                        dispatch(pushSearchData(updateState));
                        router.push(`/${filterNewsTranslateDataForLang[0].lang}/search`);
                    }
                }
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
