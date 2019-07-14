import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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

class ControlledOpenSelect extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
    open: false,
  }
};
  // handleChange = (event) => {
  //   this.setState({ Price: event.target.value });
  // };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    //destructuring object
    const { classes, value, controlChange } = this.props;
    // console.log(this.state.Price);
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Color</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={value}
            onChange={controlChange}
            inputProps={{
              name: 'data',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={"blue"}>Blue</MenuItem>
            <MenuItem value={"pink"}>Pink</MenuItem>
          </Select>
        </FormControl>
      </form>
    )};
  }

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);