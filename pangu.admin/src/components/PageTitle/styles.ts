import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
    pageTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(5),
    },
    typo: {
        color: theme.palette.text.hint,
    },
    button: {
        boxShadow: theme.shadows[0],
        textTransform: 'none',
        '&:active': {
            boxShadow: theme.shadows[1],
        },
    },
})) as any;
