import { useState } from "react"
import useFetch from "./useFetch"
import Table from "./Table"
import Modal from "./Modal"
import AddTableRow from "./AddTableRow"
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"

const Home = () => {



    const { data, setData, isLoading, error } = useFetch("http://localhost:8000/data")

    // ******* <Modal> *******
    const [isShowModal, setIsShowModal] = useState(false)

    // open button
    const [openModalData, setOpenModalData] = useState()

    const handleClickOpenModal = (data) => {
        setIsShowModal(true)
        setOpenModalData({
            id: data.id,
            orderNo: data.orderNo,
            date: data.date,
            customer: data.customer,
            trackingNo: data.trackingNo,
            consignee: data.consignee,
            status: data.status,
            })    
    }

   // modal changing

        let newFormData = {}
        const handleCLickModalChange = (e) => {
            e.preventDefault()

            const fieldName = e.target.getAttribute("name")
            const fieldValue = e.target.value

            newFormData = {...openModalData}
            newFormData[fieldName] = fieldValue

            setOpenModalData(newFormData) 

        }



        const handleClickSaveAddTableRow = () => {

            //  Data adding using Browser Mode
            const newArray = [...data, openModalData]

            setData(newArray)

            // filtering and sorting by ID
            const newArrayFilter = newArray.filter( data => data.id !== openModalData.id)
            const newArray2 = [...newArrayFilter, openModalData]

            // sorting from ID:smaller num to ID:larger num
            const newArrayFromSmToLrId = newArray2.sort( (a,b) => a.id - b.id)
        
            setData(newArrayFromSmToLrId)
    
            // Data adding using JSON

            console.log(data.customer)
         
    
            setIsShowModal(false)
         
    
        }


    // close button
     function handleClickCloseModal() {
        setIsShowModal(false)
    }
    // ******* <Modal /> *******

    // ******* <AddTableRow > *******
    const [isShowAddTableRow, setIsShowAddTableRow] = useState(false)
    
    // open button
    function handleClickOpenAddTableRow() { 
        setIsShowAddTableRow(true)
    }

    // close button
    function handleClickCloseAddTableRow() { 
        setIsShowAddTableRow(false)
    }

    // ******* <AddTableRow /> *******

    // <Table /> delete button
     const handleClickDeleteTableRow = (id) => {
         const confirm = window.confirm("Are you sure, that you want to delete this row?")
        if(confirm) {
             // JSON data deleting
            fetch('http://localhost:8000/data/' + id, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
        }
    }

    return (
        <>
            { error && <div>{ error }</div> } 
            { isLoading && <div>Loading...</div> }

            <Table
            data={ data }
            handleClickOpenModal={ handleClickOpenModal }
            handleClickDeleteTableRow={ handleClickDeleteTableRow }  
            handleClickOpenAddTableRow={ handleClickOpenAddTableRow}        
            />

            { isShowAddTableRow &&
            <AddTableRow
            data={ data }
            handleClickCloseAddTableRow={ handleClickCloseAddTableRow }
            /> }


            { isShowModal &&
            <Modal 
            data={ data }
            openModalData={ openModalData }
            handleClickCloseModal={ handleClickCloseModal }
            // test 
            handleCLickModalChange={handleCLickModalChange}
            handleClickSaveAddTableRow={handleClickSaveAddTableRow}
            /> }
        </>
    )
}
 
export default Home