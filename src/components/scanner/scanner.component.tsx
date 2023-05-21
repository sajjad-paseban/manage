import { Html5Qrcode } from "html5-qrcode";
import React from "react";
import './scanner.style.scss';
import { FaStop } from "react-icons/fa";

export class Scanner extends React.Component<any,any>{


    
    constructor(props: any){
        super(props);
    }


    private html5QrCode!: Html5Qrcode;
    async componentDidMount() {
        const deviceId = await Html5Qrcode.getCameras().then(value => value[1].id)
        this.html5QrCode = new Html5Qrcode("render");
        this.html5QrCode.start(deviceId,{
            fps: 5,
            qrbox: {
                height: 300,
                width: 300
            }
        },(decodedText, decodedResult)=>{
            this.props.callbackData(decodedText)
            this.props.scannerStateHandler(0)
            this.html5QrCode.stop()
        },(error)=>{

        })
    }   

    render(): React.ReactNode {
        return(
            <div className="scanner">
                <button className="btn btn-danger btn-sm p-1 m-2" onClick={()=> {this.html5QrCode.stop(); this.props.scannerStateHandler(0);}}>
                    <FaStop size={25} />
                </button>
                <div className="render" id="render"></div>
            </div>
        );
    }
    
}