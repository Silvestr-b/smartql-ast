
// Factory

interface IASTFactory {
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

interface IAstNode {
	parent: IAstNode;
	type: string;

	setParent: (parent: IAstNode) => IAstNode
	findParent: <T>(type: string) => T
	getParent: () => IAstNode
	getType: () => string
}

interface IQuery extends IAstNode {
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

interface IResource extends IAstNode {
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

interface IPredicate extends IAstNode {
	fieldPredicates: FieldPredicatesList
	addFieldPredicate: (fieldName: string, subPredicate: SubPredicate) => IPredicate
	getFieldPredicate: (fieldName: string) => SubPredicate
}

interface IConjunction extends IAstNode {
	operands: IExpression[]
	addOperand: (operand: IExpression) => IConjunction
	getOperands: () => IExpression[]
}

interface IDisjunction extends IAstNode {
	operands: (IValue | IConjunction)[]
	addOperand: (operand: (IValue | IConjunction)) => IDisjunction
	getOperands: () => (IValue | IConjunction)[]
}

interface ISubquery extends IAstNode {
	field: string
	resource: IResource
	getField: () => string
	getResource: () => IResource
}


interface IField extends IAstNode {
	name: string
	getName: () => string
}

interface IValue extends IAstNode {
	value: ValuesType
	getValue: () => ValuesType
}

interface IOperator extends IAstNode {
	value: OperatorType
	getValue: () => OperatorType
}

interface IExpression extends IAstNode {
	operator: IOperator
	value: IValue
	getOperator: () => IOperator
	getValue: () => IValue
}


// Types

type OperatorType = '>' | '<' | '>=' | '<=' | '=' | '!='	

type ValuesType = string | number | Date | ISubquery

type InclusionsList = { [inclusionName: string]: IResource }

type SubPredicate = IConjunction | IDisjunction | IValue

type FieldPredicatesList = { [fieldName: string]: SubPredicate }


export {
	IAstNode,
	IQuery, 
	IResource, 
	IPredicate, 
	IConjunction, 
	IDisjunction, 
	ISubquery, 
	IField, 
	IValue, 
	IOperator, 
	IExpression, 
	OperatorType,
	ValuesType,
	InclusionsList,
	FieldPredicatesList,
	SubPredicate,
	IASTFactory
}
