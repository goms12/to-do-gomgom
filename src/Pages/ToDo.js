import {
    Card,
    Button, Container, FormControl, Row, Col, Alert
} from "react-bootstrap";

import ToDoDetail from './ToDoDetail';

import { useState } from 'react';
// import { isValidDateValue } from "@testing-library/user-event/dist/utils";

export default function ToDo() {

    const [toDoList, setTodoList] = useState([]);
    const [newToDo, setNewToDo] = useState("");
    const [editData, setisEditData] = useState({
        isEditing: false,
        targetEditIndex: null
    });
    const [isHideAlertValidation, setisHideAlertValidation] = useState(true);
    const[isHideSuccessValidation, setisHideSuccessValidation] = useState(true);
    const[isHideDeleteValidation, setisHideDeleteValidation] = useState(true);

    const saveNewTodo = () => {
        if(newToDo !== ''){
            setTodoList([
                ...toDoList,
                newToDo
            ]);
            setisHideAlertValidation(true);
            setisHideSuccessValidation(false);
            setisHideDeleteValidation(true);
            
            setNewToDo('');
        } else {
            setisHideAlertValidation(false);
            setisHideSuccessValidation(true);
            setisHideDeleteValidation(true);
            
        }
        
    }

    const deleteSpecificToDo = (target_deleted_index) => {
        let newToDoList = [];
        for (let index = 0; index < toDoList.length; index++) {
            if (index !== target_deleted_index) {
                newToDoList.push(toDoList[index]);
                setisHideDeleteValidation(true);
            } else {
                setisHideDeleteValidation(false);
                setisHideSuccessValidation(true);
            }
        }
        setTodoList(newToDoList);
    }

    const triggerEditButton = (isEditing, targetEditIndex) => {
        setisEditData({
            isEditing,
            targetEditIndex
        })
    }

    const handleChange = (index, newValue) => {
        let newToDoList = [...toDoList];
        newToDoList[index] = newValue;
        setTodoList(newToDoList);
    }

    return (<Container className='m-4'>
        <Card>
            <Card.Header>To Do</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <FormControl placeholder='Add To Do List Here ...'
                            value={newToDo}
                            onChange={(event) => {
                                setNewToDo(event.target.value)
                            }}
                        />
                    </Col>
                    <Col>
                        <Button onClick={() => {
                            saveNewTodo();
                        }}>Add Task</Button>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <Alert hidden = {isHideAlertValidation} key={'danger'} variant={'danger'}>
                            Task Tidak Boleh Kosong!
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert hidden = {isHideSuccessValidation} key={'success'} variant={'success'}>
                                Task Berhasil di Simpan!
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert hidden = {isHideDeleteValidation} key={'success'} variant={'success'}>
                                Task Berhasil di Hapus!
                        </Alert>
                    </Col>
                </Row>
                <ToDoDetail
                    toDoList={toDoList}
                    editData={editData}
                    triggerEditButton={(isEditing, targetEditIndex) => {
                        triggerEditButton(isEditing, targetEditIndex)
                    }}
                    deleteSpecificToDo={(target_deleted_index) => {
                        deleteSpecificToDo(target_deleted_index)
                    }}
                    handleChange={(index, newValue) => {
                        handleChange(index, newValue);
                    }}
                />
            </Card.Body>
        </Card>
    </Container>
    );
}