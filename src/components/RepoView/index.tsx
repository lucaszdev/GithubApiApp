import React from "react";
import { dark, light } from "@theme";
import { isDarkMode, Routes, useNavigation } from "@utils";
import * as S from './styles';

type RepoViewProps = {
    avatarUrl: string;
    repoTitle: string;
    starCount: number;
    username: string;
    watchCount: number;
    repoLink: string;
}

export default function RepoView({
    avatarUrl,
    repoTitle,
    starCount,
    username,
    watchCount,
    repoLink
}: RepoViewProps) {
    const navigation = useNavigation();

    return (
        <>
            <S.Container
                onPress={() => navigation.navigate(Routes.REPO_DETAILS, { repositoryLink: repoLink, ownerRepo: username })}
            >
                <S.Avatar source={{ uri: avatarUrl }} />

                <S.RowsContainer>
                    <S.FirsRow>
                        <S.RepoTitle
                            style={{
                                color: isDarkMode() ? dark.secondary : light.secondary
                            }}
                        >
                            {repoTitle}
                        </S.RepoTitle>
                        <S.Stars
                            style={{
                                color: isDarkMode() ? dark.secondary : light.secondary
                            }}
                        >
                            {starCount} star{starCount > 1 && 's'}
                        </S.Stars>
                    </S.FirsRow>

                    <S.SecondRow>
                        <S.Username
                            style={{
                                color: isDarkMode() ? dark.secondary : light.secondary
                            }}
                        >
                            {username}
                        </S.Username>
                        <S.Watchers
                            style={{
                                color: isDarkMode() ? dark.secondary : light.secondary
                            }}
                        >
                            {watchCount} watch{watchCount > 1 && 'ers'}
                        </S.Watchers>
                    </S.SecondRow>
                </S.RowsContainer>
            </S.Container>

            <S.Divider
                style={{
                    backgroundColor: isDarkMode() ? dark.divider : light.divider
                }}
            />
        </>
    )
}