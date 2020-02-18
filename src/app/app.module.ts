import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { RegistroAltaBajaReproductoresComponent } from './registro-alta-baja-reproductores/registro-alta-baja-reproductores.component';
import { EditInsertRowComponent } from './edit-insert-row/edit-insert-row.component';
import { AspectoSanitarioProduccionAvicolaHomeComponent } from './aspecto-sanitario-produccion-avicola-home/aspecto-sanitario-produccion-avicola-home.component';
import { AspectoSanitarioProduccionPorcinaHomeComponent } from './aspecto-sanitario-produccion-porcina-home/aspecto-sanitario-produccion-porcina-home.component';
import { MantenimientoInstalacionProductivaPorcinaHomeComponent } from './mantenimiento-instalacion-productiva-porcina-home/mantenimiento-instalacion-productiva-porcina-home.component';
import { MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent } from './mantenimiento-instalacion-productiva-avicola-terminacion-home/mantenimiento-instalacion-productiva-avicola-terminacion-home.component';
import { MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent } from './mantenimiento-instalacion-cuarentena-enfermeria-home/mantenimiento-instalacion-cuarentena-enfermeria-home.component';
import { VisitasVeterinariasEventualesHomeComponent } from './visitas-veterinarias-eventuales-home/visitas-veterinarias-eventuales-home.component';
import { IdentificacionUbicacionTrampasRoedoresHomeComponent } from './identificacion-ubicacion-trampas-roedores-home/identificacion-ubicacion-trampas-roedores-home.component';
import { InsumosHomeComponent } from './insumos-home/insumos-home.component';
import { GestionResiduosHomeComponent } from './gestion-residuos-home/gestion-residuos-home.component';
import { EntradaSalidaAnimalesEstablecimientoHomeComponent } from './entrada-salida-animales-establecimiento-home/entrada-salida-animales-establecimiento-home.component';
import { CuarentenaAnimalHomeComponent } from './cuarentena-animal-home/cuarentena-animal-home.component';
import { TomaMuestraAnalisisHomeComponent } from './toma-muestra-analisis-home/toma-muestra-analisis-home.component';
import { RegistroCapacitacionHomeComponent } from './registro-capacitacion-home/registro-capacitacion-home.component';

//Menu 1
import { Menu1RegistroAltaBajaReproductoresComponent } from './menu1-registro-alta-baja-reproductores/menu1-registro-alta-baja-reproductores.component';
import { Menu1RegistroServiciosComponent } from './menu1-registro-servicios/menu1-registro-servicios.component';
import { Menu1RegistroControlPreniezComponent } from './menu1-registro-control-preniez/menu1-registro-control-preniez.component';
import { Menu1RegistroPartoNacimientoComponent } from './menu1-registro-parto-nacimiento/menu1-registro-parto-nacimiento.component';
import { Menu1RegistroMuertesComponent } from './menu1-registro-muertes/menu1-registro-muertes.component';
import { Menu1RegistroSignosVisiblesEnfermedadComponent } from './menu1-registro-signos-visibles-enfermedad/menu1-registro-signos-visibles-enfermedad.component';
import { Menu1RegistroAplicacionProductosVeterinariosComponent } from './menu1-registro-aplicacion-productos-veterinarios/menu1-registro-aplicacion-productos-veterinarios.component';

//Menu 2
import { Menu2RegistroSignosVisiblesEnfermedadComponent } from './menu2-registro-signos-visibles-enfermedad/menu2-registro-signos-visibles-enfermedad.component';
import { Menu2RegistroAplicacionProductosVeterinariosComponent } from './menu2-registro-aplicacion-productos-veterinarios/menu2-registro-aplicacion-productos-veterinarios.component';
import { Menu2RegistroMuertesComponent } from './menu2-registro-muertes/menu2-registro-muertes.component';

//Menu 3
import { Menu3RegistroMantenimientoInstalacionPorcinaComponent } from './menu3-registro-mantenimiento-instalacion-porcina/menu3-registro-mantenimiento-instalacion-porcina.component';

