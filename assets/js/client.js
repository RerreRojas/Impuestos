export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  calcularImpuesto() {
    const calculoImpuesto = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * (21 / 100)
    return (`${this._nombre} tiene que pagar
      ${calculoImpuesto}`
    );
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
}
