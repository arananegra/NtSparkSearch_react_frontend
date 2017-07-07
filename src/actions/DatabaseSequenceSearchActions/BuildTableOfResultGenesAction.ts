import {ActionConstants} from "../ActionConstants";

export interface IBuildTableOfResultGenesAction {
    type: string;
    jsonWithGenes: boolean;
}

export function BuildTableOfResultGenesAction(jsonWithGenes: any): IBuildTableOfResultGenesAction {
    return {
        type: ActionConstants.BUILD_JSON_WITH_GENES,
        jsonWithGenes: jsonWithGenes
    };
}