//Menu 4
import { Menu4RegistroMantenimientoInstalacionRecriaComponent } from './menu4-registro-mantenimiento-instalacion-recria/menu4-registro-mantenimiento-instalacion-recria.component';
import { Menu4RegistroMantenimientoInstalacionTerminacionComponent } from './menu4-registro-mantenimiento-instalacion-terminacion/menu4-registro-mantenimiento-instalacion-terminacion.component';

//Menu 5
import { Menu5RegistroMantenimientoInstalacionCuarentenaComponent } from './menu5-registro-mantenimiento-instalacion-cuarentena/menu5-registro-mantenimiento-instalacion-cuarentena.component';
import { Menu5RegistroMantenimientoInstalacionEnfermeriaComponent } from './menu5-registro-mantenimiento-instalacion-enfermeria/menu5-registro-mantenimiento-instalacion-enfermeria.component';

//Menu 6
import { Menu6RegistroVisitasVeterinariasComponent } from './menu6-registro-visitas-veterinarias/menu6-registro-visitas-veterinarias.component';
import { Menu6RegistroVisitasEventualesComponent } from './menu6-registro-visitas-eventuales/menu6-registro-visitas-eventuales.component';

//Menu 7
import { Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent } from './menu7-registro-mantenimiento-identificacion-ubicacion-trampas/menu7-registro-mantenimiento-identificacion-ubicacion-trampas.component';

//Menu 8
import { Menu8RegistroInsumosAlimentariosComponent } from './menu8-registro-insumos-alimentarios/menu8-registro-insumos-alimentarios.component';
import { Menu8RegistroInsumosVeterinariosComponent } from './menu8-registro-insumos-veterinarios/menu8-registro-insumos-veterinarios.component';
import { Menu8RegistroInsumosLimpiezaDesinfeccionComponent } from './menu8-registro-insumos-limpieza-desinfeccion/menu8-registro-insumos-limpieza-desinfeccion.component';

//Menu 9
import { Menu9RegistroGestionResiduosVeterinariosComponent } from './menu9-registro-gestion-residuos-veterinarios/menu9-registro-gestion-residuos-veterinarios.component';
import { Menu9RegistroExtraccionCamaGuanoComponent } from './menu9-registro-extraccion-cama-guano/menu9-registro-extraccion-cama-guano.component';
import { Menu9RegistroCompostajeCamaGuanoComponent } from './menu9-registro-compostaje-cama-guano/menu9-registro-compostaje-cama-guano.component';
import { Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent } from './menu9-registro-entierro-fosa-animales-muertos-derivados/menu9-registro-entierro-fosa-animales-muertos-derivados.component';

//Menu 10
import { Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent } from './menu10-registro-entrada-salida-animales-establecimiento/menu10-registro-entrada-salida-animales-establecimiento.component';

//Menu 11
import { Menu11RegistroCuarentenaAnimalComponent } from './menu11-registro-cuarentena-animal/menu11-registro-cuarentena-animal.component';

//Menu 12
import { Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent } from './menu12-registro-toma-muestra-envio-agua-fisicoquimico/menu12-registro-toma-muestra-envio-agua-fisicoquimico.component';
import { Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent } from './menu12-registro-toma-muestra-envio-agua-microbiologico/menu12-registro-toma-muestra-envio-agua-microbiologico.component';

