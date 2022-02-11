import {IconButton} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { isEmpty } from "lodash";
import * as React from "react";
import styles from "./_dropDownMenu.module.scss";
import Icon from "components/Icon";
import DropDownMenuProps from "interfaces/props/IDropDownMenu";
import ActionProps from "interfaces/props/IAction";
/**
 *
 * @param id
 * @param actions
 * @param item
 * @constructor
 */
const DropDownMenu = ({ id, actions, item }: DropDownMenuProps) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.DropDownMenu}>
      {!isEmpty(actions) && (
        <>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls={`menu-${id}`}
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            {item}
          </IconButton>
          <Menu
            id={`menu-${id}`}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              className: styles.DropDownMenuListContainer,
              id: `menu-${id}-paper`,
            }}>
            {actions.map(({ icon, label, onClick }: ActionProps) => (
              <MenuItem
                key={label}
                onClick={() => {
                  onClick();
                  setAnchorEl(null);
                }}>
                <Icon component={icon} />
                <Typography component="span">{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
};



export default DropDownMenu;
