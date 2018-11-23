import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './../TodoItem/TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TodoItems.css';
import dragTask from './../../actions/dragTask';

const reorderTask = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

class TodoItems extends Component {
    constructor(props) {
        super(props);
    }
    onDragEnd = result => {
        if (!result.destination) {
            return;
        }

        if (this.props.todos) {
            const items = reorderTask(
                this.props.todos,
                result.source.index,
                result.destination.index
            );
            this.props.dragTask(items)
        }
    }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {
                        (provided, snapshot) => (
                            <div className="todo-items" ref={provided.innerRef}>
                                {this.props.todos ? this.props.todos.map((item, index) => {
                                    return (
                                        <Draggable key={index} draggableId={item.timestamp} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <TodoItem
                                                        key={index}
                                                        task={item.value}
                                                        timestamp={item.timestamp}
                                                        count={index}
                                                        done={item.taskDone}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                }) : ''}
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.rootReducer.todos
});

const mapDispatchToProps = dispatch => ({
    dragTask: data => {
        dispatch(dragTask(data));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);