//Menu 13
import { Menu13RegistroCapacitacionComponent } from './menu13-registro-capacitacion/menu13-registro-capacitacion.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table-example', component: TableExampleComponent },
    { path: 'registro-alta-baja-reproductores', component: RegistroAltaBajaReproductoresComponent },
    { path: 'edit-insert-row', component: EditInsertRowComponent },
    { path: 'aspecto-sanitario-produccion-avicola-home', component: AspectoSanitarioProduccionAvicolaHomeComponent },
    { path: 'aspecto-sanitario-produccion-porcina-home', component: AspectoSanitarioProduccionPorcinaHomeComponent },
    { path: 'mantenimiento-instalacion-productiva-avicola-terminacion-home', component: MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent },
    { path: 'mantenimiento-instalacion-productiva-porcina-home', component: MantenimientoInstalacionProductivaPorcinaHomeComponent },
    { path: 'mantenimiento-instalacion-cuarentena-enfermeria-home', component: MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent },
    { path: 'visitas-veterinarias-eventuales-home', component: VisitasVeterinariasEventualesHomeComponent },
    { path: 'identificacion-ubicacion-trampas-roedores-home', component: IdentificacionUbicacionTrampasRoedoresHomeComponent },
    { path: 'insumos-home', component: InsumosHomeComponent },
    { path: 'gestion-residuos-home', component: GestionResiduosHomeComponent },
    { path: 'entrada-salida-animales-establecimiento-home', component: EntradaSalidaAnimalesEstablecimientoHomeComponent },
    { path: 'cuarentena-animal-home', component: CuarentenaAnimalHomeComponent },
    { path: 'toma-muestra-analisis-home', component: TomaMuestraAnalisisHomeComponent },
    { path: 'registro-capacitacion-home', component: RegistroCapacitacionHomeComponent },
   
    //Menu1
    { path: 'menu1-registro-alta-baja-reproductores', component: Menu1RegistroAltaBajaReproductoresComponent },
    { path: 'menu1-registro-servicios', component: Menu1RegistroServiciosComponent },
    { path: 'menu1-registro-control-preniez', component: Menu1RegistroControlPreniezComponent },
    { path: 'menu1-registro-parto-nacimiento', component: Menu1RegistroPartoNacimientoComponent },
    { path: 'menu1-registro-muertes', component: Menu1RegistroMuertesComponent },
    { path: 'menu1-registro-signos-visibles-enfermedad', component: Menu1RegistroSignosVisiblesEnfermedadComponent },
    { path: 'menu1-registro-aplicacion-productos-veterinarios', component: Menu1RegistroAplicacionProductosVeterinariosComponent },

    //Menu 2
    { path: 'menu2-registro-signos-visibles-enfermedad', component: Menu2RegistroSignosVisiblesEnfermedadComponent },
    { path: 'menu2-registro-aplicacion-productos-veterinarios', component: Menu2RegistroAplicacionProductosVeterinariosComponent },
    { path: 'menu2-registro-muertes', component: Menu2RegistroMuertesComponent },

    //Menu 3
    { path: 'menu3-registro-mantenimiento-instalacion-porcina', component: Menu3RegistroMantenimientoInstalacionPorcinaComponent },

    //Menu 4
    { path: 'menu4-registro-mantenimiento-instalacion-recria', component: Menu4RegistroMantenimientoInstalacionRecriaComponent },
    { path: 'menu4-registro-mantenimiento-instalacion-terminacion', component: Menu4RegistroMantenimientoInstalacionTerminacionComponent },

    //Menu 5
    { path: 'menu5-registro-mantenimiento-instalacion-cuarentena', component: Menu5RegistroMantenimientoInstalacionCuarentenaComponent },
    { path: 'menu5-registro-mantenimiento-instalacion-enfermería', component: Menu5RegistroMantenimientoInstalacionEnfermeriaComponent },
    
    //Menu 6
    { path: 'menu6-registro-visitas-veterinarias', component: Menu6RegistroVisitasVeterinariasComponent },
    { path: 'menu6-registro-visitas-eventuales', component: Menu6RegistroVisitasEventualesComponent },

    //Menu 7
    { path: 'menu7-registro-mantenimiento-identificacion-ubicacion-trampas', component: Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent },

    //Menu 8
    { path: 'menu8-registro-insumos-alimentarios', component: Menu8RegistroInsumosAlimentariosComponent },
    { path: 'menu8-registro-insumos-veterinarios', component: Menu8RegistroInsumosVeterinariosComponent },
    { path: 'menu8-registro-insumos-limpieza-desinfeccion', component: Menu8RegistroInsumosLimpiezaDesinfeccionComponent },

    //Menu 9
    { path: 'menu9-registro-gestiones-residuos-veterinarios', component: Menu9RegistroGestionResiduosVeterinariosComponent },
    { path: 'menu9-registro-extraccion-cama-guano', component: Menu9RegistroExtraccionCamaGuanoComponent },
    { path: 'menu9-registro-compostaje-cama-guano', component: Menu9RegistroCompostajeCamaGuanoComponent },
    { path: 'menu9-registro-entierro-fosa-animales-muertos-derivados', component: Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent },

    //Menu 10
    { path: 'menu10-registro-entrada-salida-animales-establecimiento', component: Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent },

    //Menu 11
    { path: 'menu11-registro-cuarentena-animal', component: Menu11RegistroCuarentenaAnimalComponent },

    //Menu 12
    { path: 'menu12-registro-toma-muestra-envio-agua-fisicoquimico', component: Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent },
    { path: 'menu12-registro-toma-muestra-envio-agua-microbiologico', component: Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent },

    //Menu 13
    { path: 'menu13-registro-capacitacion', component: Menu13RegistroCapacitacionComponent },




  ];
  
