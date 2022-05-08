import React, {useState} from 'react';
import {Row,Col,Form, Button} from 'react-bootstrap';

const TransactionEdit = (props) => {
    const [formIsValid, setFormISValid] = useState(true);
    const [transaction, setTransaction] = useState({
        description: props.items.description || '',
        amount: props.items.amount || '',
        date: new Date(props.items.date).toISOString().split('T')[0] || '',
        title: props.items.title || '',
        type_of: props.items.type_of || '',
        category_id: props.items.category_id || '',
        receipt: props.items.receipt || ''
    })

    const categoryList = props.categories;
    
    const uploadImage = (event) => {
        setFormISValid(false);
        const image = event.target.files[0];
        const data = new FormData();
        data.append('file', image)
        data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
        data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_IDENTIFIER)
        fetch(`https://api.cloudinary.com/v1_1/${ process.env.REACT_APP_CLOUDINARY_IDENTIFIER }/image/upload`, {
            method: 'POST',
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setTransaction((prevStates) => ({
                ...prevStates, [event.target.name]: data.url
            }))
            setFormISValid(true);
        })
    }

    const handleChange = (event) => {
        setTransaction((prevStates) => ({
            ...prevStates, [event.target.name]: event.target.value
        }))
    };

    const updateHandler = (event) => {
        event.preventDefault();  
        props.onUpateTransactionData(transaction);
    }

    return (
    <div>
        <form onSubmit={updateHandler}>
            <Row className="align-items-center">
                <Col sm={4} className="my-1">
                    <label>Income / Expense</label>
                    <Form.Select name="type_of" value={transaction.type_of}
                        onChange={handleChange} required>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                    </Form.Select>
                </Col>  
            </Row>

            <Row className="align-items-center">
                <Col sm={3} className="my-1">
                    <label>Date</label>
                    <Form.Control name="date" type="date" value={transaction.date} 
                        onChange={handleChange} required/>
                </Col>
                
                <Col sm={3} className="my-1">
                    <label>Category</label>
                    <Form.Select name="category_id" value={transaction.category_id} 
                        onChange={handleChange} required>
                    {categoryList.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.icon} {category.name}
                        </option>
                    ))}
                    </Form.Select>
                </Col>

                <Col sm={3} className="my-1">
                    <label>Title</label>
                    <Form.Control name="title" value={transaction.title} 
                        onChange={handleChange} required maxLength={20} />
                </Col>

                <Col sm={2} className="my-1">
                    <label>Amount</label>
                    <Form.Control name ="amount" type="number" value={transaction.amount} 
                        onChange={handleChange} required placeholder="$" step="0.01" />
                </Col>
            </Row>  

            <Row className="align-items-center">
                <Col sm={5} className="my-1">
                    <label>Description</label>
                    <Form.Control name="description" type="text" value={transaction.description}
                        onChange={handleChange}/>
                </Col>

                <Col sm={3} className="my-1">
                    <label>Upload</label>
                    <Form.Control name="receipt" type="file"
                        onChange={uploadImage}/>
                </Col>
            
                <Col sm={2} className='btn-group ml-auto mt-4'>
                    {formIsValid && <Button type="submit">Update</Button>}
                    {!formIsValid && <Button type="submit" disabled>Uploading..</Button>}
                </Col>

                <Col sm={2} className='btn-group ml-auto mt-4'>
                    <Button type="button" onClick={props.onCancel}>Cancel</Button>
                </Col>
            </Row>
        </form>
    </div>
    );
};

export default TransactionEdit;