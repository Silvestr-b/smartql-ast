import { ast } from '../interfaces'
import { Operator } from './nodes/operator'
import { Expression } from './nodes/expression'
import { Field } from './nodes/field'
import { Value } from './nodes/value'
import { Subquery } from './nodes/subquery'
import { Conjunction } from './nodes/conjunction'
import { Disjunction } from './nodes/disjunction'
import { Predicate } from './nodes/predicate'
import { Resource } from './nodes/resource'
import { Query } from './nodes/query'


class ASTFactory implements ast.IASTFactory {

	createOperator(type: ast.OperatorType){ 
		return new Operator(type)
	}

	createExpression(operator: ast.IOperator, value: ast.IValue){ 
		return new Expression(operator, value) 
	}

	createField(name: string){ 
		return new Field(name) 
	}

	createValue(value: ast.ValuesType){ 
		return new Value(value) 
	}

	createSubquery(fieldName: string, resource: ast.IResource){ 
		return new Subquery(fieldName, resource) 
	}

	createConjunction(){ 
		return new Conjunction() 
	}

	createDisjunction(){ 
		return new Disjunction() 
	}

	createPredicate(){ 
		return new Predicate() 
	}

	createResource(){ 
		return new Resource() 
	}

	createQuery(){ 
		return new Query() 
	}

}


export { ASTFactory }