import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./TextFieldStyles";
import './AddToDo.css';
import AddTask from './../../actions/addTask';


class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileldValue: ''
        }
    }
    handleChange(e) {
        this.setState({
            fileldValue: e.target.value
        });
    }
    handleClick(e) {
        if (this.state.fileldValue.trim()) {
            this.props.AddTodo({
                value: this.state.fileldValue,
                timestamp: Date.now().toString(),
                taskDone: false
            });
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="add-todo">
                <TextField
                    id="standard-dense"
                    name="add_todo"
                    placeholder="Например купить продукты"
                    label="Добавить задачу"
                    autoFocus={true}
                    className={classes.textField}
                    onChange={this.handleChange.bind(this)}
                    InputProps={{
                        classes: {
                            root: classes.input,
                            focused: classes.inputFocused
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.label,
                            focused: classes.labelFocused
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClick.bind(this)}
                    classes={{
                        root: classes.button
                    }}
                >
                    Добавить
                </Button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    todos: state.rootReducer.todos
});

const mapDispatchToProps = dispatch => {
    return {
        AddTodo: (data) => {
            dispatch(AddTask(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddToDo));