@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        MatDialogModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TableExampleComponent,
        RegistroAltaBajaReproductoresComponent,
        EditInsertRowComponent,
        AspectoSanitarioProduccionAvicolaHomeComponent,
        AspectoSanitarioProduccionPorcinaHomeComponent,
        MantenimientoInstalacionProductivaPorcinaHomeComponent,
        MantenimientoInstalacionProductivaAvicolaTerminacionHomeComponent,
        MantenimientoInstalacionCuarentenaEnfermeriaHomeComponent,
        VisitasVeterinariasEventualesHomeComponent,
        IdentificacionUbicacionTrampasRoedoresHomeComponent,
        InsumosHomeComponent,
        GestionResiduosHomeComponent,
        EntradaSalidaAnimalesEstablecimientoHomeComponent,
        CuarentenaAnimalHomeComponent,
        TomaMuestraAnalisisHomeComponent,
        RegistroCapacitacionHomeComponent,
        Menu1RegistroAltaBajaReproductoresComponent,
        Menu1RegistroServiciosComponent,
        Menu1RegistroControlPreniezComponent,
        Menu1RegistroPartoNacimientoComponent,
        Menu1RegistroMuertesComponent,
        Menu1RegistroSignosVisiblesEnfermedadComponent,
        Menu1RegistroAplicacionProductosVeterinariosComponent,
        Menu2RegistroSignosVisiblesEnfermedadComponent,
        Menu2RegistroAplicacionProductosVeterinariosComponent,
        Menu2RegistroMuertesComponent,
        Menu3RegistroMantenimientoInstalacionPorcinaComponent,
        Menu4RegistroMantenimientoInstalacionRecriaComponent,
        Menu4RegistroMantenimientoInstalacionTerminacionComponent,
        Menu5RegistroMantenimientoInstalacionCuarentenaComponent,
        Menu5RegistroMantenimientoInstalacionEnfermeriaComponent,
        Menu6RegistroVisitasVeterinariasComponent,
        Menu6RegistroVisitasEventualesComponent,
        Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent,
        Menu8RegistroInsumosAlimentariosComponent,
        Menu8RegistroInsumosVeterinariosComponent,
        Menu8RegistroInsumosLimpiezaDesinfeccionComponent,
        Menu9RegistroGestionResiduosVeterinariosComponent,
        Menu9RegistroExtraccionCamaGuanoComponent,
        Menu9RegistroCompostajeCamaGuanoComponent,
        Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent,
        Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent,
        Menu11RegistroCuarentenaAnimalComponent,
        Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent,
        Menu12RegistroTomaMuestraEnvioAguaMicrobiologicoComponent,
        Menu13RegistroCapacitacionComponent,

    ],
    entryComponents: [],
    providers: [
        
    ],
    bootstrap: [
        AppComponent,
    ],
})

export class AppModule {
}
