import * as React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {FormattedMessage} from "react-intl";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {ButtonComponent} from "../CommonComponents/ButtonComponent";

export interface IInputTableProps {
    dataList: any[];
    columnList: any[];
    noDataText: string;
    intl?: ReactIntl.InjectedIntl;
}

export interface IInputTableState {

}

export class InputTableBase extends React.Component<IInputTableProps, IInputTableState> {

    public constructor(props: IInputTableProps) {
        super(props);
    }

    renderShowsTotal(start, to, total) {
        return (
            <p>
                <FormattedMessage id={MessagesConstants.PAGINATION_FROM}/> { start } <FormattedMessage
                id={MessagesConstants.PAGINATION_TO}/> { to }, <FormattedMessage
                id={MessagesConstants.PAGINATION_OF}/> { total }&nbsp;&nbsp;
                <FormattedMessage id={MessagesConstants.PAGINATION_ROWS}/>
            </p>
        );
    }

    public buildTableColumn() {
        let columnList = [];

        if (this.props.columnList != null) {
            this.props.columnList.map((column) => {
                if (column._isKey) {
                    columnList.push(<TableHeaderColumn
                        key={column._columnName}
                        isKey
                        dataSort={true}
                        dataField={column._columnName}
                        width={column._width}>
                        {<FormattedMessage
                            id={column._value}/>}
                    </TableHeaderColumn>);
                } else {
                    if (column._nestedObject) {
                        columnList.push(<TableHeaderColumn
                            key={column._columnName}
                            dataSort={true}
                            dataField={column._columnName}
                            width={column._width}>
                            {<FormattedMessage
                                id={column._value}/>}
                        </TableHeaderColumn>);
                    } else {
                        columnList.push(<TableHeaderColumn
                            key={column._columnName}
                            dataSort={true}
                            dataField={column._columnName}
                            width={column._width}>
                            {<FormattedMessage
                                id={column._value}/>}
                        </TableHeaderColumn>);
                    }
                }
            });
        }

        return columnList;
    }

    rowOptionsConfiguration() {
        let extraRowOptionsConfiguration;

        extraRowOptionsConfiguration = {
            noDataText: this.props.noDataText,
            exportCSVText: this.props.intl.formatMessage({id: MessagesConstants.EXPORT_CSV}),
            exportCSVBtn: this.createCustomExportCSVButton,
        };

        extraRowOptionsConfiguration.paginationShowsTotal = this.renderShowsTotal;

        return extraRowOptionsConfiguration;
    }

    objectDataListToJson() {
        let jsonToLoad = [];
        if (this.props.dataList != null) {
            jsonToLoad = JSON.parse(JSON.stringify(this.props.dataList));
        }

        return jsonToLoad;
    }

    private createCustomExportCSVButton = (onClick) => {
        return (
            <div className="csv-export-button">
                <ButtonComponent label={this.props.intl.formatMessage({id: MessagesConstants.EXPORT_CSV})}
                                 value={"texto"}
                                 primary={true}
                                 onButtonPressed={onClick}/>
            </div>

        );
    };

    render() {
        return (
            <div>
                <BootstrapTable data={this.objectDataListToJson()}
                                options={this.rowOptionsConfiguration()}
                                pagination={ true }
                                striped hover
                                ignoreSinglePage
                                exportCSV
                                csvFileName='genes-export.csv'>
                    {this.buildTableColumn()}
                </BootstrapTable>
            </div>
        );
    }
}