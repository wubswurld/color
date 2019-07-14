import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledMonthSelect extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
    open: false,
  }
};
  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    //destructuring object
    const { classes, Quantity, controlQuanChange } = this.props;
    console.log(Quantity);
    return (
      <form autoComplete="off" id="month">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Quantity</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={Quantity}
            onChange={controlQuanChange}
            inputProps={{
              name: 'Quantity',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </form>
    )};
  }

ControlledMonthSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledMonthSelect);