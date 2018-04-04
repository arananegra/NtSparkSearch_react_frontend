import * as React from "react";
import {GeneSubsequenceResultDTO} from "../../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../../domain/TableHeaderColumnDTO";
import {FormattedMessage} from "react-intl";
import {InputTableBase} from "./InputTableBase";

export interface ISubSequenceInDNATableResultProps {
    columnList: Array<TableHeaderColumnDTO>;
    dataList: Array<GeneSubsequenceResultDTO>;
    noDataText: string;
    intl?: ReactIntl.InjectedIntl
}

export class SubSequenceInDNATableResult extends InputTableBase {
    public constructor(props: ISubSequenceInDNATableResultProps) {
        //TODO: Mirar como cambiar o texto con intl aqui
        let newGenesInJson = props.dataList;
        for (let key in newGenesInJson) {
            if (newGenesInJson.hasOwnProperty(key)) {

            }

        }
        super(props)
    }
}