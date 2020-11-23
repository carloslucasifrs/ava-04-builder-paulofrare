import { Builder } from './Builder'
import { Alimento } from '../Alimento'

export class AlimentoBuilder implements Builder{

  private _alimento: Alimento

  constructor(){
    this._alimento = new Alimento('AlimentoPadrão', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)
  }

  reset(): AlimentoBuilder{
    this._alimento = new Alimento('AlimentoPadrão', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)
    return this
  }

  descricao(d: string): AlimentoBuilder{
    this._alimento.descricao = d
    return this
  }

  porcao(p: number): AlimentoBuilder{
    this._alimento.porcao = p
    return this
  }

  valorEnergetico(ve: number): AlimentoBuilder{
    this._alimento.valorEnergetico = ve
    return this
  }

  carboidratos(carbo: number): AlimentoBuilder{
    this._alimento.carboidratos = carbo
    return this
  }

  fibras(fibras: number): AlimentoBuilder{
    this._alimento.fibras = fibras
    return this
  }

  proteinas(proteinas: number): AlimentoBuilder{
    this._alimento.proteinas = proteinas
    return this
  }

  sodio(sodio: number): AlimentoBuilder{
    this._alimento.sodio = sodio
    return this
  }

  gordurasSaturadas(gs: number): AlimentoBuilder{
    this._alimento.gordurasSaturadas = gs
    return this
  }

  gordurasTrans(gt: number): AlimentoBuilder{
    this._alimento.gordurasTrans = gt
    return this
  }

  gordurasTotais(gordurasTotais: number): AlimentoBuilder{
    this._alimento.gordurasTotais = gordurasTotais
    return this
  }

  getAlimento ():  Alimento{
    return this._alimento
  }

}
