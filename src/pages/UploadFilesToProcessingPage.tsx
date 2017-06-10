import * as React from "react";
import {NavigationBarComponent} from "../components/NavigationBarComponent";

export interface IUploadFilesToProcessingPageProps {
    intl: any;
}

export interface IUploadFilesToProcessingPageState {

}

export class UploadFilesToProcessingPage extends React.Component<IUploadFilesToProcessingPageProps, IUploadFilesToProcessingPageState> {
    public constructor(props: IUploadFilesToProcessingPageProps){
        super(props);
    }

    public componentWillMount() {

    }

    public render(){
        return (
            <div className="container-fluid">
                <div>
                    <NavigationBarComponent/>
                </div>
               <span>Upload Files Page!!!</span>
            </div>
        );
    }
}