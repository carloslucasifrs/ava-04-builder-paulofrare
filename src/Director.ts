import { Builder } from './Builder/Builder'

export class Director{
  private _builder: Builder

  constructor(builder: Builder){
    this._builder = builder
    this._builder.reset()
  }

  makeMarmita(){
    this._builder.descricao("Marmita").porcao(100).valorEnergetico(100).carboidratos(250).fibras(55).proteinas(60).sodio(0.150).gordurasSaturadas(10).gordurasTrans(20).gordurasTotais(35)
  }

  makeLasanha(){
    this._builder.descricao("Lasanha").porcao(100).valorEnergetico(150).carboidratos(50).fibras(20).proteinas(50).sodio(1.50).gordurasSaturadas(10).gordurasTrans(10).gordurasTotais(8)
  }

  makeEscondidinho(){
    this._builder.descricao("Escondidinho").porcao(200).valorEnergetico(200).carboidratos(100).fibras(20).proteinas(100).sodio(5).gordurasSaturadas(20).gordurasTrans(100).gordurasTotais(200)
  }
}
