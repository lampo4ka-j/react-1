import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) =>{


    let sendMessageElement = React.createRef();

    let changeDialogsText = () => {
        let text = sendMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let dialogsElements = props.state.dialogsData.map(d => <Dialog Id={d.id} Name={d.name} img={d.srcImg} />);
    let messagesElement = props.state.messagesData.map(m => <Message message={m.message} /> );

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
            <div className={s.text}>
                <textarea onChange={changeDialogsText} ref={sendMessageElement}></textarea>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;