interface Buttons{
    title: string,
    link: string
}

export interface HeaderPageInterface{
    title?: string,
    topPart?: boolean,
    topLink?: string,
    topLinkTitle?: string,
    buttons?: Buttons[]
    placeholder?: string,
    name?: string,
    scannerButton?: boolean,
    scannerButtonHandler?: any
}