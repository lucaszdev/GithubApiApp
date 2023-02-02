import { styled } from '@modules';
import { ActivityIndicator } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Loading = styled(ActivityIndicator)`
    position: absolute;
    top: 30px;
    align-self: center;
`;

export const OpenInBrowserButton = styled.TouchableOpacity``;

