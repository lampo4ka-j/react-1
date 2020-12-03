import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) =>{


    let dialogsElements = props.state.dialogsData.map(d => <Dialog Id={d.id} Name={d.name} />);
    let messagesElement = props.state.messagesData.map(m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;