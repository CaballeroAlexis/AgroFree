BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS `hero` (
	`id`	INTEGER NOT NULL,
	`name`	TEXT NOT NULL,
	PRIMARY KEY(`id`)
);

CREATE TABLE 'm1_registro_alta_baja_reproductores' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_alta" VARCHAR(500), "tipo_reproductor" VARCHAR (255), "cod_identificatorio" VARCHAR(255), "edad_meses_fecha_alta" VARCHAR(255), origen VARCHAR(255), "observacion_fecha_alta" VARCHAR (255), "fecha_baja" VARCHAR(255), "observacion_fecha_baja" VARCHAR(255));
CREATE TABLE 'm1_registro_servicios' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_servicios" VARCHAR(500), "codigo_madre" VARCHAR (255), "codigo_padrillo" VARCHAR(255), "tipo_servicio" VARCHAR(255), "observacion" VARCHAR(255));
CREATE TABLE 'm1_registro_control_preñez' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_control" VARCHAR(500), "codigo_madre" VARCHAR (255), "observacion" VARCHAR(255));
CREATE TABLE 'm1_registro_parto_nacimiento' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_parto" VARCHAR(500), "codigo_madre" VARCHAR (255), "n_nacidos_vivos" VARCHAR(255),"num_nacidos_muertos" VARCHAR(255),"num_nacidos_totales" VARCHAR(255),"num_celda" VARCHAR(255),"observacion" VARCHAR(255));
CREATE TABLE 'm1_registro_muertes' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_muerte" VARCHAR(500), "categoria" VARCHAR (255), "num_cabezas" VARCHAR(255),"causas" VARCHAR(255),"responsable_diagnostico" VARCHAR(255),"observacion" VARCHAR(255));
CREATE TABLE 'm1_registro_signos_visibles_enfermedad' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_hora" VARCHAR(500), "categoria" VARCHAR (255), "cant_aprox_afectados" VARCHAR(255),"descripcion" VARCHAR(500),"medidas_tomadas" VARCHAR(500));
CREATE TABLE 'm1_registro_aplicacion_productos_veterinarios' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha" VARCHAR(500), "categoria" VARCHAR (255), "cant_tratados" VARCHAR(255),"droga_nombre_comercial" VARCHAR(500),"lote" VARCHAR(500),"vto" VARCHAR(500),"dosis" VARCHAR(500),"via" VARCHAR(500),"responsable" VARCHAR(500));

CREATE TABLE 'm2_registro_signos_visibles_enfermedad' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_hora" VARCHAR(500), "categoria" VARCHAR (255), "cant_aprox_afectados" VARCHAR(255),"descripcion" VARCHAR(500),"medidas_tomadas" VARCHAR(500));
CREATE TABLE 'm2_registro_aplicacion_productos_veterinarios' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha" VARCHAR(500), "categoria" VARCHAR (255), "cant_tratados" VARCHAR(255),"droga_nombre_comercial" VARCHAR(500),"lote" VARCHAR(500),"vto" VARCHAR(500),"dosis" VARCHAR(500),"via" VARCHAR(500),"responsable" VARCHAR(500));
CREATE TABLE 'm2_registro_muertes' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_muerte" VARCHAR(500), "categoria" VARCHAR (255), "num_cabezas" VARCHAR(255),"causas" VARCHAR(255),"responsable_diagnostico" VARCHAR(255),"observacion" VARCHAR(255));

CREATE TABLE 'm3_registro_mantenimiento_instalacion_porcina' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"concentracion" VARCHAR(500),"fecha_vencimiento" VARCHAR(500),"forma_aplicacion" VARCHAR(500),"tiempo_exposicion" VARCHAR(500),"responsable" VARCHAR(500));

CREATE TABLE 'm4_registro_mantenimiento_instalacion_avicola_recria_engorde' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"concentracion" VARCHAR(500),"fecha_vencimiento" VARCHAR(500),"forma_aplicacion" VARCHAR(500),"tiempo_exposicion" VARCHAR(500),"responsable" VARCHAR(500));
CREATE TABLE 'm4_registro_mantenimiento_instalacion_avicola_terminacion' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"concentracion" VARCHAR(500),"fecha_vencimiento" VARCHAR(500),"forma_aplicacion" VARCHAR(500),"tiempo_exposicion" VARCHAR(500),"responsable" VARCHAR(500));

CREATE TABLE 'm5_registro_mantenimiento_instalacion_cuarentena' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"concentracion" VARCHAR(500),"fecha_vencimiento" VARCHAR(500),"forma_aplicacion" VARCHAR(500),"tiempo_exposicion" VARCHAR(500),"responsable" VARCHAR(500));
CREATE TABLE 'm5_registro_mantenimiento_instalacion_enfermeria' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"concentracion" VARCHAR(500),"fecha_vencimiento" VARCHAR(500),"forma_aplicacion" VARCHAR(500),"tiempo_exposicion" VARCHAR(500),"responsable" VARCHAR(500));

