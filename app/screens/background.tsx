// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable max-lines */

import React from 'react';
import Svg, {
    Path,
    G,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg';

import {useIsTablet} from '@hooks/device';
import {changeOpacity, makeStyleSheetFromTheme} from '@utils/theme';

type Props = {
    theme: Theme;
}

const getStyleSheet = makeStyleSheetFromTheme((theme: Theme) => ({
    backgroundGraphic: {
        backgroundColor: changeOpacity(theme.centerChannelColor, 0.06),
        position: 'absolute',
        flex: 1,
    },
}));

const Background = ({
    theme,
}: Props) => {
    const styles = getStyleSheet(theme);

    const isTablet = useIsTablet();

    return (
        <></>
    );
};

export default Background;