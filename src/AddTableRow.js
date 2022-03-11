import { useState } from "react"
import NewModal from "./NewModal"
// import { nanoid } from "nanoid"

const AddTableRow = (props) => {

    const { data, handleClickCloseAddTableRow } = props

    const [addFormData, setAddFormData] = useState({
        orderNo: "",
        date: "",
        customer: "",
        trackingNo: "",
        consignee: "",
        status: "",
    })

    // input onChange
    const handleAddFormChange = (e) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }

    // save button
    const handleClickSaveAddTableRow = () => {

        if(addFormData.orderNo != "") {

            fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                orderNo: addFormData.orderNo,
                date: addFormData.date,
                customer: addFormData.customer,
                trackingNo: addFormData.trackingNo,
                consignee: addFormData.consignee,
                status: addFormData.status,
            })
            }).then(response => response.json())
        // .then(data => setData(newAllTheData));
        } else {
            alert("Enter an order number please!")
        }

        // e.preventDefault()
         
        // const newData = {
        //     id: nanoid(),
        //     orderNo: addFormData.orderNo,
        //     date: addFormData.date,
        //     customer: addFormData.customer,
        //     trackingNo: addFormData.trackingNo,
        //     consignee: addFormData.consignee,
        //     status: addFormData.status,
        // }

        // const newAllTheData = [...data, newData]

        // browser mode, without JSON POST method
        // if (addFormData.orderNo != null) {
        //     setData(newAllTheData)
        //     handleClickCloseAddTableRow()
        // } else {
        //     alert("Enter the order number.")
        // }
// 
    }


    return (
        <>
            { data && <NewModal 
            handleClickCloseAddTableRow={ handleClickCloseAddTableRow } 
            handleClickSaveAddTableRow= { handleClickSaveAddTableRow }
            handleAddFormChange={ handleAddFormChange }
            />}
        </>
    )

}
 
export default AddTableRow