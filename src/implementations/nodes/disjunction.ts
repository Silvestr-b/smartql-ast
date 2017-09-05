import { ast } from '../../interfaces'
import { AstNode } from './node'


class Disjunction extends AstNode implements ast.IDisjunction {
	public type = 'Disjunction';
	public operands: (ast.IValue | ast.IConjunction)[] = [];
	
	addOperand(operand: (ast.IValue | ast.IConjunction)){
		this.operands.push(operand)
		
		operand.setParent(this)

		return this
	}

	getOperands(){
		return this.operands
	}
}


export { Disjunction } 