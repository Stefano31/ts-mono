export default function (plop) {
  plop.setGenerator('library', {
    description: 'create a new library',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Library name'
      },
      {
        type: 'input',
        name: 'scope',
        default: () => '',
        message: 'Library scope'
      },
      {
        type: 'input',
        name: 'description',
        default: () => '',
        message: 'Library description'
      },
      {
        type: 'number',
        name: 'port',
        message: 'Debug port'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{name}}',
        base: 'plop-templates/library',
        templateFiles: 'plop-templates/library/**/*'
      },
      {
        type: 'modify',
        path: '.vscode/launch.json',
        transform (fileContents, data) {
          const fileContentsJson = JSON.parse(fileContents)
          fileContentsJson.configurations.push(
            {
              type: 'node',
              request: 'attach',
              name: `Attach (${data.name} package)`,
              remoteRoot: '/aws-monorepo',
              port: data.port
            }
          )
          return JSON.stringify(fileContentsJson, null, 2)
        }
      }
    ]
  })
}
