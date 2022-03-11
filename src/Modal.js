import { useEffect, useState } from "react"

const Modal = (props) => {

    const { data, handleClickCloseModal, openModalData, handleCLickModalChange, handleClickSaveAddTableRow} = props

    // input onChange

    


    return (
        <>
        { data && 
            <div className="modal">
                <div className="modal-content">
                    <span onClick={ handleClickCloseModal } className="close">&times;</span>
                        <div className="modal-body"> 
                            <div className="shipment-form">
                                <p className="details">shipment details</p>
                                <form>
                                    <p>
                                        <label htmlFor="orderNo">orderNo</label>
                                        <input type="text" id="orderNo" name="orderNo" 
                                        defaultValue={ openModalData.orderNo } 
                                        onChange={ handleCLickModalChange }
                                        />
                                    </p>
                    
                                    <p>
                                        <label htmlFor="date">date</label>
                                        <input type="date" id="date" name="date" 
                                        defaultValue={ openModalData.date }
                                        onChange={ handleCLickModalChange }


                                        />
                                    </p>

                                    <p>
                                        <label htmlFor="customer">customer</label>
                                        <input type="text" id="customer" name="customer" defaultValue={ openModalData.customer }
                                        onChange={ handleCLickModalChange }

                                         />
                                    </p>

                                    <p>
                                        <label htmlFor="trackingNo">trackingNo</label>
                                        <input type="text" id="trackingNo" name="trackingNo" defaultValue={ openModalData.trackingNo }
                                        onChange={ handleCLickModalChange }


                                        />
                                    </p>

                                    <p>
                                        <label htmlFor="consignee">consignee</label>
                                        <input type="text" id="consignee" name="consignee" defaultValue={ openModalData.consignee }
                                        onChange={ handleCLickModalChange }


                                        />
                                    </p>

                                    <p>
                                        <label htmlFor="status">status</label>
                                        <input type="text" id="status" name="status" defaultValue={ openModalData.status }
                                        onChange={ handleCLickModalChange }


                                        />
                                    </p>

                                </form>
                                    <button onClick={handleClickSaveAddTableRow} className="btn-shipment btn-shipment-save">Save</button>
                                    <button onClick={ handleClickCloseModal } className="btn-shipment btn-shipment-close">Close</button>
                            </div>
                        </div>
                </div>
         </div>
          }
        
        </>
    )
}


export default Modal