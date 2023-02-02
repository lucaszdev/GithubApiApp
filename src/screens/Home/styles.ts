import { styled } from '@modules';
import { ActivityIndicator } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const TitleScreen = styled.Text`
    font-size: 34px;
    font-weight: 700;
    padding-left: 16px;
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const Loading = styled(ActivityIndicator)`
    margin-top: 60px;
`;
