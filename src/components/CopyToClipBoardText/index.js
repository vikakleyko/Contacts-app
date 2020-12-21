import PropTypes from "prop-types";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useCallback, useState } from "react";
import { useCopyToClipboard } from "react-use";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};

const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Copy",
  [STATUS_COPY.COPIED]: "Copied",
};

export const CopyToClipBoardText = ({ text }) => {
  const classes = useStyles();
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  const getTooltipTitle = () => {
    switch (statusCopy) {
      case STATUS_COPY.COPY:
        return "Copy";
      case STATUS_COPY.COPIED:
        return "Copied";
      default:
        return "";
    }
  };

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
        <Button className={classes.root} onClick={onClickCopy}>
          <FileCopyOutlinedIcon className={classes.icon} fontSize="small" />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipBoardText.propTypes = {
  text: PropTypes.string.isRequired,
};
