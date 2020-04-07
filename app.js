const argv = require('./Config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //.then((archivo) => console.log(`El archivo ${archivo} ha sido creado `))
            .then((archivo) => console.log(`El archivo ${archivo.red} ha sido creado`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido')
}

//let parametro = argv[2];
//let base = parametro.split('=')[1];