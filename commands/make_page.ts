import { args, BaseCommand } from '@adonisjs/core/ace'
import string from '@adonisjs/core/helpers/string'

import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class MakePage extends BaseCommand {
  static commandName = 'make:page'
  static description = 'Create a new React page file'

  @args.string({ description: 'Path of the page file' })
  declare name: string

  static options: CommandOptions = {}

  async run() {
    const inertiaPath = 'inertia/pages'
    const fileName = this.name.split('/').pop()!
    const pageName = string.pascalCase(fileName)

    // this.app.makePath()
    const codemods = await this.createCodemods()
    await codemods.makeUsingStub(this.app.commandsPath('stubs'), 'make/page.stub', {
      filePath: inertiaPath + '/' + this.name + '.tsx',
      pageName,
    })
  }
}
