import React , {useState} from 'react'
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { 
  Form,
  Button,
  Card,
  Table,
  Container,
  Row,
  Col, } from 'react-bootstrap';

function ToDolist() {
    const [state, setState] = useState({
      taskName : "",
      taskStatus: "",
      startDate: "",
      list_of_task : []
    })
    // const [startDate, setStartDate] = useState();

    const handleInputChange = (event) => {
      setState((prevProps) => ({
        ...prevProps,
        [event.target.name] : event.target.value,
      }));
    }

    const handleDateChange = (date) => {
      setState((prevProps) => ({
        ...prevProps,
        startDate : date
      }));
    }

    const addItem = () => {
        if(state.userInput !== ''){
            const item ={
              id :  Math.random(),
              taskName : state.taskName,
              taskStatus : state.taskStatus,
              Date : state.startDate
            }
          const list_of_task = [...state.list_of_task]
          list_of_task.push(item);
          
          setState((prevProps) => ({
            ...prevProps,
            taskName : "",
            taskStatus: "",
            startDate : "",
            list_of_task : list_of_task
          }));
        }
    }

    const deleteItem = (id) => {
      const list_of_task = [...state.list_of_task];
      const updatedList = list_of_task.filter(item => item.id !== id);
      setState((prevProps) => ({
        ...prevProps,
        list_of_task:updatedList
      }));
    }

    const editItem = (id) => {
      state.list_of_task.map(item => {
        if(item.id == id){
          setState((prevProps) => ({
            ...prevProps,
            taskName : item.taskName,
            taskStatus: item.taskStatus,
            startDate: item.Date
          }))
        }
      }) 
    }

    const UpdateItem = (id) => {
      const list_of_task = [...state.list_of_task];
      state.list_of_task.map((item,i) => {
        if(item.id == id){
          list_of_task[i].taskName = state.taskName,
          list_of_task[i].taskStatus = state.taskStatus
          list_of_task[i].Date = state.startDate
        }
      })
      setState((prevProps) => ({
        ...prevProps,
        taskName : "",
        taskStatus: "",
        list_of_task : list_of_task
      })) 
    };

    const confirmationDelete = (id) => {
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure you wanr to delete this task.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => deleteItem(id)
          },
          {
            label: 'No',
            onClick: () => console.log("No deletion!")
          }
        ]
      })
    };

    return (    
        <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card style={{ width: '100%' }}>
                <Card.Header>
                  <Card.Title as="h4">ToDoList</Card.Title>
                </Card.Header>
                <Card.Body>
                <Form>
                <Row>
                   <Col md='3'>
                      <Form.Group>
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="taskName"
                          value={state.taskName}
                          onChange = {() => handleInputChange(event)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md='3'>
                      <Form.Group>
                       <Form.Label>Status</Form.Label>
                        <Form.Control 
                          as="select"
                          name="taskStatus"
                          value = {state.taskStatus}
                          onChange = {() => handleInputChange(event)}
                        >
                          <option value="">select</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md='3'>
                     <Form.Label>Date</Form.Label><br/>
                      <DatePicker 
                        selected={state.startDate ? state.startDate : null}
                        placeholderText='Date'
                        onChange = {date => handleDateChange(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                      />
                    </Col>
                    <Col md='3'>
                      <Form.Label></Form.Label>
                      <Button 
                        variant="primary" 
                        // type="submit"
                        style={{marginTop:"25px"}}
                        onClick = {addItem}
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
          <br/><br/>
        <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">To Do List</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">TaskName</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Date</th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      state.list_of_task.map(item => {
                          return(
                            <tr>
                              <td>{item.taskName}</td>
                              <td>{item.taskStatus}</td>
                              <td>{moment(item.Date).format("DD-MM-YYYY")}</td>
                              <td>
                              <Button 
                                variant="primary" 
                                type="submit"
                                onClick = {() => editItem(item.id)}
                              >
                                Edit
                              </Button>
                              </td>
                              <td>
                              <Button 
                                variant="primary" 
                                type="submit"
                                onClick = {() => UpdateItem(item.id)}
                              >
                                Update
                              </Button>
                              </td>
                              <td>
                                <Button 
                                  variant="danger" 
                                  type="submit"
                                  onClick = {() => confirmationDelete(item.id)}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          )
                      })
                    
                  } 
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        </>
    )
  }


export default ToDolist;
