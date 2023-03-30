import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import numeral from 'numeral';


Modal.setAppElement('#app');

const ConfirmationModal = ( {isOpen, closeModal, deleteExpense, expenseData} ) => (

    <Modal
        isOpen={isOpen}
        contentLabel='Are you sure you want to delete this expense?'
        onRequestClose={closeModal}
        className='modal'
    >   
        <h3 className='modal_title'>Are you sure you want to delete this expense?</h3> 
        <p className='modal_body--message'> {expenseData.description}, {numeral(expenseData.amount / 100).format('$0,0.00')} </p>
        <p className='modal_body--message'> {moment(expenseData.createdAt).format('MMMM Do, YYYY')} </p>

        <div>
            <button className='button button--modal' onClick={deleteExpense}>Yes</button>
            <button className='button' onClick={closeModal}>No</button>
        </div>
    </Modal>
)

export default ConfirmationModal;