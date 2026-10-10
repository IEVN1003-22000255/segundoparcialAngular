
import { Routes } from '@angular/router';

// Es un arreglo, vamos a agregar propiedades a los objetos
export const routes: Routes = [
    {
        path: 'Formulario',
        children: [
            {
                path: 'distancia',
                loadComponent: () =>
                    import('./Formulario/distancia/distancia').then(
                        (c) => c.Distancia
                    ),
            },
            {
                path: 'zodiaco',
                loadComponent: () =>
                    import('./Formulario/zodiaco/zodiaco').then(
                        (c) => c.Zodiaco
                    ),
            },
        ],
    },
    {
        path: 'escuela',
        children: [
            {
                path: 'lista-escuela',
                loadComponent: () =>
                    import('./escuela/lista-escuela/lista-escuela').then(
                        (c) => c.ListaEscuela
                    ),
            },
            {
                 path: 'cinepolis',
                loadComponent: () =>
                    import('./escuela/cinepolis/cinepolis').then(
                        (c) => c.Cinepolis
                    ),
            },
        
        ],
    },
    
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo: 'admin' },
];