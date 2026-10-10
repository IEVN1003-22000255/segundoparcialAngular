import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ICliente } from '../cliente';

@Component({
  selector: 'app-cinepolis',
  imports: [FormsModule, ReactiveFormsModule, DecimalPipe],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css',
})
export class Cinepolis implements OnInit {

  formulario!: FormGroup;

  cliente: ICliente = {
    nombre: '',
    compradores: 0,
    cineco: false,
    boletas: 0,
    mensaje: ''
  };

  valorPagar: number = 0;
  mensajeError: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(1),
      cineco: new FormControl('no'),
      boletas: new FormControl(1),
    });
  }

  procesar(): void {
    const nombre = this.formulario.value.nombre;
    const compradores = Number(this.formulario.value.compradores) || 0;
    const boletas = Number(this.formulario.value.boletas) || 0;
    const tieneCineco = this.formulario.value.cineco === 'si';

    const limiteBoletas = compradores * 7;

    if (boletas > limiteBoletas) {
      this.mensajeError = `No se pueden comprar más de 7 boletas por persona (Máximo permitido: ${limiteBoletas} boletas).`;
      this.valorPagar = 0;
      return;
    }

    this.mensajeError = '';

    const precioBoleta = 12;
    let total = boletas * precioBoleta;

    let descuentoBoletas = 0;
    if (boletas > 5) {
      descuentoBoletas = 0.15; // 15%
    } else if (boletas >= 3) {
      descuentoBoletas = 0.10; // 10%
    }

    total = total - (total * descuentoBoletas);

    if (tieneCineco) {
      total = total - (total * 0.10);
    }

    this.valorPagar = total;

    this.cliente = {
      nombre,
      compradores,
      cineco: tieneCineco,
      boletas,
      mensaje: `Hola ${nombre}, el valor a pagar es $${this.valorPagar}`
    };
  }

  limpiar(): void {
    this.formulario.reset({
      nombre: '',
      compradores: 1,
      cineco: 'no',
      boletas: 1
    });
    this.valorPagar = 0;
    this.mensajeError = '';
  }
}