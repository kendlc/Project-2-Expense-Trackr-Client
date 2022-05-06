import React, {useState, useEffect} from 'react';
import createRequest from '../../request';
import {Row,Col,Form, Button} from 'react-bootstrap';

const TransactionEdit = (props)=>{
    const [enteredDescription, setEnteredDescription] = useState(props.items.description);
    const [enteredAmount, setEnteredAmount] = useState(props.items.amount);
    const [enteredDate, setEnteredDate] = useState(new Date(props.items.date).toISOString().split('T')[0]);
    const [enteredTitle, setEnteredTitle] = useState(props.items.title);
    const [enteredType, setEnteredType] = useState(props.items.type_of);
    const [enteredCategory, setEnteredCategory]=useState(props.items.category_id);
    const [url, setUrl] = useState(props.items.receipt);
    const [categoryList, setCategoryList] = useState([]); 
    const [formIsValid, setFormISValid] = useState(true);
    const [updateUrl, setUpdateUrl] = useState(false);
    const uploadImage =(e) => {
        setFormISValid(false);
        const image = e.target.files[0];
        const data = new FormData();
        data.append('file', image)
        data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
        data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_IDENTIFIER)
        fetch(`https://api.cloudinary.com/v1_1/${ process.env.REACT_APP_CLOUDINARY_IDENTIFIER }/image/upload`,{
            method: 'post',
            body: data
        }).then(resp => 
            resp.json()
        ).then(data => {
            setUrl(data.url);
            setUpdateUrl(true);
            setFormISValid(true);
            if (data.url){
                setFormISValid(true);
            }
        })
    }

    const input = '/categories.json';
    useEffect(() => {
        const fetchCategories = async() => { 
            createRequest(input).then((data)=> {
                setCategoryList(data);       
            })
        }
        const timer = setTimeout(() => {
            fetchCategories();
        }, 500);
        return () => clearTimeout(timer);    
    }, [input]);

    let record = props.items;
    let defaultType = record.type_of? record.type_of : "";
    let defaultAmount = record.amount? record.amount : "";
    let defaultUrl = record.receipt? record.receipt : "";
    let defaultDate = record.date? new Date(record.date).toISOString().split('T')[0]: "";
    let defaultTitle = record.title? record.title: "";
    let defaultDescription = record.description? record.description : "";
    let defaultFile = record.receipt? record.receipt : "";
    let defaultCategory = [];

    categoryList.map((category)=> {
        if (record.category_id && category.id === record.category_id){
            defaultCategory.push(category.id, category.icon, category.name);
        }
    });
    const filteredCategoryList = enteredType==="expense" ? categoryList.slice(0,categoryList.length-3) : categoryList.slice(-3);
    console.log(props, url, defaultUrl);
    const updateHandler =(event) => {
        event.preventDefault();  
        if (updateUrl) {
            setUrl(url); 
        }
        const transactionData = {
            type_of: enteredType? enteredType:defaultType,
            amount: enteredAmount? enteredAmount:defaultAmount, 
            title: enteredTitle? enteredTitle:defaultTitle,
            description: enteredDescription? enteredDescription:defaultDescription,  
            receipt: updateUrl? url : defaultUrl, 
            date: enteredDate? enteredDate: defaultDate,
            category_id: Number(enteredCategory)? Number(enteredCategory):defaultCategory[0],
            id: Number(props.items.id)
        };
        props.onUpateTransactionData(transactionData);
    }
    return (
    <div>
        <form onSubmit={updateHandler}>
            <Row className="align-items-center">
                <Col sm={4} className="my-1">
                    <label>Income / Expense</label>
                    <Form.Select value={enteredType} onChange={(e) => setEnteredType(e.target.value)} required>
                    {/* <option value={defaultType} disabled>Select Type</option> */}
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                    </Form.Select>
                </Col>  
            </Row>

            <Row className="align-items-center">
                <Col sm={3} className="my-1">
                    <label>Date</label>
                    <Form.Control type="date" value={enteredDate} onChange={(e)=> setEnteredDate(e.target.value)}/>
                </Col>
                
                <Col sm={3} className="my-1">
                    <label>Category</label>
                    <Form.Select value={enteredCategory} onChange={(e)=>setEnteredCategory(e.target.value)}>
                    {filteredCategoryList.map(category => (
                        <option value={category.id}>{category.icon} {category.name}</option>
                    ))}
                    </Form.Select>
                </Col>

                <Col sm={3} className="my-1">
                    <label>Title</label>
                    <Form.Control type="Title" value={enteredTitle} maxLength={20} onChange={(e)=> setEnteredTitle(e.target.value)}/>
                </Col>

                <Col sm={2} className="my-1">
                    <label>Amount</label>
                    <Form.Control type="number" value={enteredAmount} min="0.01" step="0.01" onChange={(e) => setEnteredAmount(e.target.value)} placeholder="$"/>
                    {/* {!amountIsValid && <p className='error-text'>Please enter an amount </p>} */}
                </Col>
            </Row>  

            <Row className="align-items-center">
                <Col sm={5} className="my-1">
                    <label>Description</label>
                    <Form.Control type="text" value={enteredDescription} onChange={(e)=> setEnteredDescription(e.target.value)}/>
                </Col>

                <Col sm={3} className="my-1">
                    <label>Upload</label>
                    <Form.Control type="file" onChange={uploadImage}/>
                </Col>
            
                <Col sm={2} className='btn-group ml-auto mt-4'>
                    {formIsValid &&
                        <Button type="submit">Update</Button>
                    }
                    {!formIsValid &&
                        <Button type="submit" disabled>Uploading..</Button>
                    }
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