import React, { Component } from 'react';
import { connect } from 'react-redux';
import deleteTask from './../../actions/deleteTask';
import editTask from './../../actions/editTask';
import doneTask from './../../actions/doneTask';
import './ToDoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editShow: false,
            taskValue: '',
        }
    }
    editTask(e) { 
        this.setState({ editShow: true });
    }
    taskDone(e) {
        this.props.doneTask({
            done: true,
            timestamp: this.props.timestamp
        })
    }
    editDone(e) {
        this.setState({ editShow: false });
        this.props.editTask({
            value: this.state.taskValue,
            timestamp: this.props.timestamp,
        });
    }
    handeKeyPress(e) {
        if (e.key === 'Enter') {
        this.setState({ editShow: false });
          if (this.state.taskValue.trim()) {
            this.props.editTask({
                value: this.state.taskValue,
                timestamp: this.props.timestamp
            });
          }
        }
      } 
    handleChange(e) {
        this.setState({
            taskValue: e.target.value 
        })
    }
    deleteItem(e) {
        this.props.removeTask(this.props.timestamp);
    }
    render() {
        return (
            <div className="todo-item"
                style={{
                    opacity: this.props.done ? '.5' : '1',
                }}
            >
                <div
                     className="check" 
                     onClick={this.taskDone.bind(this)}
                     style={{
                         borderColor: this.props.done ? 'rgb(76, 249, 72)' : '#111',
                         backgroundColor: this.props.done ? 'rgb(76, 249, 72)' : '#fff'
                     }}
                >
                    <svg 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26 26"
                        width="16px" 
                        height="16px"
                        fill={this.props.done ? '#fff' : '#333'}
                        style={{
                            marginTop: '7px'
                        }}
                    >
                        <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
                    </svg>
                </div>
                <span className="count">{this.props.count + 1}.</span>
                <p style={{ display: this.state.editShow ? 'none' : 'block' }}>{this.props.task}</p>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handeKeyPress.bind(this)}
                    className="change-task"
                    defaultValue={this.props.task}
                    autoFocus
                    style={{
                        display: this.state.editShow ? 'block' : 'none'
                    }}
                />
             
                <svg 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 26"
                    width="18px" 
                    height="18px"
                    fill="#fff"
                    onClick={this.editDone.bind(this)}
                    style={{
                        display: this.state.editShow ? 'block' : 'none',
                        cursor: 'pointer',
                        flexGrow: '1',
                    }}
                >
                    <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
                </svg>

                <svg 
                    version="1.1" 
                    id="Capa_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="0px" 
                    y="0px"
                    width="16px" 
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 528.899 528.899"
                    style={{
                        cursor: 'pointer',
                        flexGrow: '1',
                        display: this.state.editShow ? 'none' : 'block'

                    }}
                    onClick={this.editTask.bind(this)}
                  >
                <g>
                    <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                        c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                        C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                        L27.473,390.597L0.3,512.69z"/>
                </g>
                </svg>
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 47.971 47.971"
                    width="16px"
                    height="16px"
                    onClick={this.deleteItem.bind(this)}
                    style={{
                        cursor: 'pointer',
                        flexGrow: '1',
                    }}
                >
                    <g>
                        <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#FFFFFF" />
                    </g>
                </svg>
               
            </div >
        )
    }
}

const mapStateToProps = state => ({
    todos: state.rootReducer.todos,
});

const mapDispatchToProps = dispatch => ({
    removeTask: data => {
        dispatch(deleteTask(data))
    },
    editTask: data => {
        dispatch(editTask(data))
    },
    doneTask: data => {
        dispatch(doneTask(data))
    }
});
   

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
