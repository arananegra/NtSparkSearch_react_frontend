import {ActionConstants} from "../ActionConstants";

export interface IBuildTableOfResultGenesAction {
    type: string;
    jsonWithGenes: boolean;
}

export function BuildTableOfResultGenesDatabaseAction(jsonWithGenes: any): IBuildTableOfResultGenesAction {
    return {
        type: ActionConstants.BUILD_JSON_WITH_GENES_TO_DATABASE,
        jsonWithGenes: jsonWithGenes
    };
}