import { Html5Qrcode } from "html5-qrcode";
import React from "react";
import './scanner.style.scss';

export class Scanner extends React.Component<any,any>{

    constructor(props: any){
        super(props);
    }

    async componentDidMount() {
        const deviceId = await Html5Qrcode.getCameras().then(value => value[1].id)
        const html5QrCode = new Html5Qrcode("scanner");
        html5QrCode.start(deviceId,{
            fps: 5,
            qrbox: {
                height: 500,
                width: 500
            }
        },(decodedText, decodedResult)=>{
            this.props.callbackData(decodedText)
            this.props.scannerStateHandler(0)
            html5QrCode.stop()
        },(error)=>{

        })
    }   

    render(): React.ReactNode {
        return(
            <div className="scanner" id="scanner">

            </div>
        );
    }
    
}