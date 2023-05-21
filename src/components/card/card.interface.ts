interface Buttons{
    title: string,
    link: string
}

export interface CardInterface{
    title?: string,
    width?: string,
    HeaderBoardering?: boolean,
    buttons?: Buttons[],
    children: any
}