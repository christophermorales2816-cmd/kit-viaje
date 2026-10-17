/**
 * Las ciudades que en castellano se buscan con otro nombre (spec, 17.3).
 *
 * OurAirports escribe las ciudades en inglés o en el idioma local, y a veces
 * pone el municipio del aeropuerto y no la ciudad a la que sirve: Atenas es
 * "Spata-Artemida", Bucarest es "Otopeni", Bruselas es "Zaventem". Quien busca
 * desde acá escribe "Atenas". Cada entrada es el nombre que usa la prensa en
 * castellano —el mismo criterio que las guías— con los aeropuertos de esa
 * ciudad.
 *
 * Solo hace falta cuando el nombre normalizado no coincide: "París", "Múnich"
 * o "Bogotá" ya se encuentran solos, porque la búsqueda ignora acentos. Un test
 * verifica que cada código exista y que cada ciudad base de las guías se
 * encuentre por su nombre.
 *
 * Una ciudad sin aeropuerto propio lleva el que la sirve, y un comentario:
 * buscar "Jerusalén" y no encontrar nada no le sirve a nadie.
 */
export const NOMBRES_EN_CASTELLANO: Record<string, string[]> = {
  // América
  // Antigua Guatemala no tiene aeropuerto: se llega por La Aurora.
  "Antigua Guatemala": ["GUA"],
  "Ciudad de Guatemala": ["GUA"],
  "Ciudad de México": ["MEX", "NLU"],
  "Ciudad de Panamá": ["PTY"],
  Filadelfia: ["PHL"],
  "La Habana": ["HAV"],
  "Nueva Orleans": ["MSY"],
  "Nueva York": ["JFK", "LGA", "EWR"],
  "San Pablo": ["GRU", "CGH", "VCP"],

  // Europa
  // Andorra no tiene aeropuerto: el más cercano es el de La Seu d'Urgell.
  "Andorra la Vella": ["LEU"],
  Atenas: ["ATH"],
  Basilea: ["BSL"],
  Belgrado: ["BEG"],
  Bolonia: ["BLQ"],
  Bruselas: ["BRU", "CRL"],
  Bucarest: ["OTP", "BBU"],
  Colonia: ["CGN"],
  Copenhague: ["CPH"],
  Cracovia: ["KRK"],
  Edimburgo: ["EDI"],
  Estambul: ["IST", "SAW"],
  Estocolmo: ["ARN", "BMA", "NYO"],
  Florencia: ["FLR"],
  Fráncfort: ["FRA"],
  Ginebra: ["GVA"],
  Génova: ["GOA"],
  Gotemburgo: ["GOT"],
  Hamburgo: ["HAM"],
  // Kotor no tiene aeropuerto: el de la bahía es el de Tivat.
  Kotor: ["TIV"],
  "La Valeta": ["MLA"],
  // Limasol queda entre los dos aeropuertos de Chipre.
  Limasol: ["LCA", "PFO"],
  Liubliana: ["LJU"],
  Londres: ["LHR", "LGW", "STN", "LTN", "LCY", "SEN"],
  Milán: ["MXP", "LIN", "BGY"],
  Moscú: ["SVO", "DME", "VKO"],
  Nápoles: ["NAP"],
  Oporto: ["OPO"],
  Praga: ["PRG"],
  Reikiavik: ["KEF", "RKV"],
  Roma: ["FCO", "CIA"],
  "San Petersburgo": ["LED"],
  Skopie: ["SKP"],
  Turín: ["TRN"],
  Varsovia: ["WAW", "WMI"],
  Venecia: ["VCE", "TSF"],
  Viena: ["VIE"],
  Vilna: ["VNO"],

  // África
  Abiyán: ["ABJ"],
  "Adís Abeba": ["ADD"],
  Argel: ["ALG"],
  Buyumbura: ["BJM"],
  // Del lado de Zimbabue y del de Zambia.
  "Cataratas Victoria": ["VFA", "LVI"],
  "Ciudad del Cabo": ["CPT"],
  Conakri: ["CKY"],
  Cotonú: ["COO"],
  "Dar es-Salam": ["DAR"],
  Duala: ["DLA"],
  "El Cairo": ["CAI", "SPX"],
  Johannesburgo: ["JNB"],
  // El aeropuerto de Kampala está en Entebbe, a una hora.
  Kampala: ["EBB"],
  Marrakech: ["RAK"],
  Nuakchot: ["NKC"],
  // Santa María es el pueblo de la playa de Sal, en Cabo Verde.
  "Santa Maria": ["SID"],
  Túnez: ["TUN"],
  Yamena: ["NDJ"],
  Yibuti: ["JIB"],

  // Asia
  "Abu Dabi": ["AUH"],
  Amán: ["AMM"],
  Asjabad: ["ASB"],
  Bagdad: ["BGW"],
  Biskek: ["BSZ"],
  Calcuta: ["CCU"],
  Cantón: ["CAN"],
  "Ciudad de Kuwait": ["KWI"],
  Daca: ["DAC"],
  Dusambé: ["DYU"],
  // Jerusalén no tiene aeropuerto: se llega por Ben Gurión, en Tel Aviv.
  Jerusalén: ["TLV"],
  Katmandú: ["KTM"],
  "Luang Prabang": ["LPQ"],
  Macao: ["MFM"],
  Madrás: ["MAA"],
  Mascate: ["MCT"],
  "Nom Pen": ["KTI"],
  "Nueva Delhi": ["DEL"],
  Pekín: ["PEK", "PKX"],
  Rangún: ["RGN"],
  Riad: ["RUH"],
  Seúl: ["ICN", "GMP"],
  Singapur: ["SIN"],
  Taipéi: ["TPE", "TSA"],
  Taskent: ["TAS"],
  Teherán: ["IKA", "THR"],
  Tiflis: ["TBS"],
  // Timbu no tiene aeropuerto: el del valle es el de Paro.
  Timbu: ["PBH"],
  Tokio: ["HND", "NRT"],
  "Ulán Bator": ["UBN"],
  Yakarta: ["CGK", "HLP"],

  // Oceanía
  Kolonia: ["PNI"],
  Koror: ["ROR"],
  Numea: ["NOU"],
  Sídney: ["SYD"],
};
