import { ast } from '../../interfaces'
import { AstNode } from './node'


class Conjunction extends AstNode implements ast.IConjunction {
	public type = 'Conjunction';
	public operands: ast.IExpression[] = [];

	addOperand(operand: ast.IExpression){
		this.operands.push(operand)

		operand.setParent(this)

		return this
	}

	getOperands(){
		return this.operands
	}
}


export { Conjunction } 