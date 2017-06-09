import * as React from "react";

export interface IUploadFastaExcelComponentProps {
    intl?: any;
}

export interface IUploadFastaExcelComponentState {

}

export class UploadFastaExcelComponent extends React.Component<IUploadFastaExcelComponentProps, IUploadFastaExcelComponentState> {
    public constructor(props: IUploadFastaExcelComponentProps){
        super(props);
    }

    public componentWillMount() {

    }

    public render(){
        return (
            <div className="container-fluid">
                <span>Upload Files Page!!!</span>
            </div>
        );
    }
}