import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
});

/*
    Definição de alias das pastas src e test para facilitar os imports dessas pastas.
    Funciona em conjunto com a configuração de paths do tsconfig.json
*/