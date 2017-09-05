import { ast } from '../../interfaces'
import { AstNode } from './node'


class Expression extends AstNode implements ast.IExpression {
	public type = 'Expression';
	
	constructor(
		public operator: ast.IOperator, 
		public value: ast.IValue
	){ 
		super()
		this.operator.setParent(this)
		this.value.setParent(this)
	}

	getOperator(){
		return this.operator
	}

	getValue(){
		return this.value
	}

}


export { Expression }