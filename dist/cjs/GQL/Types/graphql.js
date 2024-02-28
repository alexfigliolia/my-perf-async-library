"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetJobStatusDocument = exports.RequestMethod = exports.Platform = exports.JobStatus = void 0;
var JobStatus;
(function (JobStatus) {
    JobStatus["Complete"] = "complete";
    JobStatus["Failed"] = "failed";
    JobStatus["Inprogress"] = "inprogress";
    JobStatus["Pending"] = "pending";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
var Platform;
(function (Platform) {
    Platform["Bitbucket"] = "bitbucket";
    Platform["Github"] = "github";
})(Platform || (exports.Platform = Platform = {}));
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["Get"] = "GET";
    RequestMethod["Post"] = "POST";
})(RequestMethod || (exports.RequestMethod = RequestMethod = {}));
exports.SetJobStatusDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "setJobStatus" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "status" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "JobStatus" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "setJobStatus" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "status" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "status" } } }] }] } }] };