CREATE TABLE 'm6_registro_visitas_veterinarias' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha" VARCHAR(500), "hora_inicio" VARCHAR (255), "hora_finalizacion" VARCHAR(255),"act_desarrolladas" VARCHAR(500),"novedades" VARCHAR(500),"firma" VARCHAR(500),"aclaracion" VARCHAR(500));
CREATE TABLE 'm6_registro_visitas_eventuales' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha" VARCHAR(500), "apellido_nombre" VARCHAR (255), "procedencia" VARCHAR(255),"motivo_visita" VARCHAR(500),"hora_entrada" VARCHAR(500),"hora_salida" VARCHAR(500),"firma_salida" VARCHAR(500),"contacto_cerdos_72_horas" VARCHAR(500));

CREATE TABLE 'm7_registro_mantenimiento_iden_ubi_trampas_roedores' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"principio_activo" VARCHAR(500),"num_lote" VARCHAR(500),"fec_vencimiento" VARCHAR(500),"clas_toxicologica" VARCHAR(500),"dosis" VARCHAR(500),"fec_control" VARCHAR(500),"responsable" VARCHAR(500));

CREATE TABLE 'm8_registro_insumos_alimentarios' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_compra" VARCHAR(500), "denominacion_insumo" VARCHAR (255), "cantidad" VARCHAR(255),"costo_total" VARCHAR(500),"destino" VARCHAR(500),"observacion" VARCHAR(500));
CREATE TABLE 'm8_registro_insumos_veterinarios' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_compra" VARCHAR(500), "nombre_comercial" VARCHAR (255), "presentacion" VARCHAR(255),"lote" VARCHAR(500),"fec_vencimiento" VARCHAR(500),"utilidad" VARCHAR(500));
CREATE TABLE 'm8_registro_insumos_limpieza_desinfeccion' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_compra" VARCHAR(500), "denominacion_insumo" VARCHAR (255), "cantidad" VARCHAR(255),"costo_total" VARCHAR(500),"destino" VARCHAR(500),"utilidad" VARCHAR(500));

CREATE TABLE 'm9_registro_gestion_residuos_veterinarios' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "insumo_desechado" VARCHAR (255), "cantidad" VARCHAR(255),"responsable" VARCHAR(500),"fecha_egreso_establecimiento" VARCHAR(500));
CREATE TABLE 'm9_registro_extraccion_cama_guano' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "instalacion" VARCHAR (255), "responsable" VARCHAR(255),"observacion" VARCHAR(500));
CREATE TABLE 'm9_registro_compostaje_cama_guano' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_inicio_operacion" VARCHAR(500), "fecha_finalizacion" VARCHAR (255), "num_celda_compostaje" VARCHAR(255),"responsable" VARCHAR(500),"observacion" VARCHAR(500));
CREATE TABLE 'm9_registro_entierro_fosa_animales_muertos_derivados' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_operacion" VARCHAR(500), "tipo" VARCHAR (255), "categoria" VARCHAR(255),"num_cabezas" VARCHAR(500),"ubicacion_fosa" VARCHAR(500),"responsable" VARCHAR(500),"observacion" VARCHAR(500));

CREATE TABLE 'm10_registro_entrada_salida_animales_establecimiento' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_movimiento" VARCHAR(500), "movimiento" VARCHAR (255), "categoria" VARCHAR(255),"num_cabezas" VARCHAR(500),"origen_destino" VARCHAR(500),"observacion" VARCHAR(500));

CREATE TABLE 'm11_registro_cuarentena_animal' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_inicio" VARCHAR(500), "tipo" VARCHAR (255), "categoria" VARCHAR(255),"num_cabezas" VARCHAR(500),"causa" VARCHAR(500),"fecha_finalizacion" VARCHAR(500),"responsable" VARCHAR(500),"observacion" VARCHAR(500));

CREATE TABLE 'm12_registro_toma_muestra_envio_agua_fisicoquimico' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_extraccion" VARCHAR(500), "hora_extraccion" VARCHAR (255), "cantidad" VARCHAR(255),"fuente" VARCHAR(500),"responsable" VARCHAR(500),"destino" VARCHAR(500),"fecha_envio" VARCHAR(500),"hora_envio" VARCHAR(500));
CREATE TABLE 'm12_registro_toma_muestra_envio_agua_microbiologico' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "fecha_extraccion" VARCHAR(500), "hora_extraccion" VARCHAR (255), "cantidad" VARCHAR(255),"fuente" VARCHAR(500),"responsable" VARCHAR(500),"destino" VARCHAR(500),"fecha_envio" VARCHAR(500),"hora_envio" VARCHAR(500));

CREATE TABLE 'm13_registro_capacitacion' ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "apellido_nombre" VARCHAR(255), "dni" VARCHAR (255), "cargo" VARCHAR(255),"entrega_material" VARCHAR(500),"firma" VARCHAR(500));




COMMIT;

