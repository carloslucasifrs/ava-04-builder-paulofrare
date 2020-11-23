import{ AlimentoBuilder } from './Builder/AlimentoBuilder'
import { Director } from './Director';

const marmitaBuilder = new AlimentoBuilder()
const dir1 = new Director(marmitaBuilder)

dir1.makeMarmita()
const marmita = marmitaBuilder.getAlimento()

console.log(`${marmita}`) // toString

const lasanhaBuilder = new AlimentoBuilder()
const dir = new Director(lasanhaBuilder)

dir.makeLasanha()
const lasanha = lasanhaBuilder.getAlimento()

console.log(`${lasanha}`) // toString

const escondidinhoBuilder = new AlimentoBuilder()
const dir2 = new Director(escondidinhoBuilder)

dir2.makeEscondidinho()
const escondidinho = escondidinhoBuilder.getAlimento()

console.log(`${escondidinho}`) // toString
