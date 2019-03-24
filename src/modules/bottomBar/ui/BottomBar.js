import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomBarFeature from "../feature/BottomBarFeature";
import {getIcon} from "../../../lib/icons/factory";

const styles = {
    root: {
        bottom: 0,
        position: 'fixed',
        width: '100%'
    },
};

class SimpleBottomNavigation extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <BottomBarFeature>
                {
                    ({items, selected, onClick}) => (
                        <BottomNavigation
                            value={selected}
                            onChange={onClick}
                            showLabels
                            className={classes.root}
                        >
                            {
                                items.map(item => {
                                    return <BottomNavigationAction key={item.id} label={item.name} icon={getIcon(item.icon)} />
                                })
                            }
                        </BottomNavigation>
                    )
                }
            </BottomBarFeature>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
