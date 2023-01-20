import React from 'react';


export type DialogsType = {
    name: string
    id: string
}
export type MessagesType = {
    message: string
    id: string
}
export type PostsType = {
    message: string
    likesCount: string
    id: string
}


let dialogs: Array<DialogsType>= [
    {name: "Den",id: "1"},
    {name: "Ket",id: "2"},
    {name: "Marina",id: "3"},
    {name: "Elena",id: "4"}
]
let messages: Array<MessagesType> = [
    {message: "H",id: "1"},
    {message: "K",id: "2"},
    {message: "D",id: "3"}
]
let posts: Array<PostsType> = [
    {message: "Hi",likesCount: "3",id: "1" },
    {message: "Fuck",likesCount: "24",id: "2" }
]