
// Factory

export interface IASTFactory {
	createOperator: (type: OperatorType) => IOperator
	createExpression: (operator: IOperator, value: IValue) => IExpression
	createField: (name: string) => IField
	createValue: (value: ValuesType) => IValue
	createSubquery: (fieldName: string, resource: IResource) => ISubquery
	createConjunction: () => IConjunction
	createDisjunction: () => IDisjunction
	createPredicate: () => IPredicate
	createResource: () => IResource
	createQuery: () => IQuery
}


// Entities 

export interface IAstNode {
	parent: IAstNode;
	type: string;

	setParent: (parent: IAstNode) => IAstNode
	findParent: <T>(type: string) => T
	getParent: () => IAstNode
	getType: () => string
}

export interface IQuery extends IAstNode {
	resources: IResource[]
	method: string;
	setMethod: (method: string) => IQuery
	setResources: (resources: IResource[]) => IQuery	
	addResource: (resource: IResource) => IQuery
	getAllResources: () => IResource[]
	getMethod: () => string
	hasResource: (resourceName: string) => boolean
	forEachResource: (callBack: ((resource: IResource) => void)) => void
}

export interface IResource extends IAstNode {
	name: string
	fields: IField[]
	predicates: IPredicate[]
	inclusions: InclusionsList
	
	setName: (name: string) => IResource
	setFields: (fields: IField[]) => IResource
	setPredicates: (predicates: IPredicate[]) => IResource
	setInclusions: (inclusionsList: InclusionsList) => IResource

	addField: (field: IField) => IResource
	addPredicate: (predicate: IPredicate) => IResource
	addInclusion: (inclusionName: string, inclusion: IResource) => IResource

	getName: () => string
	getInclusion: (inclusionName: string) => IResource
	getPredicates: () => IPredicate[]

	hasField: (fieldName: string) => boolean
	hasInclusion: (inclusionName: string) => boolean

	forEachInclusion: (callBack: ((inclusionName: string, resource: IResource) => void)) => void
}

export interface IPredicate extends IAstNode {
	fieldPredicates: FieldPredicatesList
	addFieldPredicate: (fieldName: string, subPredicate: SubPredicate) => IPredicate
	getFieldPredicate: (fieldName: string) => SubPredicate
}

export interface IConjunction extends IAstNode {
	operands: IExpression[]
	addOperand: (operand: IExpression) => IConjunction
	getOperands: () => IExpression[]
}

export interface IDisjunction extends IAstNode {
	operands: (IValue | IConjunction)[]
	addOperand: (operand: (IValue | IConjunction)) => IDisjunction
	getOperands: () => (IValue | IConjunction)[]
}

export interface ISubquery extends IAstNode {
	field: string
	resource: IResource
	getField: () => string
	getResource: () => IResource
}


export interface IField extends IAstNode {
	name: string
	getName: () => string
}

export interface IValue extends IAstNode {
	value: ValuesType
	getValue: () => ValuesType
}

export interface IOperator extends IAstNode {
	value: OperatorType
	getValue: () => OperatorType
}

export interface IExpression extends IAstNode {
	operator: IOperator
	value: IValue
	getOperator: () => IOperator
	getValue: () => IValue
}


// Types

export type OperatorType = '>' | '<' | '>=' | '<=' | '=' | '!='	

export type ValuesType = string | number | Date | ISubquery

export type InclusionsList = { [inclusionName: string]: IResource }

export type SubPredicate = IConjunction | IDisjunction | IValue

export type FieldPredicatesList = { [fieldName: string]: SubPredicate }



