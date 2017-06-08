import * as React from "react";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {MessagesConstants} from "../i18n/MessagesConstants";

export interface ITableProps {
    columnList: Array<TableHeaderColumnDTO>;
    dataList: Array<GeneSubsequenceResultDTO>;
    noDataText: string;
    intl: any;
}

export interface IState {

}

export class SubSequenceInDNATableResult extends React.Component<ITableProps, IState> {

    public constructor(props: ITableProps) {
        super(props);
    }

    private renderShowsTotal(start, to, total) {
        return (
            <p>
                From { start } To { to }, of { total }&nbsp; Rows
            </p>
        );
    }


    buildTableColumn() {
        let columnList = [];

        if (this.props.columnList != null) {
            this.props.columnList.map((column) => {
                if (column._isKey) {
                    columnList.push(<TableHeaderColumn
                        key={column._columnName}
                        isKey={true}
                        dataSort={true}
                        dataField={column._columnName}
                        width={column._width}>
                        {this.props.intl.formatMessage({id: MessagesConstants.GENE_COLUMN_NAME})}
                    </TableHeaderColumn>);
                } else {
                    columnList.push(<TableHeaderColumn
                        key={column._columnName}
                        dataSort={true}
                        dataField={column._columnName}
                        width={column._width}>
                        {this.props.intl.formatMessage({id: MessagesConstants.RESULT_COLUMN_NAME})}
                    </TableHeaderColumn>);
                }
            });
        }

        return columnList;
    }

    rowOptionsConfiguration() {
        let extraRowOptionsConfiguration;

        /*if (this.props.customPaginationTable === null) {
            extraRowOptionsConfiguration = {
                noDataText: this.props.noDataText
            };
        } else {
            extraRowOptionsConfiguration = this.props.customPaginationTable;
        }*/

        extraRowOptionsConfiguration = {
            noDataText: this.props.noDataText
        };

        extraRowOptionsConfiguration.paginationShowsTotal = this.renderShowsTotal;

        //extraRowOptionsConfiguration.onRowClick = this.props.onSingleRowClick;

        return extraRowOptionsConfiguration;
    }


    objectDataListToJson() {
        return JSON.parse(JSON.stringify(this.props.dataList));
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.objectDataListToJson()}
                                pagination={ true }
                                options={this.rowOptionsConfiguration()}
                                striped hover>
                    {this.buildTableColumn()}
                </BootstrapTable>
            </div>
        );
    }
}