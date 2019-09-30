import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { map, cloneDeep } from 'lodash'

class TodoContainer extends Component {
    constructor(context, props) {
        super(context, props)
        this.state = {
            todoItem: '',
            todoList: []
        }

        this.addTodoItem = this.addTodoItem.bind(this)
        this.onChangeTodoItem = this.onChangeTodoItem.bind(this)
        this.completeTodoItem = this.completeTodoItem.bind(this)
    }

    onChangeTodoItem(e) {
        this.setState({
            todoItem: e.target.value
        })
    }

    addTodoItem() {
        let todoItemsList = cloneDeep(this.state.todoList)
        todoItemsList.push(this.state.todoItem)
        this.setState({
            todoList: todoItemsList,
            todoItem: ''
        })
    }

    completeTodoItem(index, e) {
        let todoItemsList = cloneDeep(this.state.todoList)
        todoItemsList.splice(index, 1)
        this.setState({
            todoList: todoItemsList
        })
    }

    render() {
        const { todoItem, todoList } = this.state

        return (
            <div>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Grid container justify="center">
                        <h1>Please Add Your Todo Items</h1>
                        <Grid item>
                            <TextField
                                id="todo-placeholder"
                                label="Enter Todo"
                                placeholder="Todo"
                                margin="normal"
                                value={todoItem}
                                onChange={this.onChangeTodoItem}
                            />
                        </Grid>

                        <Grid item>
                            <br></br>
                            <Button variant="contained" color="primary" onClick={this.addTodoItem}>Add</Button>
                        </Grid>
                    </Grid>

                    {map(todoList, (todo, index) => (
                        <Fragment key={index}>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {todo}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" onClick={(e) => this.completeTodoItem(index, e)}>Completed</Button>
                                </CardActions>
                            </Card>
                            <br></br>
                        </Fragment>
                    ))}

                </Container>
            </div>
        )
    }
}

export default TodoContainer