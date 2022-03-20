import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
export interface HitCounterProps {
    downstream: lambda.IFunction;
}
export declare class HitCounter extends Construct {
    readonly handler: lambda.Function;
    readonly table: ddb.Table;
    constructor(scope: Construct, id: string, props: HitCounterProps);
}
