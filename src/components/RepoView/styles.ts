import { styled } from '@modules';
import FastImage from 'react-native-fast-image';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-vertical: 10px;
    padding-right: 16px;
`;

export const Avatar = styled(FastImage)`
    width: 52px;
    height: 52px;
    border-radius: 100px;
`;

export const RowsContainer = styled.View`
    flex: 1;
    margin-left: 15px;
`;

export const FirsRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const RepoTitle = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

export const Stars = styled.Text`
    font-size: 14px;
    font-weight: 400;
`;

export const SecondRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Username = styled.Text``;

export const Watchers = styled.Text`
    font-size: 14px;
    font-weight: 400;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%;
    margin: 10px 0 10px 0;
`;
