import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./zodiaco.css'],
  templateUrl: './zodiaco.html',
})
export class Zodiaco {

  nombre: string = '';
  paterno: string = '';
  materno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  resultadoNombre: string = '';
  resultadoPaterno: string = '';
  resultadoMaterno: string = '';
  resultadoSexo: string = '';
  edad: number = 0;
  signoChino: string = '';
  imagen: string = '';

  imprimir(): void {
    this.resultadoNombre = this.nombre;
    this.resultadoPaterno = this.paterno;
    this.resultadoMaterno = this.materno;
    this.resultadoSexo = this.sexo;

    let hoy = new Date();
    let anioActual = hoy.getFullYear();
    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();

    this.edad = anioActual - this.anio;

   
    if (this.mes > mesActual) {
      this.edad--;
    } else if (this.mes == mesActual && this.dia > diaActual) {
      this.edad--;
    }

    
    let resto = (this.anio - 4) % 12;

    if (resto < 0) {
      resto = resto + 12;
    }

    switch (resto) {
      case 0:
        this.signoChino = 'Rata';
        this.imagen = 'https://media.istockphoto.com/id/1333845973/vector/the-classic-chinese-papercutting-style-illustration-a-cartoon-rat-the-chinese-zodiac.jpg?s=612x612&w=0&k=20&c=a4bR8yFhZRI17oH2Ozbra3uzfneC3jOFy8IVLEDyK9I=';
        break;
      case 1:
        this.signoChino = 'Buey';
        this.imagen = 'https://media.istockphoto.com/id/1264838262/vector/graphic-illustration-with-a-decorative-bull-11.jpg?s=612x612&w=0&k=20&c=gluTiXYT-CuQ2pTESWneCt9N8n5HDc8Dok6C0vIyEyc=';
        break;
      case 2:
        this.signoChino = 'Tigre';
        this.imagen = 'https://th.bing.com/th/id/OIP.Ft73QT1t5bi3aZVcs9NmGgHaI7?w=148&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';
        break;
      case 3:
        this.signoChino = 'Conejo';
        this.imagen = 'https://media.istockphoto.com/id/472278239/vector/year-of-the-rabbit.jpg?s=612x612&w=0&k=20&c=Jej1Qj8tTfudSHC_qFDg8nAjrTfaYkezVjbLsNQjDiI=';
        break;
      case 4:
        this.signoChino = 'Dragón';
        this.imagen = 'https://media.istockphoto.com/id/507426720/vector/golden-dragon-silhouette.jpg?s=612x612&w=0&k=20&c=lO6pvazWaJWFe_R1TmgpV0TX3-wL3Gk17TqruC1DDlc=';
        break;
      case 5:
        this.signoChino = 'Serpiente';
        this.imagen = 'https://media.istockphoto.com/id/1995309724/vector/happy-chinese-new-year-2025-zodiac-sign-year-of-the-snake.jpg?s=612x612&w=0&k=20&c=MnW1FLGpvAsc36d6TYmZm5W8LN1rySTaHfIix22GVaI=';
        break;
      case 6:
        this.signoChino = 'Caballo';
        this.imagen = 'https://media.istockphoto.com/id/2242097696/es/foto/caballo-del-zodiaco-chino-con-estampado-floral-dorado-fondo-rojo-farolillos-y-flores-de-cerezo.jpg?b=1&s=612x612&w=0&k=20&c=HGIakbcN0YxYAwkv1e7LNjmMrg-HSz-ui_TXQudtOKE=';
        break;
      case 7:
        this.signoChino = 'Cabra';
        this.imagen = 'https://media.istockphoto.com/id/528585313/vector/year-of-the-goat-painting-symbol.jpg?s=612x612&w=0&k=20&c=6dc6Yr_6DtMD1m1hRJ0kRiZeT11kd2mM5VSfJAn8RDQ=';
        break;
      case 8:
        this.signoChino = 'Mono';
        this.imagen = 'https://media.istockphoto.com/id/158863651/vector/chinese-zodiac-animal-monkey.jpg?s=612x612&w=0&k=20&c=xtQbA2IKNRyfBH8aL_gc6p3LJFK9lptCMEKRXLw3i-8=';
        break;
      case 9:
        this.signoChino = 'Gallo';
        this.imagen = 'https://media.istockphoto.com/id/628579396/vector/red-rooster-as-symbol-for-2017-by-chinese-zodiac.jpg?s=612x612&w=0&k=20&c=qSWAl5x5gCloePyirt3BXTzxtk5ixs_BKjKbIpte4Ac=';
        break;
      case 10:
        this.signoChino = 'Perro';
        this.imagen = 'https://media.istockphoto.com/id/158863432/vector/chinese-zodiac-animal-dog.jpg?s=612x612&w=0&k=20&c=a4LTHKf1ad02ZyVigdTTx58_Zb8eHvPwgGy2jAMcqaI=';
        break;
      case 11:
        this.signoChino = 'Cerdo';
        this.imagen = 'https://media.istockphoto.com/id/158865596/vector/chinese-zodiac-animal-pig.jpg?s=612x612&w=0&k=20&c=DibAYBxftk7Fr0_7Pwes2E4DrPvvOtySaQdyPzRIFuI=';
        break;
    }
  }
}