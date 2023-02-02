import React, { useEffect, useState } from 'react';
import { isEmpty, SearchBar, useDispatch, useSelector, View, Keyboard } from '@modules';
import { dark, light } from '@theme';
import { isDarkMode } from '@utils';
import * as S from './styles';
import { actionGetRepositoriesRequest } from '@stores/models/repositories/actions';
import If from '@components/If';
import RepoView from '@components/RepoView';
import { RepositoriesTypes } from '@interfaces';

const Home = () => {
    const dispatch = useDispatch();
    const [repositoryText, setRepositoryText] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [searchBarFocus, setSearchBarFocus] = useState(false);

    const { loading, items } = useSelector((state: any) => state.reducerRepositories);

    const onInit = () => {
        dispatch(actionGetRepositoriesRequest('facebook'));
    }

    const handleGetRepositories = () => {
        dispatch(actionGetRepositoriesRequest(repositoryText));
    }

    useEffect(() => {
        onInit();
    }, [])

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        if (searchBarFocus && !isKeyboardVisible && repositoryText) {
            handleGetRepositories();
            setSearchBarFocus(false);
        }

        if (!searchBarFocus && !isKeyboardVisible && !repositoryText) {
            onInit();
        }
    }, [isKeyboardVisible, repositoryText]);

    return (
        <S.Container
            style={{
                backgroundColor: isDarkMode() ? dark.primary : light.primary
            }}
        >
            <S.ScrollView>
                <S.TitleScreen
                    style={{
                        color: isDarkMode() ? dark.secondary : light.secondary
                    }}
                >
                    Repositórios
                </S.TitleScreen>

                <SearchBar
                    value={repositoryText}
                    onValueChange={(text: string) => setRepositoryText(text)}
                    placeholder="Buscar por repositórios"
                    cancelText='Cancelar'
                    theme={{
                        backgroundColor: isDarkMode() ? dark.primary : light.primary
                    }}
                    withCancel
                    animated
                    onFocus={() => setSearchBarFocus(true)}
                />

                <If condition={loading}>
                    <S.Loading />
                </If>

                <If condition={!loading && !isEmpty(items)}>
                    <View style={{ marginLeft: 16 }}>
                        {items.map((repo: RepositoriesTypes) => (
                            <RepoView
                                key={repo.id}
                                avatarUrl={repo.owner.avatar_url}
                                repoTitle={repo.name}
                                starCount={repo.stargazers_count}
                                username={repo.owner.login}
                                watchCount={repo.watchers}
                                repoLink={repo.html_url}
                            />
                        ))}
                    </View>
                </If>
            </S.ScrollView>
        </S.Container>
    )
}

export default Home;
