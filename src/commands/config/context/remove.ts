import {Flags} from '@oclif/core';
import Command from '../../../base';
import { removeContext } from '../../../models/Context';

export default class ContextRemove extends Command {
  static description = 'Delete a context from the store';
  static flags = {
    help: Flags.help({ char: 'h' })
  };
  static args = [
    { name: 'context-name', description: 'Name of the context to delete', required: true }
  ];
  async run() {
    const { args } = await this.parse(ContextRemove);
    const contextName = args['context-name'];
    
    try {
      await removeContext(contextName);
      this.log(`${contextName} successfully deleted`);
    } catch (err) {
      this.error(err as Error);
    }
  }
}
