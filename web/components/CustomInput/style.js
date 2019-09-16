import { primaryColor, dangerColor, successColor, defaultFont } from '../../theme';

const customInputStyle = {
    disabled: {
        '&:before': {
            borderColor: 'transparent !important',
        },
    },
    underline: {
        marginTop: '10px !important',
        '&:hover:not($disabled):before,&:before': {
            borderColor: '#D2D2D2 !important',
            borderWidth: '1px !important',
        },
        '&:after': {
            borderColor: primaryColor,
        },
    },
    underlineError: {
        '&:after': {
            borderColor: dangerColor,
        },
    },
    underlineSuccess: {
        '&:after': {
            borderColor: successColor,
        },
    },
    whiteUnderline: {
        '&:hover:not($disabled):before,&:before': {
            borderColor: '#FFFFFF',
        },
        '&:after': {
            borderColor: '#FFFFFF',
        },
    },
    labelRoot: {
        ...defaultFont,
        color: 'rgba(0,0,0,0.65) !important',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '1.5',
        top: '10px',
        letterSpacing: 'unset',
        fontFamily: 'inherit',
        '& + $underline': {
            marginTop: '0px',
        },
    },
    labelRootError: {
        color: dangerColor + ' !important',
    },
    labelRootSuccess: {
        color: successColor + ' !important',
    },
    formControl: {
        margin: '0 0 10px 0',
        paddingTop: '27px',
        position: 'relative',
        '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
            color: '#495057',
        },
    },
    input: {
        color: '#495057',
        height: 'unset',
        '&,&::placeholder': {
            fontSize: '14px',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: '400',
            lineHeight: '1.42857',
            opacity: '1',
        },
        '&::placeholder': {
            color: '#AAAAAA',
        },
    },
    whiteInput: {
        '&,&::placeholder': {
            color: '#FFFFFF',
            opacity: '1',
        },
    },
};

export default customInputStyle;
