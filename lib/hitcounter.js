"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitCounter = void 0;
const lambda = require("aws-cdk-lib/aws-lambda");
const ddb = require("aws-cdk-lib/aws-dynamodb");
const constructs_1 = require("constructs");
class HitCounter extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        this.table = new ddb.Table(this, 'Hits', {
            partitionKey: {
                name: 'path',
                type: ddb.AttributeType.STRING
            }
        });
        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hitcounter.handler',
            code: lambda.Code.fromAsset('lamda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: this.table.tableName
            }
        });
        this.table.grantReadWriteData(this.handler);
        props.downstream.grantInvoke(this.handler);
    }
}
exports.HitCounter = HitCounter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGl0Y291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpdGNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQWlEO0FBQ2pELGdEQUErQztBQUMvQywyQ0FBdUM7QUFNdkMsTUFBYSxVQUFXLFNBQVEsc0JBQVM7SUFNdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDdkMsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07YUFDL0I7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDNUQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDcEMsV0FBVyxFQUFFO2dCQUNYLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWTtnQkFDdkQsZUFBZSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzthQUNyQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUE3QkQsZ0NBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgZGRiIGZyb20gJ2F3cy1jZGstbGliL2F3cy1keW5hbW9kYidcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpdENvdW50ZXJQcm9wcyB7XG4gIGRvd25zdHJlYW06IGxhbWJkYS5JRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBIaXRDb3VudGVyIGV4dGVuZHMgQ29uc3RydWN0IHtcblxuICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlcjogbGFtYmRhLkZ1bmN0aW9uO1xuXG4gIHB1YmxpYyByZWFkb25seSB0YWJsZTogZGRiLlRhYmxlO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBIaXRDb3VudGVyUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgdGhpcy50YWJsZSA9IG5ldyBkZGIuVGFibGUodGhpcywgJ0hpdHMnLCB7XG4gICAgICBwYXJ0aXRpb25LZXk6IHtcbiAgICAgICAgbmFtZTogJ3BhdGgnLFxuICAgICAgICB0eXBlOiBkZGIuQXR0cmlidXRlVHlwZS5TVFJJTkdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0hpdENvdW50ZXJIYW5kbGVyJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgICBoYW5kbGVyOiAnaGl0Y291bnRlci5oYW5kbGVyJyxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtZGEnKSxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIERPV05TVFJFQU1fRlVOQ1RJT05fTkFNRTogcHJvcHMuZG93bnN0cmVhbS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIEhJVFNfVEFCTEVfTkFNRTp0aGlzLnRhYmxlLnRhYmxlTmFtZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50YWJsZS5ncmFudFJlYWRXcml0ZURhdGEodGhpcy5oYW5kbGVyKTtcbiAgICBwcm9wcy5kb3duc3RyZWFtLmdyYW50SW52b2tlKHRoaXMuaGFuZGxlcik7XG4gIH1cbn0iXX0=