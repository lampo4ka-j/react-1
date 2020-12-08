const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                {id: 0, name: 'Sasha', srcImg: 'https://f1.upet.com/n_LoXDrTFq2l_2.jpg'},
                {id: 1, name: 'Masha', srcImg: 'http://img.crazys.info/files/i/2013.3.31/1364704553_z26.jpg'},
                {
                    id: 2,
                    name: 'Koly',
                    srcImg: 'https://yt3.ggpht.com/a/AATXAJyDytRa1iX2xd3CLMo0H-moBlkNskqv5vqIAnzRsw=s900-c-k-c0xffffffff-no-rj-mo'
                },
                {
                    id: 3,
                    name: 'Vova',
                    srcImg: 'https://yt3.ggpht.com/a/AATXAJxg1QyagXVhzjUSAMjqAXQevsgvUGiLmov2mhoB=s900-c-k-c0xffffffff-no-rj-mo'
                },
            ],
            messagesData: [
                {id: 1, message: 'hello'},
                {id: 2, message: 'hello1'},
                {id: 3, message: 'hello2'},
                {id: 4, message: 'hello3'},
            ],
            changeMessage: '',
        },
        profilePage: {
            postData: [
                {message: 'hiiiii', likeCount: 15},
                {message: 'hiiiii5345', likeCount: 30},
            ],
            newPostText: 'it-sanya',
        },
        friendsPage: {
            friendsAvaData: [
                {id: 0, name: 'Nata', srcImg: 'https://f1.upet.com/n_LoXDrTFq2l_2.jpg'},
                {
                    id: 1,
                    name: 'Oleg',
                    srcImg: 'https://yt3.ggpht.com/a/AATXAJyDytRa1iX2xd3CLMo0H-moBlkNskqv5vqIAnzRsw=s900-c-k-c0xffffffff-no-rj-mo'
                },
                {id: 2, name: 'Koly', srcImg: 'http://img.crazys.info/files/i/2013.3.31/1364704553_z26.jpg'},
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _sendMessage() {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.changeMessage,
            };

             this._state.messagesPage.messagesData.push(newMessage);
             this._state.messagesPage.changeMessage = '';
             this._callSubscriber();
    },
    _newMessageText(text) {
        this._state.messagesPage.changeMessage = text;
        this._callSubscriber();
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _newText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber();
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            this._addPost();
        }else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._newText(action.text);
        }else if(action.type === SEND_MESSAGE){
            this._sendMessage();
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._newMessageText(action.text);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text,
    }
}

export default store;

window.store = store;