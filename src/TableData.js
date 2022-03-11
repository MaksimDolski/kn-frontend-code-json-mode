const TableData = (props) => {

    const { data, handleClickOpenModal, handleClickDeleteTableRow, handleAddFormChange } = props

    
    return (
        <>
        {data && data.map(data => (  // (data, i) second argument is index
            <tr key={data.id} >
                {/* <td className='main-data id'>{ data.id = i+1 }</td> */}
                {/* <td className='main-data id'>{ data.id }</td>  */}
                <td className='main-data order'> { data.orderNo } </td>
                <td className='main-data date'> { data.date } </td>
                <td className='main-data customer'> { data.customer } </td>
                <td className='main-data trackingNo'> { data.trackingNo } </td>
                <td className='main-data status'> { data.status }</td>
                <td className='main-data consignee'> { data.consignee } </td>
            
                <td className='main-data-btn'>
                    <button onClick={ () => handleClickOpenModal(data) } className="btn-open main-data-btn"></button>
                    <button onClick={ () => handleClickDeleteTableRow(data.id) } className="btn-delete main-data-btn"></button>
                </td>
            
                <td className='main-data-btn'>
                </td>
            </tr>

        ))}
        </>
    )
}
 
export default TableData