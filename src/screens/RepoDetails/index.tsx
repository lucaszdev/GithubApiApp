import React from 'react';
import { dark, light } from '@theme';
import { isDarkMode, useNavigation } from '@utils';
import { faArrowUpRightFromSquare, FontAwesomeIcon, WebView, Linking } from '@modules';
import * as S from './styles';

type RepoDetailsParams = {
    route: {
        params: {
            repositoryLink: string;
            ownerRepo: string;
        }
    }
};

const RepoDetails = ({ route: { params: { repositoryLink, ownerRepo } } }: RepoDetailsParams) => {
    const navigation = useNavigation();

    const handleExternalLink = () => {
        Linking.openURL(repositoryLink);
    };

    navigation.setOptions({
        title: ownerRepo,
        headerStyle: {
            backgroundColor: isDarkMode() ? dark.primary : light.primary,
        },
        headerTitleStyle: {
            color: isDarkMode() ? dark.secondary : light.secondary
        },
        headerRight: () => (
            <S.OpenInBrowserButton
                onPress={() => handleExternalLink()}
            >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#007AFF' />
            </S.OpenInBrowserButton>
        ),
    });

    return (
        <S.Container
            style={{
                backgroundColor: isDarkMode() ? dark.primary : light.primary
            }}
        >
            <WebView
                source={{ uri: repositoryLink, baseUrl: '' }}
                startInLoadingState={true}
                renderLoading={() => <S.Loading />}
            />
        </S.Container>
    )
}

export default RepoDetails;
