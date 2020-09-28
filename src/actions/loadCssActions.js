import { CSS_LOADING, CSS_LOADED } from './types'

import { css } from '../component/css/css'

export const loadCss = (dispatch) => {
    Loading()
    return{
        type: CSS_LOADED,
        payload: css
    }
}

export const Loading = () => {
    return {
        type: CSS_LOADING
    }
}