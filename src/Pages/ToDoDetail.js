import { Row, Col, FormControl, Button } from 'react-bootstrap';

export default function ToDoDetail({
    toDoList,
    deleteSpecificToDo,
    editData,
    triggerEditButton,
    handleChange
}) {
    return (<Row>
        {toDoList.map((e, index) => {
            return (
                <Row key={index} className='mt-3'>
                    <Col>
                        {
                            editData.isEditing && editData.targetEditIndex === index
                                ?
                                <FormControl
                                placeholder='...' 
                                value={e} 
                                onChange = {(event) => {
                                    handleChange(index, event.target.value);
                                }}
                                />
                                :
                                <p>{e}</p>
                        }
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                triggerEditButton(!editData.isEditing, index);
                            }}>
                            {
                                editData.isEditing && editData.targetEditIndex === index
                                    ?
                                    'Simpan'
                                    :
                                    'Edit'}
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => {
                            deleteSpecificToDo(index)
                        }}>Remove</Button>
                    </Col>
                </Row>)

        })}
    </Row>
    );
}