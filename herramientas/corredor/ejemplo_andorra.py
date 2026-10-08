# Ejemplo de archivo de datos para generar.py: el de Andorra, tal como se usó
# para escribir supabase/migrations/20261007170600_corredor_andorra.sql.
#
# NO lo corras tal cual: esa migración ya está aplicada en producción y una
# segunda con los mismos ids no haría nada (on conflict do nothing). Sirve como
# plantilla para un país nuevo: copiá el archivo, cambiá los datos y el `cc`.
#
# Ciudad: (nn, slug, nombre, mínimas[12], máximas[12], lluvia[12] 0-100, factor)
#   nn       00 a 08; 00 es la base y lleva factor 1.00
#   factor   multiplica los precios de la base para esa ciudad
# cc: dos dígitos hex para los ids, únicos en todo el proyecto. Para ver los que
#     ya se usaron:
#       grep -ho "8000-00000000[0-9a-f]\{2\}00'" supabase/migrations/*.sql | sort -u
# productos: 18 tuplas (precio, nombre); None usa el nombre por defecto de la
#     PLANTILLA de generar.py. El orden es el de la plantilla.

ANDORRA = dict(
    slug="andorra", nombre="Andorra", moneda="EUR", cc="43",
    encabezado="""Andorra, con Andorra la Vella como ciudad base. Precios en euros, con
centavos: Andorra usa el euro por un acuerdo con la Unión Europea.

Un país de valles de alta montaña, donde la altura manda más que el mes: la
capital, a algo más de mil metros, tiene inviernos fríos y veranos agradables,
y Pas de la Casa, a más de dos mil, tiene nieve de diciembre a abril. No hay
aeropuerto: se llega por ruta desde España o Francia.""",
    ciudades=[
        ("00", "andorra-la-vella", "Andorra la Vella",
         [-2.4,-1.6,0.8,3.2,7.0,10.6,12.8,12.6,9.4,5.6,1.0,-1.6],
         [6.6,8.4,11.6,13.6,17.8,22.6,25.8,25.4,21.4,16.0,9.8,7.0],
         [23,23,29,35,42,35,26,29,29,29,29,26], 1.00),
        ("01", "escaldes", "Escaldes-Engordany",
         [-2.6,-1.8,0.6,3.0,6.8,10.4,12.6,12.4,9.2,5.4,0.8,-1.8],
         [6.4,8.2,11.4,13.4,17.6,22.4,25.6,25.2,21.2,15.8,9.6,6.8],
         [23,23,29,35,42,35,26,29,29,29,29,26], 1.00),
        ("02", "canillo", "Canillo",
         [-5.0,-4.6,-2.2,0.2,4.0,7.6,9.8,9.6,6.6,3.0,-1.6,-4.2],
         [4.0,5.2,8.2,10.2,14.4,19.2,22.4,22.0,18.0,12.8,6.8,4.4],
         [26,26,32,39,45,39,32,32,32,32,32,29], 0.95),
        ("03", "soldeu", "Soldeu y El Tarter",
         [-7.2,-7.0,-4.8,-2.4,1.4,5.0,7.4,7.2,4.2,0.6,-3.8,-6.4],
         [1.8,2.6,5.4,7.4,11.6,16.4,19.8,19.4,15.4,10.4,4.6,2.2],
         [26,26,32,39,45,39,32,32,32,32,32,29], 1.15),
        ("04", "pas-de-la-casa", "Pas de la Casa",
         [-8.8,-8.8,-6.8,-4.4,-0.6,3.2,5.8,5.6,2.6,-1.0,-5.4,-8.0],
         [0.0,0.6,3.0,5.0,9.4,14.4,17.8,17.4,13.4,8.4,2.8,0.4],
         [29,29,35,39,45,39,32,32,32,32,35,32], 1.05),
        ("05", "ordino", "Ordino",
         [-4.0,-3.4,-1.0,1.4,5.2,8.8,11.0,10.8,7.8,4.2,-0.4,-3.0],
         [5.0,6.4,9.6,11.6,15.8,20.6,23.8,23.4,19.4,14.2,8.0,5.4],
         [26,26,32,39,45,39,32,32,32,32,32,29], 0.95),
        ("06", "arinsal", "La Massana y Arinsal",
         [-4.4,-3.8,-1.4,1.0,4.8,8.4,10.6,10.4,7.4,3.8,-0.8,-3.4],
         [4.6,6.0,9.2,11.2,15.4,20.2,23.4,23.0,19.0,13.8,7.6,5.0],
         [26,26,32,39,45,39,32,32,32,32,32,29], 0.95),
        ("07", "sant-julia", "Sant Julià de Lòria",
         [-1.4,-0.6,1.8,4.2,8.0,11.6,13.8,13.6,10.4,6.6,2.0,-0.6],
         [7.6,9.4,12.6,14.6,18.8,23.6,26.8,26.4,22.4,17.0,10.8,8.0],
         [23,23,29,35,42,35,26,29,29,29,29,26], 0.90),
        ("08", "madriu", "Valle del Madriu",
         [-6.2,-5.8,-3.6,-1.2,2.6,6.2,8.6,8.4,5.4,1.8,-2.8,-5.4],
         [2.8,3.8,6.8,8.8,13.0,17.8,21.2,20.8,16.8,11.6,5.8,3.4],
         [26,26,32,39,45,39,32,32,32,32,32,29], 0.90),
    ],
    productos=[
        (5, "Desayuno (café y croissant)"), (16, "Almuerzo (menú del día)"),
        (35, None), (45, None), (7, "Bocadillo al paso"),
        (110, None), (8, None), (5, None), (5, None),
        (4, "Bus de línea, día"), (12, "Viaje corto en taxi"),
        (35, "Bus desde el aeropuerto de Barcelona (por tramo)"),
        (15, "Telecabina de verano (ida y vuelta)"),
        (30, None), (25, None), (8, None), (25, None),
        (65, "Día de esquí o excursión guiada"),
    ],
)

PAISES = [ANDORRA]
