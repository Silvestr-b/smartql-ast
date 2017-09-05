import { ASTFactory } from './implementations/factory'
import { ast } from './interfaces'


export default () => {
	return new ASTFactory();
}


export { ast }