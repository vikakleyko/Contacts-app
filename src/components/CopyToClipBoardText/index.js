import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyToClipBoardText = ({ text }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      <FileCopyIcon className={classes.icon} />
      {text}
    </Box>
  );
};

CopyToClipBoardText.propTypes = {
  text: PropTypes.string.isRequred,
};
